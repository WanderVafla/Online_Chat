import os
import websockets
import asyncio

users = set()

async def echo(websocket):
    try:
        users.add(websocket)
        async for message in websocket:
            for user in users:
                await user.send(message)
                print(message)
    finally:
        users.remove(websocket)
        
async def main():
    port = int(os.environ.get("PORT", 3000))
    async with websockets.serve(echo, host='0.0.0.0', port=port):
        print('Server is started {port}!')
        await asyncio.Future()
        
if __name__ == '__main__':
    asyncio.run(main())
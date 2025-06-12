import websockets
import asyncio

users = set()

async def echo(websocket):
    try:
        users.add(websocket)
        async for message in websocket:
            for user in users:
                # await user.send(message)
                # print(message)
                if user == websocket:
                    await user.send(message)
                    print(message)
    finally:
        users.remove(websocket)
    
    # async for message in websocket:
    #     await websocket.send(message)
    #     print(message)
        
async def main():
    async with websockets.serve(echo, 'localhost', 8080) as server:
        print('Server is started ')
        await asyncio.Future()
        
if __name__ == '__main__':
    asyncio.run(main())
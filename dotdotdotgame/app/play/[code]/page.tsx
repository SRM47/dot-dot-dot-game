import GameRoom from "../../../components/GameRoom";

export default function PlayRoomPage({ params }: { params: { code: string } }) {
    return <GameRoom roomCode={params.code}/>
}

import { IconDeviceAirpods, IconDeviceAudioTape, IconDeviceSpeaker, IconDisc, IconHeadphonesFilled, IconMusic, IconPlaylist, IconRadio, IconVinyl, IconVolume } from "@tabler/icons-react"; 
import Link from "next/link";


export default function UILogo() {

    const randomIcon = () => {
        const icons = [
            IconVinyl, IconDeviceAirpods, IconDeviceAudioTape, IconDeviceSpeaker, IconDisc, IconHeadphonesFilled, IconMusic, IconRadio, IconPlaylist, IconVolume
        ]
        return icons[Math.floor(Math.random() * icons.length)]
    }

    return (
        <>
            <Link href="/" className="flex flex-row">
                <IconVinyl className="h-8 w-8 text-gray-600" />
                <h1 className="text-3xl font-bold text-gray-600">Surcoteca</h1>
            </Link>
        </>
    )
}
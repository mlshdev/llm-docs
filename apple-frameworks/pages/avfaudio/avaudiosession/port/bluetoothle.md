> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/port/bluetoothle](https://developer.apple.com/documentation/avfaudio/avaudiosession/port/bluetoothle)

# bluetoothLE (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An output to a Bluetooth Low Energy (LE) device.

## Declaration

```swift
static let bluetoothLE: AVAudioSession.Port
```

<a id="Discussion"></a>

## Discussion

Apple supports the use of Bluetooth Low Energy (LE) hearing aids. Apps don’t have control over routing to these devices. Instead, the system automatically decides when routing to Bluetooth LE is appropriate.

To determine if audio is being routed to a Bluetooth LE device, inspect the current audio route and look for the presence of a Bluetooth LE port, as shown in the following code example.

```swift
var routingToBLE = false
let session = AVAudioSession.sharedInstance()
// Iterate over the currentRoute's outputs.
for portDesc in session.currentRoute.outputs where portDesc.portType == .bluetoothLE {
    routingToBLE = true
    break
}
```

## See Also

### Getting Output Ports

- [airPlay](airplay.md): An output to an AirPlay device.
- [bluetoothA2DP](bluetootha2dp.md): An output to a Bluetooth A2DP device.
- [builtInReceiver](builtinreceiver.md): An output to the speaker you hold to your ear when you’re on a phone call.
- [builtInSpeaker](builtinspeaker.md): An output to the device’s built-in speaker.
- [HDMI](hdmi.md): An output to a High-Definition Multimedia Interface (HDMI) device.
- [headphones](headphones.md): An output to wired headphones.
- [lineOut](lineout.md): A line-level output to the dock connector.
- [mediaDeviceExtension](mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed

# AVAudioSessionPortBluetoothLE (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An output to a Bluetooth Low Energy (LE) device.

## Declaration

```objectivec
extern AVAudioSessionPort const AVAudioSessionPortBluetoothLE;
```

<a id="Discussion"></a>

## Discussion

Apple supports the use of Bluetooth Low Energy (LE) hearing aids. Apps don’t have control over routing to these devices. Instead, the system automatically decides when routing to Bluetooth LE is appropriate.

To determine if audio is being routed to a Bluetooth LE device, inspect the current audio route and look for the presence of a Bluetooth LE port, as shown in the following code example.

```swift
var routingToBLE = false
let session = AVAudioSession.sharedInstance()
// Iterate over the currentRoute's outputs.
for portDesc in session.currentRoute.outputs where portDesc.portType == .bluetoothLE {
    routingToBLE = true
    break
}
```

## See Also

### Getting Output Ports

- [AVAudioSessionPortAirPlay](airplay.md): An output to an AirPlay device.
- [AVAudioSessionPortBluetoothA2DP](bluetootha2dp.md): An output to a Bluetooth A2DP device.
- [AVAudioSessionPortBuiltInReceiver](builtinreceiver.md): An output to the speaker you hold to your ear when you’re on a phone call.
- [AVAudioSessionPortBuiltInSpeaker](builtinspeaker.md): An output to the device’s built-in speaker.
- [AVAudioSessionPortHDMI](hdmi.md): An output to a High-Definition Multimedia Interface (HDMI) device.
- [AVAudioSessionPortHeadphones](headphones.md): An output to wired headphones.
- [AVAudioSessionPortLineOut](lineout.md): A line-level output to the dock connector.
- [AVAudioSessionPortMediaDeviceExtension](mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed

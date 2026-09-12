> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/port](https://developer.apple.com/documentation/avfaudio/avaudiosession/port)

# AVAudioSession.Port (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A structure that defines the available input and output port types.

## Declaration

```swift
struct Port
```

## Topics

### Getting Input Ports

- [builtInMic](port/builtinmic.md): An input from a device’s built-in microphone.
- [continuityMicrophone](port/continuitymicrophone.md): An input from a Continuity Microphone on Apple TV.
- [headsetMic](port/headsetmic.md): An input from a wired headset’s built-in microphone.
- [lineIn](port/linein.md): A line-level input from the dock connector.

### Getting Output Ports

- [airPlay](port/airplay.md): An output to an AirPlay device.
- [bluetoothA2DP](port/bluetootha2dp.md): An output to a Bluetooth A2DP device.
- [bluetoothLE](port/bluetoothle.md): An output to a Bluetooth Low Energy (LE) device.
- [builtInReceiver](port/builtinreceiver.md): An output to the speaker you hold to your ear when you’re on a phone call.
- [builtInSpeaker](port/builtinspeaker.md): An output to the device’s built-in speaker.
- [HDMI](port/hdmi.md): An output to a High-Definition Multimedia Interface (HDMI) device.
- [headphones](port/headphones.md): An output to wired headphones.
- [lineOut](port/lineout.md): A line-level output to the dock connector.
- [mediaDeviceExtension](port/mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed

### Getting I/O Ports

- [AVB](port/avb.md): An I/O connection to an Audio Video Bridging (AVB) device.
- [PCI](port/pci.md): An I/O connection to a Peripheral Component Interconnect (PCI) device.
- [bluetoothHFP](port/bluetoothhfp.md): An I/O connection to a Bluetooth Hands-Free Profile device.
- [carAudio](port/caraudio.md): An I/O connection through Car Audio.
- [displayPort](port/displayport.md): An I/O connection to a DisplayPort device.
- [fireWire](port/firewire.md): An I/O connection to a FireWire device.
- [mediaDeviceExtension](port/mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed
- [thunderbolt](port/thunderbolt.md): An I/O connection to a Thunderbolt device.
- [usbAudio](port/usbaudio.md): An I/O connection to a Universal Serial Bus (USB) device.
- [virtual](port/virtual.md): An I/O connection that doesn’t correspond to physical audio hardware.

### Initializers

- [init(rawValue:)](port/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Port Attributes

- [portName](../avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](../avaudiosessionportdescription/porttype.md): The type of the port.
- [channels](../avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [uid](../avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](../avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [isSpatialAudioEnabled](../avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

# AVAudioSessionPort (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines the available input and output port types.

## Declaration

```objectivec
typedef NSString * AVAudioSessionPort;
```

## Topics

### Getting Input Ports

- [AVAudioSessionPortBuiltInMic](port/builtinmic.md): An input from a device’s built-in microphone.
- [AVAudioSessionPortContinuityMicrophone](port/continuitymicrophone.md): An input from a Continuity Microphone on Apple TV.
- [AVAudioSessionPortHeadsetMic](port/headsetmic.md): An input from a wired headset’s built-in microphone.
- [AVAudioSessionPortLineIn](port/linein.md): A line-level input from the dock connector.

### Getting Output Ports

- [AVAudioSessionPortAirPlay](port/airplay.md): An output to an AirPlay device.
- [AVAudioSessionPortBluetoothA2DP](port/bluetootha2dp.md): An output to a Bluetooth A2DP device.
- [AVAudioSessionPortBluetoothLE](port/bluetoothle.md): An output to a Bluetooth Low Energy (LE) device.
- [AVAudioSessionPortBuiltInReceiver](port/builtinreceiver.md): An output to the speaker you hold to your ear when you’re on a phone call.
- [AVAudioSessionPortBuiltInSpeaker](port/builtinspeaker.md): An output to the device’s built-in speaker.
- [AVAudioSessionPortHDMI](port/hdmi.md): An output to a High-Definition Multimedia Interface (HDMI) device.
- [AVAudioSessionPortHeadphones](port/headphones.md): An output to wired headphones.
- [AVAudioSessionPortLineOut](port/lineout.md): A line-level output to the dock connector.
- [AVAudioSessionPortMediaDeviceExtension](port/mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed

### Getting I/O Ports

- [AVAudioSessionPortAVB](port/avb.md): An I/O connection to an Audio Video Bridging (AVB) device.
- [AVAudioSessionPortPCI](port/pci.md): An I/O connection to a Peripheral Component Interconnect (PCI) device.
- [AVAudioSessionPortBluetoothHFP](port/bluetoothhfp.md): An I/O connection to a Bluetooth Hands-Free Profile device.
- [AVAudioSessionPortCarAudio](port/caraudio.md): An I/O connection through Car Audio.
- [AVAudioSessionPortDisplayPort](port/displayport.md): An I/O connection to a DisplayPort device.
- [AVAudioSessionPortFireWire](port/firewire.md): An I/O connection to a FireWire device.
- [AVAudioSessionPortMediaDeviceExtension](port/mediadeviceextension.md): Output to a media device vended through a system-wide extension that the user has installed
- [AVAudioSessionPortThunderbolt](port/thunderbolt.md): An I/O connection to a Thunderbolt device.
- [AVAudioSessionPortUSBAudio](port/usbaudio.md): An I/O connection to a Universal Serial Bus (USB) device.
- [AVAudioSessionPortVirtual](port/virtual.md): An I/O connection that doesn’t correspond to physical audio hardware.

## See Also

### Getting the Port Attributes

- [portName](../avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](../avaudiosessionportdescription/porttype.md): The type of the port.
- [channels](../avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](../avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [UID](../avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](../avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [spatialAudioEnabled](../avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionportdescription](https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription)

# AVAudioSessionPortDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Information about the capabilities of the port and the hardware channels it supports.

## Declaration

```swift
class AVAudioSessionPortDescription
```

<a id="overview"></a>

## Overview

A port description object describes a single input or output port associated with an audio route. Examples of audio ports include a device’s built-in speaker, a microphone on a wired headset, and a Bluetooth device supporting the Advanced Audio Distribution Profile (A2DP).

You can query the audio session’s [currentRoute](avaudiosession/currentroute.md) property to get information about the active set of input and output ports. To change the current audio routing, call the [setPreferredInput(\_:)](avaudiosession/setpreferredinput%28__%29.md) method. For example, on a device with a wired headset attached, the audio session’s [availableInputs](avaudiosession/availableinputs.md) array may contain two port descriptions: one for the headset microphone and one for the device’s built-in microphone. You can use the audio session’s [setPreferredInput(\_:)](avaudiosession/setpreferredinput%28__%29.md) method to select the headset or built-in microphone for audio input.

## Topics

### Getting the Port Attributes

- [portName](avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](avaudiosessionportdescription/porttype.md): The type of the port.
- [AVAudioSession.Port](avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [uid](avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [isSpatialAudioEnabled](avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

### Managing a Port’s Data Sources

- [dataSources](avaudiosessionportdescription/datasources.md): The available data sources for the port.
- [selectedDataSource](avaudiosessionportdescription/selecteddatasource.md): The currently selected audio data source for the port.
- [preferredDataSource](avaudiosessionportdescription/preferreddatasource.md): The preferred audio data source for the port.
- [setPreferredDataSource(\_:)](avaudiosessionportdescription/setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.

### Accessing the port extension

- [bluetoothMicrophoneExtension](avaudiosessionportdescription/bluetoothmicrophoneextension.md): An optional port extension that describes capabilities relevant to Bluetooth microphone ports.
- [AVAudioSessionPortExtensionBluetoothMicrophone](avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.
- [AVAudioSessionCapability](avaudiosessioncapability.md): Describes whether a specific capability is supported and if that capability is currently enabled

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the current route

- [currentRoute](avaudiosession/currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [routeChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

# AVAudioSessionPortDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Information about the capabilities of the port and the hardware channels it supports.

## Declaration

```objectivec
@interface AVAudioSessionPortDescription : NSObject
```

<a id="overview"></a>

## Overview

A port description object describes a single input or output port associated with an audio route. Examples of audio ports include a device’s built-in speaker, a microphone on a wired headset, and a Bluetooth device supporting the Advanced Audio Distribution Profile (A2DP).

You can query the audio session’s [currentRoute](avaudiosession/currentroute.md) property to get information about the active set of input and output ports. To change the current audio routing, call the [setPreferredInput:error:](avaudiosession/setpreferredinput%28__%29.md) method. For example, on a device with a wired headset attached, the audio session’s [availableInputs](avaudiosession/availableinputs.md) array may contain two port descriptions: one for the headset microphone and one for the device’s built-in microphone. You can use the audio session’s [setPreferredInput:error:](avaudiosession/setpreferredinput%28__%29.md) method to select the headset or built-in microphone for audio input.

## Topics

### Getting the Port Attributes

- [portName](avaudiosessionportdescription/portname.md): A descriptive name for the port.
- [portType](avaudiosessionportdescription/porttype.md): The type of the port.
- [AVAudioSessionPort](avaudiosession/port.md): A structure that defines the available input and output port types.
- [channels](avaudiosessionportdescription/channels.md): An array of channel objects that describe the port’s input or output channels.
- [AVAudioSessionChannelDescription](avaudiosessionchanneldescription.md): A class that describes a hardware channel on the current device.
- [UID](avaudiosessionportdescription/uid.md): A system-assigned unique identifier (UID) for the port.
- [hasHardwareVoiceCallProcessing](avaudiosessionportdescription/hashardwarevoicecallprocessing.md): A Boolean value that indicates whether the associated hardware port has built-in processing for two-way voice communication.
- [spatialAudioEnabled](avaudiosessionportdescription/isspatialaudioenabled.md): A Boolean value that indicates whether the port supports spatial audio playback.

### Managing a Port’s Data Sources

- [dataSources](avaudiosessionportdescription/datasources.md): The available data sources for the port.
- [selectedDataSource](avaudiosessionportdescription/selecteddatasource.md): The currently selected audio data source for the port.
- [preferredDataSource](avaudiosessionportdescription/preferreddatasource.md): The preferred audio data source for the port.
- [setPreferredDataSource:error:](avaudiosessionportdescription/setpreferreddatasource%28__%29.md): Sets the preferred audio data source for the port.

### Accessing the port extension

- [bluetoothMicrophoneExtension](avaudiosessionportdescription/bluetoothmicrophoneextension.md): An optional port extension that describes capabilities relevant to Bluetooth microphone ports.
- [AVAudioSessionPortExtensionBluetoothMicrophone](avaudiosessionportextensionbluetoothmicrophone.md): An object that describes capabilities of Bluetooth microphone ports.
- [AVAudioSessionCapability](avaudiosessioncapability.md): Describes whether a specific capability is supported and if that capability is currently enabled

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting the current route

- [currentRoute](avaudiosession/currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionRouteDescription](avaudiosessionroutedescription.md): An object that describes the input and output ports associated with a session’s audio route.
- [AVAudioSessionRouteChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

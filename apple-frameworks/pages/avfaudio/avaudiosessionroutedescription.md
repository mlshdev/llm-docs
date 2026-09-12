> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessionroutedescription](https://developer.apple.com/documentation/avfaudio/avaudiosessionroutedescription)

# AVAudioSessionRouteDescription (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the input and output ports associated with a session’s audio route.

## Declaration

```swift
class AVAudioSessionRouteDescription
```

## Mentioned In

- [Responding to audio route changes](responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. Instead, you retrieve the current audio route from your app’s [AVAudioSession](avaudiosession.md) object.

## Topics

### Getting the Input and Output Ports

- [inputs](avaudiosessionroutedescription/inputs.md): An array of audio input port descriptions.
- [outputs](avaudiosessionroutedescription/outputs.md): An array of audio output port descriptions.

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
- [AVAudioSessionPortDescription](avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [routeChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

# AVAudioSessionRouteDescription (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the input and output ports associated with a session’s audio route.

## Declaration

```objectivec
@interface AVAudioSessionRouteDescription : NSObject
```

## Mentioned In

- [Responding to audio route changes](responding-to-audio-route-changes.md)

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. Instead, you retrieve the current audio route from your app’s [AVAudioSession](avaudiosession.md) object.

## Topics

### Getting the Input and Output Ports

- [inputs](avaudiosessionroutedescription/inputs.md): An array of audio input port descriptions.
- [outputs](avaudiosessionroutedescription/outputs.md): An array of audio output port descriptions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting the current route

- [currentRoute](avaudiosession/currentroute.md): A description of the current audio route’s input and output ports.
- [AVAudioSessionPortDescription](avaudiosessionportdescription.md): Information about the capabilities of the port and the hardware channels it supports.
- [AVAudioSessionRouteChangeNotification](avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.

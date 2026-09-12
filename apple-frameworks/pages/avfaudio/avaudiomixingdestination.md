> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomixingdestination](https://developer.apple.com/documentation/avfaudio/avaudiomixingdestination)

# AVAudioMixingDestination (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a connection to a mixer node from a node that conforms to the audio mixing protocol.

## Declaration

```swift
class AVAudioMixingDestination
```

<a id="overview"></a>

## Overview

You can only use a destination instance when a source node provides it. You can’t use it as a standalone instance.

## Topics

### Getting Mixing Destination Properties

- [connectionPoint](avaudiomixingdestination/connectionpoint.md): The underlying mixer connection point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and Setting the Destination

- [destination(forMixer:bus:)](avaudiomixing/destination%28formixer_bus_%29.md): Gets the audio mixing destination object that corresponds to the specified mixer node and input bus.

# AVAudioMixingDestination (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a connection to a mixer node from a node that conforms to the audio mixing protocol.

## Declaration

```objectivec
@interface AVAudioMixingDestination : NSObject
```

<a id="overview"></a>

## Overview

You can only use a destination instance when a source node provides it. You can’t use it as a standalone instance.

## Topics

### Getting Mixing Destination Properties

- [connectionPoint](avaudiomixingdestination/connectionpoint.md): The underlying mixer connection point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Getting and Setting the Destination

- [destinationForMixer:bus:](avaudiomixing/destination%28formixer_bus_%29.md): Gets the audio mixing destination object that corresponds to the specified mixer node and input bus.

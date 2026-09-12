> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallcapabilityoptions](https://developer.apple.com/documentation/intents/incallcapabilityoptions)

# INCallCapabilityOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the capabilities of the call.

## Declaration

```swift
struct INCallCapabilityOptions
```

## Topics

### Constants

- [audioCall](incallcapabilityoptions/audiocall.md): An audio-only call.
- [videoCall](incallcapabilityoptions/videocall.md): A video call.

### Initializers

- [init(rawValue:)](incallcapabilityoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# INCallCapabilityOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the capabilities of the call.

## Declaration

```objectivec
enum INCallCapabilityOptions : NSUInteger;
```

## Topics

### Constants

- [INCallCapabilityOptionAudioCall](incallcapabilityoptions/audiocall.md): An audio-only call.
- [INCallCapabilityOptionVideoCall](incallcapabilityoptions/videocall.md): A video call.

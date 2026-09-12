> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallcapability](https://developer.apple.com/documentation/intents/incallcapability)

# INCallCapability (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the capabilities of the call.

## Declaration

```swift
enum INCallCapability
```

## Topics

### Constants

- [INCallCapability.unknown](incallcapability/unknown.md): An unknown type of call.
- [INCallCapability.audioCall](incallcapability/audiocall.md): An audio call.
- [INCallCapability.videoCall](incallcapability/videocall.md): A video call.

### Initializers

- [init(rawValue:)](incallcapability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Call Details

- [callRecordType](incallrecord/callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](incallrecord/callcapability.md): The audio and video capabilities of the call.
- [dateCreated](incallrecord/datecreated.md): The date and time at which the call was initiated.
- [callDuration](incallrecord/callduration-47iud.md): The duration (measured in seconds) of the call.
- [unseen](incallrecord/unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](incallrecord/numberofcalls-r8kl.md): The number of calls in the call record.
- [participants](incallrecord/participants.md): The recipient of the user’s call request.

# INCallCapability (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the capabilities of the call.

## Declaration

```objectivec
enum INCallCapability : NSInteger;
```

## Topics

### Constants

- [INCallCapabilityUnknown](incallcapability/unknown.md): An unknown type of call.
- [INCallCapabilityAudioCall](incallcapability/audiocall.md): An audio call.
- [INCallCapabilityVideoCall](incallcapability/videocall.md): A video call.

## See Also

### Getting the Call Details

- [callRecordType](incallrecord/callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](incallrecord/callcapability.md): The audio and video capabilities of the call.
- [dateCreated](incallrecord/datecreated.md): The date and time at which the call was initiated.
- [callDuration](https://developer.apple.com/documentation/intents/incallrecord/callduration-2d9u1): The duration (measured in seconds) of the call.
- [unseen](https://developer.apple.com/documentation/intents/incallrecord/unseen-8qab3): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](https://developer.apple.com/documentation/intents/incallrecord/numberofcalls-7vv6o): The number of calls in the call record.
- [participants](incallrecord/participants.md): The recipient of the user’s call request.
- [isCallerIdBlocked](https://developer.apple.com/documentation/intents/incallrecord/iscalleridblocked): A Boolean value indicating if user’s callerID is showing during a call.

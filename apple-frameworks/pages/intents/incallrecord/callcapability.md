> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecord/callcapability](https://developer.apple.com/documentation/intents/incallrecord/callcapability)

# callCapability (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The audio and video capabilities of the call.

## Declaration

```swift
var callCapability: INCallCapability { get }
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [callDuration](callduration-47iud.md): The duration (measured in seconds) of the call.
- [unseen](unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](numberofcalls-r8kl.md): The number of calls in the call record.
- [participants](participants.md): The recipient of the user’s call request.

# callCapability (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The audio and video capabilities of the call.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCallCapability callCapability;
```

```objectivec
@property (atomic, assign, readonly) INCallCapability callCapability;
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [callDuration](https://developer.apple.com/documentation/intents/incallrecord/callduration-2d9u1): The duration (measured in seconds) of the call.
- [unseen](https://developer.apple.com/documentation/intents/incallrecord/unseen-8qab3): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](https://developer.apple.com/documentation/intents/incallrecord/numberofcalls-7vv6o): The number of calls in the call record.
- [participants](participants.md): The recipient of the user’s call request.
- [isCallerIdBlocked](https://developer.apple.com/documentation/intents/incallrecord/iscalleridblocked): A Boolean value indicating if user’s callerID is showing during a call.

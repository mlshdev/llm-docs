> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecord/participants](https://developer.apple.com/documentation/intents/incallrecord/participants)

# participants (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.3+

The recipient of the user’s call request.

## Declaration

```swift
var participants: [INPerson]? { get }
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [callDuration](callduration-47iud.md): The duration (measured in seconds) of the call.
- [unseen](unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](numberofcalls-r8kl.md): The number of calls in the call record.

# participants (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.3+

The recipient of the user’s call request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * participants;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * participants;
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [callDuration](https://developer.apple.com/documentation/intents/incallrecord/callduration-2d9u1): The duration (measured in seconds) of the call.
- [unseen](https://developer.apple.com/documentation/intents/incallrecord/unseen-8qab3): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](https://developer.apple.com/documentation/intents/incallrecord/numberofcalls-7vv6o): The number of calls in the call record.
- [isCallerIdBlocked](https://developer.apple.com/documentation/intents/incallrecord/iscalleridblocked): A Boolean value indicating if user’s callerID is showing during a call.

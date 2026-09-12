> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecord/numberofcalls-r8kl](https://developer.apple.com/documentation/intents/incallrecord/numberofcalls-r8kl)

# numberOfCalls

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · watchOS 6.0+

The number of calls in the call record.

## Declaration

```swift
@nonobjc final var numberOfCalls: Int? { get }
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [callDuration](callduration-47iud.md): The duration (measured in seconds) of the call.
- [unseen](unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [participants](participants.md): The recipient of the user’s call request.

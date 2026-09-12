> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecord/callduration-47iud](https://developer.apple.com/documentation/intents/incallrecord/callduration-47iud)

# callDuration

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · watchOS 4.0+

The duration (measured in seconds) of the call.

## Declaration

```swift
@nonobjc final var callDuration: Double? { get }
```

## See Also

### Getting the Call Details

- [callRecordType](callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](../incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](datecreated.md): The date and time at which the call was initiated.
- [unseen](unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](numberofcalls-r8kl.md): The number of calls in the call record.
- [participants](participants.md): The recipient of the user’s call request.

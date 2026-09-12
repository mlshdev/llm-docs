> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/establishmentreport/attemptstartedafterinterval](https://developer.apple.com/documentation/network/nwconnection/establishmentreport/attemptstartedafterinterval)

# attemptStartedAfterInterval

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The time between the call to start and the beginning of the successful connection attempt.

## Declaration

```swift
let attemptStartedAfterInterval: TimeInterval
```

## See Also

### Inspecting Connection Attempts

- [duration](duration.md): The total duration of the successful connection establishment attempt, from the preparing state to the ready state.
- [previousAttemptCount](previousattemptcount.md): The number of attempts made before the successful attempt, when the connection moved from the preparing state back to the waiting state.

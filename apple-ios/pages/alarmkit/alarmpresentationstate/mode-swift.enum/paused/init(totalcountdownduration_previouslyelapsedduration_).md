> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused/init(totalcountdownduration:previouslyelapsedduration:)](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused/init(totalcountdownduration:previouslyelapsedduration:))

# init(totalCountdownDuration:previouslyElapsedDuration:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance of a paused state.

## Declaration

```swift
init(totalCountdownDuration: TimeInterval, previouslyElapsedDuration: TimeInterval)
```

## Parameters

- `totalCountdownDuration`: The total duration of the countdown.
- `previouslyElapsedDuration`: The amount of time that has elapsed. If the countdown was never paused or resumed, the value is zero.

## See Also

### Pausing an alarm

- [previouslyElapsedDuration](previouslyelapsedduration.md): The amount of time that elapsed before the most recent pause of the countdown.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/init(totalcountdownduration:previouslyelapsedduration:startdate:firedate:)

# init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance of a countdown.

## Declaration

```swift
init(totalCountdownDuration: TimeInterval, previouslyElapsedDuration: TimeInterval, startDate: Date, fireDate: Date)
```

## Parameters

- `totalCountdownDuration`: The total duration of the countdown.
- `previouslyElapsedDuration`: The amount of time that has passed. If the countdown was never paused or resumed, the value is zero.
- `startDate`: The date that the countdown started. If the countdown was never paused, the date is when the countdown started.
- `fireDate`: The date at which the countdown starts.

## See Also

### Creating a countdown

- [fireDate](firedate.md): The date the countdown starts.
- [previouslyElapsedDuration](previouslyelapsedduration.md): The amount of time that elapsed before the most recent resumption of the countdown.
- [startDate](startdate.md): The date at which the countdown was mostly recently resumed.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

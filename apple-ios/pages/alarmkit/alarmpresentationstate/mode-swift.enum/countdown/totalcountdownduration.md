> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/totalcountdownduration

# totalCountdownDuration

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The total duration of the countdown.

## Declaration

```swift
var totalCountdownDuration: TimeInterval
```

## See Also

### Creating a countdown

- [init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)](init%28totalcountdownduration_previouslyelapsedduration_startdate_firedate_%29.md): Creates an instance of a countdown.
- [fireDate](firedate.md): The date the countdown starts.
- [previouslyElapsedDuration](previouslyelapsedduration.md): The amount of time that elapsed before the most recent resumption of the countdown.
- [startDate](startdate.md): The date at which the countdown was mostly recently resumed.

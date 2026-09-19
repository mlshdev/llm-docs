> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/firedate

# fireDate

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The date the countdown starts.

## Declaration

```swift
var fireDate: Date
```

<a id="discussion"></a>

## Discussion

The alarm transitions to the `alerting` state.

## See Also

### Creating a countdown

- [init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)](init%28totalcountdownduration_previouslyelapsedduration_startdate_firedate_%29.md): Creates an instance of a countdown.
- [previouslyElapsedDuration](previouslyelapsedduration.md): The amount of time that elapsed before the most recent resumption of the countdown.
- [startDate](startdate.md): The date at which the countdown was mostly recently resumed.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

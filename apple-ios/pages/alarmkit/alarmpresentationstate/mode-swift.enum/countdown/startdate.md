> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/startdate](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/startdate)

# startDate

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The date at which the countdown was mostly recently resumed.

## Declaration

```swift
var startDate: Date
```

<a id="discussion"></a>

## Discussion

If the countdown was never paused, the date is when the countdown started.

## See Also

### Creating a countdown

- [init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)](init%28totalcountdownduration_previouslyelapsedduration_startdate_firedate_%29.md): Creates an instance of a countdown.
- [fireDate](firedate.md): The date the countdown starts.
- [previouslyElapsedDuration](previouslyelapsedduration.md): The amount of time that elapsed before the most recent resumption of the countdown.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

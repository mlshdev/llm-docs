> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/previouslyelapsedduration](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown/previouslyelapsedduration)

# previouslyElapsedDuration

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The amount of time that elapsed before the most recent resumption of the countdown.

## Declaration

```swift
var previouslyElapsedDuration: TimeInterval
```

<a id="discussion"></a>

## Discussion

If the countdown was never paused or resumed, the value is zero.

## See Also

### Creating a countdown

- [init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)](init%28totalcountdownduration_previouslyelapsedduration_startdate_firedate_%29.md): Creates an instance of a countdown.
- [fireDate](firedate.md): The date the countdown starts.
- [startDate](startdate.md): The date at which the countdown was mostly recently resumed.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

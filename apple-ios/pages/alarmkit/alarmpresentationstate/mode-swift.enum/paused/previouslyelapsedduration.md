> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused/previouslyelapsedduration](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused/previouslyelapsedduration)

# previouslyElapsedDuration

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The amount of time that elapsed before the most recent pause of the countdown.

## Declaration

```swift
var previouslyElapsedDuration: TimeInterval
```

<a id="discussion"></a>

## Discussion

If the countdown was never paused or resumed, the value is zero.

## See Also

### Pausing an alarm

- [init(totalCountdownDuration:previouslyElapsedDuration:)](init%28totalcountdownduration_previouslyelapsedduration_%29.md): Creates an instance of a paused state.
- [totalCountdownDuration](totalcountdownduration.md): The total duration of the countdown.

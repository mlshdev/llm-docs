> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused/previouslyelapsedduration

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

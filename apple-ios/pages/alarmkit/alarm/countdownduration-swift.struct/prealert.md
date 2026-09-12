> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/countdownduration-swift.struct/prealert](https://developer.apple.com/documentation/alarmkit/alarm/countdownduration-swift.struct/prealert)

# preAlert

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The duration applied before the alarm fires.

## Declaration

```swift
var preAlert: TimeInterval?
```

<a id="discussion"></a>

## Discussion

For example, this would be the duration of a timer.

## See Also

### Creating a countdown duration

- [init(preAlert:postAlert:)](init%28prealert_postalert_%29.md): Creates an instance of a countdown duration.
- [postAlert](postalert.md): The duration applied after the alarm has alerted at least once and moves back to the countdown state.

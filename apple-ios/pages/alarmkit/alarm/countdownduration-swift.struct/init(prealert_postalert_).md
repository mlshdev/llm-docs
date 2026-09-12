> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/countdownduration-swift.struct/init(prealert:postalert:)](https://developer.apple.com/documentation/alarmkit/alarm/countdownduration-swift.struct/init(prealert:postalert:))

# init(preAlert:postAlert:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance of a countdown duration.

## Declaration

```swift
init(preAlert: TimeInterval?, postAlert: TimeInterval?)
```

## Parameters

- `preAlert`: The duration applied before the alarm fires.
- `postAlert`: The duration applied after the alarm has alerted at least once and moves back to the countdown state.

## See Also

### Creating a countdown duration

- [postAlert](postalert.md): The duration applied after the alarm has alerted at least once and moves back to the countdown state.
- [preAlert](prealert.md): The duration applied before the alarm fires.

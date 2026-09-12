> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityschedule/repeats](https://developer.apple.com/documentation/deviceactivity/deviceactivityschedule/repeats)

# repeats

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether the schedule recurs.

## Declaration

```swift
var repeats: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use `repeats` to create an activity schedule that repeats until the activity-monitoring stops.

## See Also

### Creating a Schedule

- [init(intervalStart:intervalEnd:repeats:warningTime:)](init%28intervalstart_intervalend_repeats_warningtime_%29.md): Creates a new schedule.
- [intervalEnd](intervalend.md): The date components that represent the end time for a schedule’s interval.
- [intervalStart](intervalstart.md): The date components that represent the start time for a schedule’s interval.
- [nextInterval](nextinterval.md): The schedule’s next interval or the current interval if one is ongoing.
- [warningTime](warningtime.md): Optional components that generate a warning prior to regularly scheduled events.

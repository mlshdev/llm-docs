> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityschedule/intervalend](https://developer.apple.com/documentation/deviceactivity/deviceactivityschedule/intervalend)

# intervalEnd

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The date components that represent the end time for a schedule’s interval.

## Declaration

```swift
var intervalEnd: DateComponents { get }
```

<a id="discussion"></a>

## Discussion

The system uses these components to compute `nextInterval.end`.

## See Also

### Creating a Schedule

- [init(intervalStart:intervalEnd:repeats:warningTime:)](init%28intervalstart_intervalend_repeats_warningtime_%29.md): Creates a new schedule.
- [intervalStart](intervalstart.md): The date components that represent the start time for a schedule’s interval.
- [nextInterval](nextinterval.md): The schedule’s next interval or the current interval if one is ongoing.
- [repeats](repeats.md): A Boolean value that indicates whether the schedule recurs.
- [warningTime](warningtime.md): Optional components that generate a warning prior to regularly scheduled events.

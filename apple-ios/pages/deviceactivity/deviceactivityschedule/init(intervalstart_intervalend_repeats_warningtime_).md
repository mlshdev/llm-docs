> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityschedule/init(intervalstart:intervalend:repeats:warningtime:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityschedule/init(intervalstart:intervalend:repeats:warningtime:))

# init(intervalStart:intervalEnd:repeats:warningTime:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new schedule.

## Declaration

```swift
init(intervalStart: DateComponents, intervalEnd: DateComponents, repeats: Bool, warningTime: DateComponents? = nil)
```

## Parameters

- `intervalStart`: The date components that represent the start time for a schedule’s interval.
- `intervalEnd`: The date components that represent the end time for a schedule’s interval.
- `repeats`: Indicates whether the schedule recurs. If `false`, the extension stops receiving callbacks when the interval ends for the first time.
- `warningTime`: An optional warning time to receive callbacks. If the components specify a longer time interval than the schedule’s interval, the system clamps the warning callbacks for each event’s threshold to the start time of the interval.

<a id="discussion"></a>

## Discussion

> **Important**

> If the current date falls in between [intervalStart](intervalstart.md) and [intervalEnd](intervalend.md), the system calls the [intervalDidStart(for:)](../deviceactivitymonitor/intervaldidstart%28for_%29.md) method immediately upon starting to monitor the activity. If the current date doesn’t fall in between `intervalStart` and `intervalEnd`, then `intervalDidStart(for:)` calls at the next date matching `intervalStart`.

## See Also

### Creating a Schedule

- [intervalEnd](intervalend.md): The date components that represent the end time for a schedule’s interval.
- [intervalStart](intervalstart.md): The date components that represent the start time for a schedule’s interval.
- [nextInterval](nextinterval.md): The schedule’s next interval or the current interval if one is ongoing.
- [repeats](repeats.md): A Boolean value that indicates whether the schedule recurs.
- [warningTime](warningtime.md): Optional components that generate a warning prior to regularly scheduled events.

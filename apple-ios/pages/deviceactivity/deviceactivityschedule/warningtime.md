> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityschedule/warningtime](https://developer.apple.com/documentation/deviceactivity/deviceactivityschedule/warningtime)

# warningTime

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Optional components that generate a warning prior to regularly scheduled events.

## Declaration

```swift
var warningTime: DateComponents? { get }
```

<a id="discussion"></a>

## Discussion

You can create a warning time to notify your app extension ahead of time before the scheduled activity begins and ends. For instance, when your app schedules activity-monitoring from 10 a.m. to 11 a.m. for an event with a 30-minute threshold, setting the schedule’s warning time to 5 minutes results in the extension receiving [intervalWillStartWarning(for:)](../deviceactivitymonitor/intervalwillstartwarning%28for_%29.md), [intervalWillEndWarning(for:)](../deviceactivitymonitor/intervalwillendwarning%28for_%29.md), and [eventWillReachThresholdWarning(\_:activity:)](../deviceactivitymonitor/eventwillreachthresholdwarning%28__activity_%29.md) callbacks at 9:55 a.m., 10:55 a.m, and when 25 minutes of the event’s activity occurs, respectively. If the components specify a longer time interval than the schedule’s interval, the system clamps the warning callbacks for each event’s threshold to the start time of the interval.

## See Also

### Creating a Schedule

- [init(intervalStart:intervalEnd:repeats:warningTime:)](init%28intervalstart_intervalend_repeats_warningtime_%29.md): Creates a new schedule.
- [intervalEnd](intervalend.md): The date components that represent the end time for a schedule’s interval.
- [intervalStart](intervalstart.md): The date components that represent the start time for a schedule’s interval.
- [nextInterval](nextinterval.md): The schedule’s next interval or the current interval if one is ongoing.
- [repeats](repeats.md): A Boolean value that indicates whether the schedule recurs.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry/date](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry/date)

# date (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time at which to display the entry.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var date: Date { get set }
```

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

<a id="Discussion"></a>

## Discussion

The date you specify represents the day and time at which to begin displaying the associated complication data. Set this value appropriately based on the data you want to display. For example, weather forecast data would use the time at which the forecast was valid, but information about an upcoming meeting would use an earlier date to give the user advance notice.

## See Also

### Setting the Entry Values

- [complicationTemplate](complicationtemplate.md): Deprecated. The template containing the data to display in your complication.
- [timelineAnimationGroup](timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.

# date (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The time at which to display the entry.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, retain) NSDate * date;
```

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

<a id="Discussion"></a>

## Discussion

The date you specify represents the day and time at which to begin displaying the associated complication data. Set this value appropriately based on the data you want to display. For example, weather forecast data would use the time at which the forecast was valid, but information about an upcoming meeting would use an earlier date to give the user advance notice.

## See Also

### Setting the Entry Values

- [complicationTemplate](complicationtemplate.md): Deprecated. The template containing the data to display in your complication.
- [timelineAnimationGroup](timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.

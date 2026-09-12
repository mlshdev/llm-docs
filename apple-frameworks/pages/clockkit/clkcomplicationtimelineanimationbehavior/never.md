> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineanimationbehavior/never](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineanimationbehavior/never)

# CLKComplicationTimelineAnimationBehavior.never (Swift)

**Framework:** ClockKit  
**Kind:** Case  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

No animations. This is the default behavior.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
case never
```

## See Also

### Constants

- [CLKComplicationTimelineAnimationBehavior.grouped](grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.
- [CLKComplicationTimelineAnimationBehavior.always](always.md): Deprecated. Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

# CLKComplicationTimelineAnimationBehaviorNever (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

No animations. This is the default behavior.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
CLKComplicationTimelineAnimationBehaviorNever
```

## See Also

### Constants

- [CLKComplicationTimelineAnimationBehaviorGrouped](grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.
- [CLKComplicationTimelineAnimationBehaviorAlways](always.md): Deprecated. Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

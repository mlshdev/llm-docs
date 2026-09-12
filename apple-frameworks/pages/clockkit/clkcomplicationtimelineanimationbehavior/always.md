> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineanimationbehavior/always](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineanimationbehavior/always)

# CLKComplicationTimelineAnimationBehavior.always (Swift)

**Framework:** ClockKit  
**Kind:** Case  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
case always
```

## See Also

### Constants

- [CLKComplicationTimelineAnimationBehavior.never](never.md): Deprecated. No animations. This is the default behavior.
- [CLKComplicationTimelineAnimationBehavior.grouped](grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.

# CLKComplicationTimelineAnimationBehaviorAlways (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
CLKComplicationTimelineAnimationBehaviorAlways
```

## See Also

### Constants

- [CLKComplicationTimelineAnimationBehaviorNever](never.md): Deprecated. No animations. This is the default behavior.
- [CLKComplicationTimelineAnimationBehaviorGrouped](grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.

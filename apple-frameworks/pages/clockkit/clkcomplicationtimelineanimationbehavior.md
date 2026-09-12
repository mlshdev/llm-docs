> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineanimationbehavior](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineanimationbehavior)

# CLKComplicationTimelineAnimationBehavior (Swift)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Constants indicating the animation behavior during Time Travel.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
enum CLKComplicationTimelineAnimationBehavior
```

## Topics

### Constants

- [CLKComplicationTimelineAnimationBehavior.never](clkcomplicationtimelineanimationbehavior/never.md): Deprecated. No animations. This is the default behavior.
- [CLKComplicationTimelineAnimationBehavior.grouped](clkcomplicationtimelineanimationbehavior/grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.
- [CLKComplicationTimelineAnimationBehavior.always](clkcomplicationtimelineanimationbehavior/always.md): Deprecated. Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

### Initializers

- [init(rawValue:)](clkcomplicationtimelineanimationbehavior/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptors(handler:)](clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors(\_:)](clkcomplicationdatasource/handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
- [getLocalizableSampleTemplate(for:withHandler:)](clkcomplicationdatasource/getlocalizablesampletemplate%28for_withhandler_%29.md): Deprecated. Gets a localizable template that shows sample data for the specified complication.
- [getPrivacyBehavior(for:withHandler:)](clkcomplicationdatasource/getprivacybehavior%28for_withhandler_%29.md): Deprecated. Returns the privacy behavior for the specified complication.
- [CLKComplicationPrivacyBehavior](clkcomplicationprivacybehavior.md): Deprecated. Constants indicating the complication behavior when the Apple Watch is locked.
- [getAlwaysOnTemplate(for:withHandler:)](clkcomplicationdatasource/getalwaysontemplate%28for_withhandler_%29.md): Deprecated. Returns the template to use during Always On.
- [getTimelineEndDate(for:withHandler:)](clkcomplicationdatasource/gettimelineenddate%28for_withhandler_%29.md): Deprecated. Retrieves the last date for the data that your app can supply.
- [getCurrentTimelineEntry(for:withHandler:)](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntries(for:after:limit:withHandler:)](clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehavior(for:withHandler:)](clkcomplicationdatasource/gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [getSupportedTimeTravelDirections(for:withHandler:)](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# CLKComplicationTimelineAnimationBehavior (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Constants indicating the animation behavior during Time Travel.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
enum CLKComplicationTimelineAnimationBehavior : NSUInteger;
```

## Topics

### Constants

- [CLKComplicationTimelineAnimationBehaviorNever](clkcomplicationtimelineanimationbehavior/never.md): Deprecated. No animations. This is the default behavior.
- [CLKComplicationTimelineAnimationBehaviorGrouped](clkcomplicationtimelineanimationbehavior/grouped.md): Deprecated. Animations between groups. During Time Travel, ClockKit creates animations when transitioning between entries with different group identifiers. For entries with identical group identifiers, the new entry is displayed without animations.
- [CLKComplicationTimelineAnimationBehaviorAlways](clkcomplicationtimelineanimationbehavior/always.md): Deprecated. Always animate transitions. During Time Travel, ClockKit creates animations between all entries, regardless of the values of their group identifiers.

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptorsWithHandler:](clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors:](clkcomplicationdatasource/handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
- [getLocalizableSampleTemplateForComplication:withHandler:](clkcomplicationdatasource/getlocalizablesampletemplate%28for_withhandler_%29.md): Deprecated. Gets a localizable template that shows sample data for the specified complication.
- [getPrivacyBehaviorForComplication:withHandler:](clkcomplicationdatasource/getprivacybehavior%28for_withhandler_%29.md): Deprecated. Returns the privacy behavior for the specified complication.
- [CLKComplicationPrivacyBehavior](clkcomplicationprivacybehavior.md): Deprecated. Constants indicating the complication behavior when the Apple Watch is locked.
- [getAlwaysOnTemplateForComplication:withHandler:](clkcomplicationdatasource/getalwaysontemplate%28for_withhandler_%29.md): Deprecated. Returns the template to use during Always On.
- [getTimelineEndDateForComplication:withHandler:](clkcomplicationdatasource/gettimelineenddate%28for_withhandler_%29.md): Deprecated. Retrieves the last date for the data that your app can supply.
- [getCurrentTimelineEntryForComplication:withHandler:](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntriesForComplication:afterDate:limit:withHandler:](clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehaviorForComplication:withHandler:](clkcomplicationdatasource/gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

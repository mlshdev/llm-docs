> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/getcurrenttimelineentry(for:withhandler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/getcurrenttimelineentry(for:withhandler:))

# getCurrentTimelineEntry(for:withHandler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Retrieves the timeline entry that you want to display now.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
func getCurrentTimelineEntry(for complication: CLKComplication, withHandler handler: @escaping (CLKComplicationTimelineEntry?) -> Void)
```

```swift
func currentTimelineEntry(for complication: CLKComplication) async -> CLKComplicationTimelineEntry?
```

## Parameters

- `complication`: The complication tied to the request. Use the complication family information in this object to determine which set of templates are valid.
- `handler`: The handler to execute with the current data. This block has no return value and takes the following parameter:

  - **`updateInterval`**: The [CLKComplicationTimelineEntry](../clkcomplicationtimelineentry.md) object to display right now.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method must create a timeline entry with the data to display right now. Assign a date to your timeline entry that reflects the current time or a time before the current time. If your complication supports past timeline entries, the entry you return from this method must come after all past entries that you provide using the [getTimelineEntries(for:before:limit:withHandler:)](gettimelineentries%28for_before_limit_withhandler_%29.md) method.

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptors(handler:)](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors(\_:)](handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
- [getLocalizableSampleTemplate(for:withHandler:)](getlocalizablesampletemplate%28for_withhandler_%29.md): Deprecated. Gets a localizable template that shows sample data for the specified complication.
- [getPrivacyBehavior(for:withHandler:)](getprivacybehavior%28for_withhandler_%29.md): Deprecated. Returns the privacy behavior for the specified complication.
- [CLKComplicationPrivacyBehavior](../clkcomplicationprivacybehavior.md): Deprecated. Constants indicating the complication behavior when the Apple Watch is locked.
- [getAlwaysOnTemplate(for:withHandler:)](getalwaysontemplate%28for_withhandler_%29.md): Deprecated. Returns the template to use during Always On.
- [getTimelineEndDate(for:withHandler:)](gettimelineenddate%28for_withhandler_%29.md): Deprecated. Retrieves the last date for the data that your app can supply.
- [getTimelineEntries(for:after:limit:withHandler:)](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehavior(for:withHandler:)](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirections(for:withHandler:)](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# getCurrentTimelineEntryForComplication:withHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Retrieves the timeline entry that you want to display now.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (void) getCurrentTimelineEntryForComplication:(CLKComplication *) complication withHandler:(void (^)(CLKComplicationTimelineEntry *)) handler;
```

## Parameters

- `complication`: The complication tied to the request. Use the complication family information in this object to determine which set of templates are valid.
- `handler`: The handler to execute with the current data. This block has no return value and takes the following parameter:

  - **`updateInterval`**: The [CLKComplicationTimelineEntry](../clkcomplicationtimelineentry.md) object to display right now.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method must create a timeline entry with the data to display right now. Assign a date to your timeline entry that reflects the current time or a time before the current time. If your complication supports past timeline entries, the entry you return from this method must come after all past entries that you provide using the [getTimelineEntriesForComplication:beforeDate:limit:withHandler:](gettimelineentries%28for_before_limit_withhandler_%29.md) method.

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptorsWithHandler:](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors:](handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
- [getLocalizableSampleTemplateForComplication:withHandler:](getlocalizablesampletemplate%28for_withhandler_%29.md): Deprecated. Gets a localizable template that shows sample data for the specified complication.
- [getPrivacyBehaviorForComplication:withHandler:](getprivacybehavior%28for_withhandler_%29.md): Deprecated. Returns the privacy behavior for the specified complication.
- [CLKComplicationPrivacyBehavior](../clkcomplicationprivacybehavior.md): Deprecated. Constants indicating the complication behavior when the Apple Watch is locked.
- [getAlwaysOnTemplateForComplication:withHandler:](getalwaysontemplate%28for_withhandler_%29.md): Deprecated. Returns the template to use during Always On.
- [getTimelineEndDateForComplication:withHandler:](gettimelineenddate%28for_withhandler_%29.md): Deprecated. Retrieves the last date for the data that your app can supply.
- [getTimelineEntriesForComplication:afterDate:limit:withHandler:](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehaviorForComplication:withHandler:](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

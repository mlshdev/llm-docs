> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/gettimelineenddate(for:withhandler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/gettimelineenddate(for:withhandler:))

# getTimelineEndDate(for:withHandler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Retrieves the last date for the data that your app can supply.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
optional func getTimelineEndDate(for complication: CLKComplication, withHandler handler: @escaping (Date?) -> Void)
```

```swift
optional func timelineEndDate(for complication: CLKComplication) async -> Date?
```

## Parameters

- `complication`: The complication tied to the request.
- `handler`: The handler to execute with the end date. This block has no return value and takes the following parameter:

  - **`date`**: The end date for your data. If you specify `nil`, ClockKit doesn’t ask for any more future data.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method must execute the block in the handler parameter and specify the date. If your application can’t provide future timeline entries, specify the current date.

If you don’t implement this method, ClockKit doesn’t attempt to retrieve timeline entries after the current entry.

> **Important**

>  In watchOS 6 and earlier, if you passed `nil` to the completion handler, ClockKit set the timeline end date to [distantFuture](../../foundation/nsdate/distantfuture.md). In watchOS 7 and later, it assumes your app can’t provide future data, and only asks for the current timeline entry.

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
- [getCurrentTimelineEntry(for:withHandler:)](getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntries(for:after:limit:withHandler:)](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehavior(for:withHandler:)](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirections(for:withHandler:)](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# getTimelineEndDateForComplication:withHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Retrieves the last date for the data that your app can supply.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (void) getTimelineEndDateForComplication:(CLKComplication *) complication withHandler:(void (^)(NSDate *date)) handler;
```

## Parameters

- `complication`: The complication tied to the request.
- `handler`: The handler to execute with the end date. This block has no return value and takes the following parameter:

  - **`date`**: The end date for your data. If you specify `nil`, ClockKit doesn’t ask for any more future data.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

Your implementation of this method must execute the block in the handler parameter and specify the date. If your application can’t provide future timeline entries, specify the current date.

If you don’t implement this method, ClockKit doesn’t attempt to retrieve timeline entries after the current entry.

> **Important**

>  In watchOS 6 and earlier, if you passed `nil` to the completion handler, ClockKit set the timeline end date to [distantFuture](../../foundation/nsdate/distantfuture.md). In watchOS 7 and later, it assumes your app can’t provide future data, and only asks for the current timeline entry.

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
- [getCurrentTimelineEntryForComplication:withHandler:](getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntriesForComplication:afterDate:limit:withHandler:](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehaviorForComplication:withHandler:](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

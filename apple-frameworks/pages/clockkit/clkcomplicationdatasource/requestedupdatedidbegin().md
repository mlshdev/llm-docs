> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/requestedupdatedidbegin()](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/requestedupdatedidbegin())

# requestedUpdateDidBegin() (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Indicates that a requested update has begun so that you’ve an opportunity to extend or reload your timeline.

> Use [WKRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask) instead.

## Declaration

```swift
optional func requestedUpdateDidBegin()
```

<a id="Discussion"></a>

## Discussion

When the date returned by the [getNextRequestedUpdateDate(handler:)](getnextrequestedupdatedate%28handler_%29.md) method of your data source passes, ClockKit begins a scheduled update of your complication. At the start of that update, it calls this method or the [requestedUpdateBudgetExhausted()](requestedupdatebudgetexhausted%28%29.md) method to let you know that the requested update has begun. These methods are your opportunity to tell ClockKit whether or not you’ve new data to add to your timeline.

If you’ve new data for your timeline, your implementation of this method should call the [reloadTimeline(for:)](../clkcomplicationserver/reloadtimeline%28for_%29.md) or [extendTimeline(for:)](../clkcomplicationserver/extendtimeline%28for_%29.md) method of the complication server. ClockKit doesn’t ask your data source for new timeline entries unless you call one of those methods. If you do nothing or don’t implement this method, ClockKit calls only the [getNextRequestedUpdateDate(handler:)](getnextrequestedupdatedate%28handler_%29.md) of your data source to fetch a new update time.

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
- [getCurrentTimelineEntry(for:withHandler:)](getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntries(for:after:limit:withHandler:)](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehavior(for:withHandler:)](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirections(for:withHandler:)](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.

# requestedUpdateDidBegin (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Indicates that a requested update has begun so that you’ve an opportunity to extend or reload your timeline.

> Use [WKRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask) instead.

## Declaration

```objectivec
- (void) requestedUpdateDidBegin;
```

<a id="Discussion"></a>

## Discussion

When the date returned by the [getNextRequestedUpdateDateWithHandler:](getnextrequestedupdatedate%28handler_%29.md) method of your data source passes, ClockKit begins a scheduled update of your complication. At the start of that update, it calls this method or the [requestedUpdateBudgetExhausted](requestedupdatebudgetexhausted%28%29.md) method to let you know that the requested update has begun. These methods are your opportunity to tell ClockKit whether or not you’ve new data to add to your timeline.

If you’ve new data for your timeline, your implementation of this method should call the [reloadTimelineForComplication:](../clkcomplicationserver/reloadtimeline%28for_%29.md) or [extendTimelineForComplication:](../clkcomplicationserver/extendtimeline%28for_%29.md) method of the complication server. ClockKit doesn’t ask your data source for new timeline entries unless you call one of those methods. If you do nothing or don’t implement this method, ClockKit calls only the [getNextRequestedUpdateDateWithHandler:](getnextrequestedupdatedate%28handler_%29.md) of your data source to fetch a new update time.

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
- [getCurrentTimelineEntryForComplication:withHandler:](getcurrenttimelineentry%28for_withhandler_%29.md): Deprecated. Retrieves the timeline entry that you want to display now.
- [getTimelineEntriesForComplication:afterDate:limit:withHandler:](gettimelineentries%28for_after_limit_withhandler_%29.md): Deprecated. Retrieves future timeline entries for the complication.
- [getTimelineAnimationBehaviorForComplication:withHandler:](gettimelineanimationbehavior%28for_withhandler_%29.md): Deprecated. Gets the animation behavior when transitioning between timeline entries.
- [CLKComplicationTimelineAnimationBehavior](../clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.

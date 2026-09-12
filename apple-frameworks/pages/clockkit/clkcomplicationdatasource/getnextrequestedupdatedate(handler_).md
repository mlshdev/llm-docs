> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/getnextrequestedupdatedate(handler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/getnextrequestedupdatedate(handler:))

# getNextRequestedUpdateDate(handler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Gets the next time at which to update your complication.

> Use [WKRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask) instead.

## Declaration

```swift
optional func getNextRequestedUpdateDate(handler: @escaping (Date?) -> Void)
```

## Parameters

- `handler`: The handler to execute with the next date at which to run your complication code. This block has no return value and takes the following parameter:

  - **`updateDate`**: The date after which you’d like your complication to run again. If you specify `nil`, ClockKit doesn’t schedule a new update time for your complication. You can still trigger updates manually.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must execute the block in the `handler` parameter and specify an appropriate date. Specify a date as far into the future as you can manage for your complications. ClockKit wakes up your complication at some point after the specified date to request new data. The exact time at which your complication runs isn’t guaranteed.

If your complication data changes before the specified update date, you can invalidate your complication data using the [CLKComplicationServer](../clkcomplicationserver.md) object.

If you don’t implement this method, ClockKit doesn’t schedule your complication for another update. You must trigger updates to your complication’s data manually by extending or reloading your timeline.

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

# getNextRequestedUpdateDateWithHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Gets the next time at which to update your complication.

> Use [WKRefreshBackgroundTask](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask) instead.

## Declaration

```objectivec
- (void) getNextRequestedUpdateDateWithHandler:(void (^)(NSDate *updateDate)) handler;
```

## Parameters

- `handler`: The handler to execute with the next date at which to run your complication code. This block has no return value and takes the following parameter:

  - **`updateDate`**: The date after which you’d like your complication to run again. If you specify `nil`, ClockKit doesn’t schedule a new update time for your complication. You can still trigger updates manually.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must execute the block in the `handler` parameter and specify an appropriate date. Specify a date as far into the future as you can manage for your complications. ClockKit wakes up your complication at some point after the specified date to request new data. The exact time at which your complication runs isn’t guaranteed.

If your complication data changes before the specified update date, you can invalidate your complication data using the [CLKComplicationServer](../clkcomplicationserver.md) object.

If you don’t implement this method, ClockKit doesn’t schedule your complication for another update. You must trigger updates to your complication’s data manually by extending or reloading your timeline.

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

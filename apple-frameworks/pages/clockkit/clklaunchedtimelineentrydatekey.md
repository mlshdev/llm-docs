> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clklaunchedtimelineentrydatekey](https://developer.apple.com/documentation/clockkit/clklaunchedtimelineentrydatekey)

# CLKLaunchedTimelineEntryDateKey (Swift)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A key that indicates the date when the system launched the complication.

> Use [WidgetKit](../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
let CLKLaunchedTimelineEntryDateKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSDate](../foundation/nsdate.md) object. When the user taps your complication, ClockKit includes this key in the dictionary that it passes to the extension delegate’s [handleUserActivity(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity%28_:%29) method.

## See Also

### Deprecated methods

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
- [CLKComplicationTimelineAnimationBehavior](clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirections(for:withHandler:)](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# CLKLaunchedTimelineEntryDateKey (Objective-C)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A key that indicates the date when the system launched the complication.

> Use [WidgetKit](../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
extern NSString * const CLKLaunchedTimelineEntryDateKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSDate](../foundation/nsdate.md) object. When the user taps your complication, ClockKit includes this key in the dictionary that it passes to the extension delegate’s [handleUserActivity:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity%28_:%29) method.

## See Also

### Deprecated methods

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
- [CLKComplicationTimelineAnimationBehavior](clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

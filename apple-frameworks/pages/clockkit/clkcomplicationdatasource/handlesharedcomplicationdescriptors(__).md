> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/handlesharedcomplicationdescriptors(_:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/handlesharedcomplicationdescriptors(_:))

# handleSharedComplicationDescriptors(\_:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Informs the app about complications from a shared watch face.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
optional func handleSharedComplicationDescriptors(_ complicationDescriptors: [CLKComplicationDescriptor])
```

## Parameters

- `complicationDescriptors`: The descriptors for your app’s complications from a shared watch face.

## Mentioned In

- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

ClockKit calls this method when the Apple Watch receives a shared watch face that contains one or more of your app’s complications. Implement this method to prepare your app so that it can provide complication data for the descriptors.

For example, a weather app may provide separate complications for all of the user’s favorite cities. However, when the user receives a shared watch face from someone else, the shared watch face may include a complication for a city that isn’t in the user’s favorite city list. The weather app needs to provide data for the new city, and may need to add the city to the user’s favorite list.

```swift
func handleSharedComplicationDescriptors(_ complicationDescriptors: [CLKComplicationDescriptor]) {
    // If the descriptor has a city ID, add it to the favorite city list,
    // so the app will download weather updates for the city.
    for descriptor in complicationDescriptors {
        guard let cityID = descriptor.userInfo?[myCityIDKey] as? String else { continue }
        myData.addFavoriteCity(byID: cityID)
    }
}
```

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptors(handler:)](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
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
- [getTimelineStartDate(for:withHandler:)](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# handleSharedComplicationDescriptors: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Informs the app about complications from a shared watch face.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (void) handleSharedComplicationDescriptors:(NSArray<CLKComplicationDescriptor *> *) complicationDescriptors;
```

## Parameters

- `complicationDescriptors`: The descriptors for your app’s complications from a shared watch face.

## Mentioned In

- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

ClockKit calls this method when the Apple Watch receives a shared watch face that contains one or more of your app’s complications. Implement this method to prepare your app so that it can provide complication data for the descriptors.

For example, a weather app may provide separate complications for all of the user’s favorite cities. However, when the user receives a shared watch face from someone else, the shared watch face may include a complication for a city that isn’t in the user’s favorite city list. The weather app needs to provide data for the new city, and may need to add the city to the user’s favorite list.

```swift
func handleSharedComplicationDescriptors(_ complicationDescriptors: [CLKComplicationDescriptor]) {
    // If the descriptor has a city ID, add it to the favorite city list,
    // so the app will download weather updates for the city.
    for descriptor in complicationDescriptors {
        guard let cityID = descriptor.userInfo?[myCityIDKey] as? String else { continue }
        myData.addFavoriteCity(byID: cityID)
    }
}
```

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptorsWithHandler:](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
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
- [getTimelineStartDateForComplication:withHandler:](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

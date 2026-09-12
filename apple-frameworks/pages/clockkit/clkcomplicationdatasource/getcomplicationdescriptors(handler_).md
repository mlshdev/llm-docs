> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/getcomplicationdescriptors(handler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/getcomplicationdescriptors(handler:))

# getComplicationDescriptors(handler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns the list of complication descriptors.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
optional func getComplicationDescriptors(handler: @escaping ([CLKComplicationDescriptor]) -> Void)
```

```swift
optional func complicationDescriptors() async -> [CLKComplicationDescriptor]
```

## Parameters

- `handler`: In your data source’s implementation, call the handler and pass the complication descriptors for your app. This block takes the following parameter:

  - **`descriptors`**: An array containing your app’s complication descriptors.

## Mentioned In

- [Declaring complications for your app](../declaring-complications-for-your-app.md)

<a id="Discussion"></a>

## Discussion

ClockKit calls this method to determine the complications that an app supports. Implement this method to define your app’s complications. For example, a weather app may support different complications for the current condition, temperature, or chance of precipitation.

You can also use your implementation to customize the types of complications according to your app’s current data. For example, a weather app could provide separate complications for the user’s favorite locations.

In your data source’s implementation, create an array of [CLKComplicationDescriptor](../clkcomplicationdescriptor.md) objects to represent the complications that your app supports, and then pass the array to the method’s handler.

```swift
func getComplicationDescriptors(handler: @escaping ([CLKComplicationDescriptor]) -> Void) {
    
    let mySupportedFamilies = CLKComplicationFamily.allCases

    // Create the condition descriptor.
    let conditionDescriptor = CLKComplicationDescriptor(
        identifier: complicationConditionIdentifier,
        displayName: "Weather Condition",
        supportedFamilies: mySupportedFamilies)

    // Create the temperature descriptor.
    let temperatureDescriptor = CLKComplicationDescriptor(
        identifier: complicationTemperatureIdentifier,
        displayName: "Temperature",
        supportedFamilies: mySupportedFamilies)

    // Create the precipitation descriptor.
    let precipitationDescriptor = CLKComplicationDescriptor(
        identifier: complicationPrecipitationIdentifier,
        displayName: "Percipitation",
        supportedFamilies: mySupportedFamilies)
    
    // Call the handler and pass an array of descriptors.
    handler([conditionDescriptor,
             temperatureDescriptor,
             precipitationDescriptor])
}
```

In addition to defining a unique type of complication, each descriptor also defines the families that the complication supports. Each descriptor appears as a separate complication on the Apple Watch’s face customization screen.

The complications appear in the same order as the descriptor array. When the user configures a complication, the picker shows the first three items from the array that support the complication’s family. If there are more than three, the picker displays a More button to provide access to the additional complications.

To update the descriptors, call [reloadComplicationDescriptors()](../clkcomplicationserver/reloadcomplicationdescriptors%28%29.md).

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
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
- [getTimelineStartDate(for:withHandler:)](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# getComplicationDescriptorsWithHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns the list of complication descriptors.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (void) getComplicationDescriptorsWithHandler:(void (^)(NSArray<CLKComplicationDescriptor *> *)) handler;
```

## Parameters

- `handler`: In your data source’s implementation, call the handler and pass the complication descriptors for your app. This block takes the following parameter:

  - **`descriptors`**: An array containing your app’s complication descriptors.

## Mentioned In

- [Declaring complications for your app](../declaring-complications-for-your-app.md)

<a id="Discussion"></a>

## Discussion

ClockKit calls this method to determine the complications that an app supports. Implement this method to define your app’s complications. For example, a weather app may support different complications for the current condition, temperature, or chance of precipitation.

You can also use your implementation to customize the types of complications according to your app’s current data. For example, a weather app could provide separate complications for the user’s favorite locations.

In your data source’s implementation, create an array of [CLKComplicationDescriptor](../clkcomplicationdescriptor.md) objects to represent the complications that your app supports, and then pass the array to the method’s handler.

```swift
func getComplicationDescriptors(handler: @escaping ([CLKComplicationDescriptor]) -> Void) {
    
    let mySupportedFamilies = CLKComplicationFamily.allCases

    // Create the condition descriptor.
    let conditionDescriptor = CLKComplicationDescriptor(
        identifier: complicationConditionIdentifier,
        displayName: "Weather Condition",
        supportedFamilies: mySupportedFamilies)

    // Create the temperature descriptor.
    let temperatureDescriptor = CLKComplicationDescriptor(
        identifier: complicationTemperatureIdentifier,
        displayName: "Temperature",
        supportedFamilies: mySupportedFamilies)

    // Create the precipitation descriptor.
    let precipitationDescriptor = CLKComplicationDescriptor(
        identifier: complicationPrecipitationIdentifier,
        displayName: "Percipitation",
        supportedFamilies: mySupportedFamilies)
    
    // Call the handler and pass an array of descriptors.
    handler([conditionDescriptor,
             temperatureDescriptor,
             precipitationDescriptor])
}
```

In addition to defining a unique type of complication, each descriptor also defines the families that the complication supports. Each descriptor appears as a separate complication on the Apple Watch’s face customization screen.

The complications appear in the same order as the descriptor array. When the user configures a complication, the picker shows the first three items from the array that support the complication’s family. If there are more than three, the picker displays a More button to provide access to the additional complications.

To update the descriptors, call [reloadComplicationDescriptors](../clkcomplicationserver/reloadcomplicationdescriptors%28%29.md).

## See Also

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
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
- [getTimelineStartDateForComplication:withHandler:](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

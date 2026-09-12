> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/getlocalizablesampletemplate(for:withhandler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/getlocalizablesampletemplate(for:withhandler:))

# getLocalizableSampleTemplate(for:withHandler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Gets a localizable template that shows sample data for the specified complication.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
optional func getLocalizableSampleTemplate(for complication: CLKComplication, withHandler handler: @escaping (CLKComplicationTemplate?) -> Void)
```

```swift
optional func localizableSampleTemplate(for complication: CLKComplication) async -> CLKComplicationTemplate?
```

## Parameters

- `complication`: The complication tied to the request. Use the complication family information in this object to determine which set of templates are valid. For example, if the complication family is [CLKComplicationFamily.utilitarianLarge](../clkcomplicationfamily/utilitarianlarge.md), you’d instantiate the [CLKComplicationTemplateUtilitarianLargeFlat](../clkcomplicationtemplateutilitarianlargeflat.md) class for your template.
- `handler`: The handler to execute with the template. This block has no return value and takes the following parameter:

  - **template**: The template object containing your placeholder data. The data in this template is cached and displayed for your complication.

## Mentioned In

- [Adding Placeholders for Your Complication](../adding-placeholders-for-your-complication.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

The system calls this method once per supported complication when your extension is installed, and the results are cached. In your implementation, instantiate the appropriate template class and populate the resulting object with localized data. The data you supply should be fake, but it should reflect what your complication would normally look like.

If you pass `nil` to the handler, the system generates a default placeholder template from your app’s icon and name.

## See Also

### Related Documentation

- [localizableTextProvider(withStringsFileTextKey:)](../clktextprovider/localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProvider(withStringsFileFormatKey:textProviders:)](../clktextprovider/localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.
- [localizableTextProvider(withStringsFileTextKey:shortTextKey:)](../clktextprovider/localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptors(handler:)](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors(\_:)](handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
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

# getLocalizableSampleTemplateForComplication:withHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Gets a localizable template that shows sample data for the specified complication.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (void) getLocalizableSampleTemplateForComplication:(CLKComplication *) complication withHandler:(void (^)(CLKComplicationTemplate *complicationTemplate)) handler;
```

## Parameters

- `complication`: The complication tied to the request. Use the complication family information in this object to determine which set of templates are valid. For example, if the complication family is [CLKComplicationFamilyUtilitarianLarge](../clkcomplicationfamily/utilitarianlarge.md), you’d instantiate the [CLKComplicationTemplateUtilitarianLargeFlat](../clkcomplicationtemplateutilitarianlargeflat.md) class for your template.
- `handler`: The handler to execute with the template. This block has no return value and takes the following parameter:

  - **template**: The template object containing your placeholder data. The data in this template is cached and displayed for your complication.

## Mentioned In

- [Adding Placeholders for Your Complication](../adding-placeholders-for-your-complication.md)
- [Sharing an Apple Watch face](../sharing-an-apple-watch-face.md)

<a id="Discussion"></a>

## Discussion

The system calls this method once per supported complication when your extension is installed, and the results are cached. In your implementation, instantiate the appropriate template class and populate the resulting object with localized data. The data you supply should be fake, but it should reflect what your complication would normally look like.

If you pass `nil` to the handler, the system generates a default placeholder template from your app’s icon and name.

## See Also

### Related Documentation

- [localizableTextProviderWithStringsFileTextKey:](../clktextprovider/localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProviderWithStringsFileFormatKey:textProviders:](../clktextprovider/localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.
- [localizableTextProviderWithStringsFileTextKey:shortTextKey:](../clktextprovider/localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.

### Deprecated methods

- [CLKLaunchedTimelineEntryDateKey](../clklaunchedtimelineentrydatekey.md): Deprecated. A key that indicates the date when the system launched the complication.
- [CLKLaunchedComplicationIdentifierKey](../clklaunchedcomplicationidentifierkey.md): Deprecated. A key that indicates the identifier of a complication the system launched.
- [getComplicationDescriptorsWithHandler:](getcomplicationdescriptors%28handler_%29.md): Deprecated. Returns the list of complication descriptors.
- [handleSharedComplicationDescriptors:](handlesharedcomplicationdescriptors%28__%29.md): Deprecated. Informs the app about complications from a shared watch face.
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

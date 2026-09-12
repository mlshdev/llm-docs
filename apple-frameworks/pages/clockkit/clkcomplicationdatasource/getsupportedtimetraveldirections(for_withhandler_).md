> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/getsupportedtimetraveldirections(for:withhandler:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/getsupportedtimetraveldirections(for:withhandler:))

# getSupportedTimeTravelDirections(for:withHandler:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Determines whether your complication can provide timeline entries for the future or the past.

> Time Travel is no longer supported. Use CLKComplicationDataSource's getTimelineEndDateForComplication:withHandler: to specify forward timeline support.

## Declaration

```swift
optional func getSupportedTimeTravelDirections(for complication: CLKComplication, withHandler handler: @escaping (CLKComplicationTimeTravelDirections) -> Void)
```

## Parameters

- `complication`: The complication tied to the request.
- `handler`: The handler to execute with the Time Travel directions. This block has no return value and takes the following parameter:

  - **directions**: The supported time travel directions. You may combine the values of the [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md) type when specifying this value.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

<a id="Discussion"></a>

## Discussion

The system calls this method to determine whether your app can provide future or past data entries for the specified complication type. Your implementation of this method must execute the block in the `handler` parameter and specify the supported directions.

Include the [backward](../clkcomplicationtimetraveldirections/backward.md) constant if your app provides a historical record of events that have occurred or information that was valid at specific times. For example, a music app could provide entries for songs that have already played.

Include the [forward](../clkcomplicationtimetraveldirections/forward.md) constant if your app is able to generate complication data tied to future dates. For example, a calendar app would provide entries for future meeting times.

In watchOS 7 and later, the system checks the value returned by [getTimelineEndDate(for:withHandler:)](gettimelineenddate%28for_withhandler_%29.md) instead. If the method returns a non-nil value, ClockKit attempts to bulk load future timeline entries. Otherwise, it only asks for the current timeline entry.

## Topics

### Time Travel Directions

- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.

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
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

# getSupportedTimeTravelDirectionsForComplication:withHandler: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Determines whether your complication can provide timeline entries for the future or the past.

> Time Travel is no longer supported. Use CLKComplicationDataSource's getTimelineEndDateForComplication:withHandler: to specify forward timeline support.

## Declaration

```objectivec
- (void) getSupportedTimeTravelDirectionsForComplication:(CLKComplication *) complication withHandler:(void (^)(CLKComplicationTimeTravelDirections directions)) handler;
```

## Parameters

- `complication`: The complication tied to the request.
- `handler`: The handler to execute with the Time Travel directions. This block has no return value and takes the following parameter:

  - **directions**: The supported time travel directions. You may combine the values of the [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md) type when specifying this value.

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

<a id="Discussion"></a>

## Discussion

The system calls this method to determine whether your app can provide future or past data entries for the specified complication type. Your implementation of this method must execute the block in the `handler` parameter and specify the supported directions.

Include the [CLKComplicationTimeTravelDirectionBackward](../clkcomplicationtimetraveldirections/backward.md) constant if your app provides a historical record of events that have occurred or information that was valid at specific times. For example, a music app could provide entries for songs that have already played.

Include the [CLKComplicationTimeTravelDirectionForward](../clkcomplicationtimetraveldirections/forward.md) constant if your app is able to generate complication data tied to future dates. For example, a calendar app would provide entries for future meeting times.

In watchOS 7 and later, the system checks the value returned by [getTimelineEndDateForComplication:withHandler:](gettimelineenddate%28for_withhandler_%29.md) instead. If the method returns a non-nil value, ClockKit attempts to bulk load future timeline entries. Otherwise, it only asks for the current timeline entry.

## Topics

### Time Travel Directions

- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.

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
- [CLKComplicationTimeTravelDirections](../clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.

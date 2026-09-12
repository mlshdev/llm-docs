> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource)

# CLKComplicationDataSource (Swift)

**Framework:** ClockKit  
**Kind:** Protocol  
**Availability:** watchOS 2.0+

A protocol that provides ClockKit with information about your complication.

## Declaration

```swift
@MainActor protocol CLKComplicationDataSource : NSObjectProtocol
```

## Mentioned In

- [Enabling Complications for Your watchOS App](enabling-complications-for-your-watchos-app.md)
- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

Apps that support a complication must define a class that supports the [CLKComplicationDataSource](clkcomplicationdatasource.md) protocol and register it with the system. Your data source is responsible for providing timeline entries and data for all of the complication families that you support. You do this by implementing the protocol methods, returning the timeline entries displayed by your complication and information about the features that your complication supports.

You don’t instantiate your data source class explicitly. After defining your class, specify the class name in the General tab of the project settings for your WatchKit extension. When the system needs data, ClockKit instantiates your data source and initializes it by calling its `init` method. Once initialized, ClockKit calls the corresponding protocol methods to gather any needed data. You can also specify your class name in your app’s `Info.plist` file using the `CLKComplicationsPrincipalClass` key.

When the user installs your complication on the clock face, ClockKit creates an appropriate [CLKComplication](clkcomplication.md) object for the selected complication family. ClockKit then passes the complication to your data source so that you know how to format your timeline entries. Use the General tab of your WatchKit extension’s project settings to specify the families you support.

Your complication data source class must implement the [CLKComplicationDataSource](clkcomplicationdatasource.md) protocol’s [getCurrentTimelineEntry(for:withHandler:)](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) method.

You may implement other methods as needed to support the data in your complication. For example, to batch load future timeline entries, implement [getTimelineEndDate(for:withHandler:)](clkcomplicationdatasource/gettimelineenddate%28for_withhandler_%29.md) and pass a future date to the handler. For more information, see [Creating complications for your watchOS app](creating-complications-for-your-watchos-app.md).

> **Note**

>  For watchOS 6 and earlier, you must implement both [getCurrentTimelineEntry(for:withHandler:)](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getSupportedTimeTravelDirections(for:withHandler:)](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md). Use [getSupportedTimeTravelDirections(for:withHandler:)](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md) to specify whether your app can batch load future timeline entries.

ClockKit calls your data source methods on your watchOS app’s main thread.

## Topics

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

### Setting information property keys

- [CLKComplicationPrincipalClass](../bundleresources/information-property-list/clkcomplicationprincipalclass.md): The name of the class that implements the complication data source protocol.

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
- [CLKComplicationTimelineAnimationBehavior](clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirections(for:withHandler:)](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDate(for:withHandler:)](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.
- [getTimelineEntries(for:before:limit:withHandler:)](clkcomplicationdatasource/gettimelineentries%28for_before_limit_withhandler_%29.md): Deprecated. Retrieves past timeline entries for the complication.
- [getNextRequestedUpdateDate(handler:)](clkcomplicationdatasource/getnextrequestedupdatedate%28handler_%29.md): Deprecated. Gets the next time at which to update your complication.
- [requestedUpdateDidBegin()](clkcomplicationdatasource/requestedupdatedidbegin%28%29.md): Deprecated. Indicates that a requested update has begun so that you’ve an opportunity to extend or reload your timeline.
- [requestedUpdateBudgetExhausted()](clkcomplicationdatasource/requestedupdatebudgetexhausted%28%29.md): Deprecated. Indicates that your complication’s time budget is exhausted.
- [getPlaceholderTemplate(for:withHandler:)](clkcomplicationdatasource/getplaceholdertemplate%28for_withhandler_%29.md): Deprecated. Gets a static template to display in the selection screen for your complication.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Migration Support

- [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md): An identifier representing a default complication.
- [CLKComplicationDescriptor](clkcomplicationdescriptor.md): A descriptor that defines a complication and the families that it supports.

# CLKComplicationDataSource (Objective-C)

**Framework:** ClockKit  
**Kind:** Protocol  
**Availability:** watchOS 2.0+

A protocol that provides ClockKit with information about your complication.

## Declaration

```objectivec
@protocol CLKComplicationDataSource <NSObject>
```

## Mentioned In

- [Enabling Complications for Your watchOS App](enabling-complications-for-your-watchos-app.md)
- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

Apps that support a complication must define a class that supports the [CLKComplicationDataSource](clkcomplicationdatasource.md) protocol and register it with the system. Your data source is responsible for providing timeline entries and data for all of the complication families that you support. You do this by implementing the protocol methods, returning the timeline entries displayed by your complication and information about the features that your complication supports.

You don’t instantiate your data source class explicitly. After defining your class, specify the class name in the General tab of the project settings for your WatchKit extension. When the system needs data, ClockKit instantiates your data source and initializes it by calling its `init` method. Once initialized, ClockKit calls the corresponding protocol methods to gather any needed data. You can also specify your class name in your app’s `Info.plist` file using the `CLKComplicationsPrincipalClass` key.

When the user installs your complication on the clock face, ClockKit creates an appropriate [CLKComplication](clkcomplication.md) object for the selected complication family. ClockKit then passes the complication to your data source so that you know how to format your timeline entries. Use the General tab of your WatchKit extension’s project settings to specify the families you support.

Your complication data source class must implement the [CLKComplicationDataSource](clkcomplicationdatasource.md) protocol’s [getCurrentTimelineEntryForComplication:withHandler:](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) method.

You may implement other methods as needed to support the data in your complication. For example, to batch load future timeline entries, implement [getTimelineEndDateForComplication:withHandler:](clkcomplicationdatasource/gettimelineenddate%28for_withhandler_%29.md) and pass a future date to the handler. For more information, see [Creating complications for your watchOS app](creating-complications-for-your-watchos-app.md).

> **Note**

>  For watchOS 6 and earlier, you must implement both [getCurrentTimelineEntryForComplication:withHandler:](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getSupportedTimeTravelDirectionsForComplication:withHandler:](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md). Use [getSupportedTimeTravelDirectionsForComplication:withHandler:](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md) to specify whether your app can batch load future timeline entries.

ClockKit calls your data source methods on your watchOS app’s main thread.

## Topics

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

### Setting information property keys

- [CLKComplicationPrincipalClass](../bundleresources/information-property-list/clkcomplicationprincipalclass.md): The name of the class that implements the complication data source protocol.

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
- [CLKComplicationTimelineAnimationBehavior](clkcomplicationtimelineanimationbehavior.md): Deprecated. Constants indicating the animation behavior during Time Travel.
- [getSupportedTimeTravelDirectionsForComplication:withHandler:](clkcomplicationdatasource/getsupportedtimetraveldirections%28for_withhandler_%29.md): Deprecated. Determines whether your complication can provide timeline entries for the future or the past.
- [CLKComplicationTimeTravelDirections](clkcomplicationtimetraveldirections.md): Deprecated. Constants indicating the supported time travel directions, if any.
- [getTimelineStartDateForComplication:withHandler:](clkcomplicationdatasource/gettimelinestartdate%28for_withhandler_%29.md): Deprecated. Retrieves the earliest date for which your complication is prepared to supply data.
- [getTimelineEntriesForComplication:beforeDate:limit:withHandler:](clkcomplicationdatasource/gettimelineentries%28for_before_limit_withhandler_%29.md): Deprecated. Retrieves past timeline entries for the complication.
- [getNextRequestedUpdateDateWithHandler:](clkcomplicationdatasource/getnextrequestedupdatedate%28handler_%29.md): Deprecated. Gets the next time at which to update your complication.
- [requestedUpdateDidBegin](clkcomplicationdatasource/requestedupdatedidbegin%28%29.md): Deprecated. Indicates that a requested update has begun so that you’ve an opportunity to extend or reload your timeline.
- [requestedUpdateBudgetExhausted](clkcomplicationdatasource/requestedupdatebudgetexhausted%28%29.md): Deprecated. Indicates that your complication’s time budget is exhausted.
- [getPlaceholderTemplateForComplication:withHandler:](clkcomplicationdatasource/getplaceholdertemplate%28for_withhandler_%29.md): Deprecated. Gets a static template to display in the selection screen for your complication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Migration Support

- [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md): An identifier representing a default complication.
- [CLKComplicationDescriptor](clkcomplicationdescriptor.md): A descriptor that defines a complication and the families that it supports.
- [CLKAllComplicationFamilies](clkallcomplicationfamilies.md): Deprecated. Returns an array containing all possible values of the complication family enumeration.

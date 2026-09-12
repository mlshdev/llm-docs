> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver](https://developer.apple.com/documentation/clockkit/clkcomplicationserver)

# CLKComplicationServer (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An object that manages the active complications for an app.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationServer
```

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, use the shared object to fetch information about your active complications and to invalidate or extend the data for a specific complication. You can also use it to get information about the minimum and maximum dates for which you need to provide data to support Time Travel.

## Topics

### Getting the Complication Server

- [sharedInstance()](clkcomplicationserver/sharedinstance%28%29.md): Deprecated. Returns the shared complication server.

### Getting the Active Complications

- [activeComplications](clkcomplicationserver/activecomplications.md): Deprecated. The active complications for the current app.

### Updating Your Timeline Data

- [reloadTimeline(for:)](clkcomplicationserver/reloadtimeline%28for_%29.md): Deprecated. Invalidates your existing timeline data and triggers an update session to reload it.
- [extendTimeline(for:)](clkcomplicationserver/extendtimeline%28for_%29.md): Deprecated. Asks the system to extend the data in your complication’s timeline.

### Updating Complication Types

- [reloadComplicationDescriptors()](clkcomplicationserver/reloadcomplicationdescriptors%28%29.md): Deprecated. Reloads the complication descriptors from the complication data source.

### Getting the Time Travel Boundaries

- [earliestTimeTravelDate](clkcomplicationserver/earliesttimetraveldate.md): Deprecated. The earliest Time Travel date for which you should provide data.
- [latestTimeTravelDate](clkcomplicationserver/latesttimetraveldate.md): Deprecated. The latest date supported by Time Travel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Other Symbols

- [CLKComplication](clkcomplication.md): Deprecated. Metadata about a custom complication.
- [CLKComplicationTimelineEntry](clkcomplicationtimelineentry.md): Deprecated. A container for the complication template object to display and the time to display it.

# CLKComplicationServer (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

An object that manages the active complications for an app.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationServer : NSObject
```

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, use the shared object to fetch information about your active complications and to invalidate or extend the data for a specific complication. You can also use it to get information about the minimum and maximum dates for which you need to provide data to support Time Travel.

## Topics

### Getting the Complication Server

- [sharedInstance](clkcomplicationserver/sharedinstance%28%29.md): Deprecated. Returns the shared complication server.

### Getting the Active Complications

- [activeComplications](clkcomplicationserver/activecomplications.md): Deprecated. The active complications for the current app.

### Updating Your Timeline Data

- [reloadTimelineForComplication:](clkcomplicationserver/reloadtimeline%28for_%29.md): Deprecated. Invalidates your existing timeline data and triggers an update session to reload it.
- [extendTimelineForComplication:](clkcomplicationserver/extendtimeline%28for_%29.md): Deprecated. Asks the system to extend the data in your complication’s timeline.

### Updating Complication Types

- [reloadComplicationDescriptors](clkcomplicationserver/reloadcomplicationdescriptors%28%29.md): Deprecated. Reloads the complication descriptors from the complication data source.

### Receiving Change Notifications

- [CLKComplicationServerActiveComplicationsDidChangeNotification](clkcomplicationserveractivecomplicationsdidchangenotification.md): Deprecated. Posted when the set of active complications changes.

### Getting the Time Travel Boundaries

- [earliestTimeTravelDate](clkcomplicationserver/earliesttimetraveldate.md): Deprecated. The earliest Time Travel date for which you should provide data.
- [latestTimeTravelDate](clkcomplicationserver/latesttimetraveldate.md): Deprecated. The latest date supported by Time Travel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Other Symbols

- [CLKComplication](clkcomplication.md): Deprecated. Metadata about a custom complication.
- [CLKComplicationTimelineEntry](clkcomplicationtimelineentry.md): Deprecated. A container for the complication template object to display and the time to display it.

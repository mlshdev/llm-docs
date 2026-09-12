> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry)

# CLKComplicationTimelineEntry (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A container for the complication template object to display and the time to display it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTimelineEntry
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Each entry object represents a single data point along your complication’s timeline. You create and return timeline entries when asked to do so by ClockKit. When the date associated with a particular timeline entry occurs, ClockKit updates your complication’s interface with the data in the accompanying template object.

You can assign a group identifier to timeline entries to control the behavior of transition animations during Time Travel. When two timeline entries have different values in their [timelineAnimationGroup](clkcomplicationtimelineentry/timelineanimationgroup.md) property, or when the values are `nil`, ClockKit animates the transition between those entries during Time Travel. When two entries have the same group value, no animation is created.

## Topics

### Creating a Timeline Entry

- [init(date:complicationTemplate:)](clkcomplicationtimelineentry/init%28date_complicationtemplate_%29.md): Deprecated. Creates and returns a timeline entry with the specified date and complication data.
- [init(date:complicationTemplate:timelineAnimationGroup:)](clkcomplicationtimelineentry/init%28date_complicationtemplate_timelineanimationgroup_%29.md): Deprecated. Creates and returns a timeline entry with the specified information.

### Setting the Entry Values

- [date](clkcomplicationtimelineentry/date.md): Deprecated. The time at which to display the entry.
- [complicationTemplate](clkcomplicationtimelineentry/complicationtemplate.md): Deprecated. The template containing the data to display in your complication.
- [timelineAnimationGroup](clkcomplicationtimelineentry/timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.

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

- [CLKComplicationServer](clkcomplicationserver.md): Deprecated. An object that manages the active complications for an app.
- [CLKComplication](clkcomplication.md): Deprecated. Metadata about a custom complication.

# CLKComplicationTimelineEntry (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A container for the complication template object to display and the time to display it.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTimelineEntry : NSObject
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Each entry object represents a single data point along your complication’s timeline. You create and return timeline entries when asked to do so by ClockKit. When the date associated with a particular timeline entry occurs, ClockKit updates your complication’s interface with the data in the accompanying template object.

You can assign a group identifier to timeline entries to control the behavior of transition animations during Time Travel. When two timeline entries have different values in their [timelineAnimationGroup](clkcomplicationtimelineentry/timelineanimationgroup.md) property, or when the values are `nil`, ClockKit animates the transition between those entries during Time Travel. When two entries have the same group value, no animation is created.

## Topics

### Creating a Timeline Entry

- [entryWithDate:complicationTemplate:](clkcomplicationtimelineentry/init%28date_complicationtemplate_%29.md): Deprecated. Creates and returns a timeline entry with the specified date and complication data.
- [entryWithDate:complicationTemplate:timelineAnimationGroup:](clkcomplicationtimelineentry/init%28date_complicationtemplate_timelineanimationgroup_%29.md): Deprecated. Creates and returns a timeline entry with the specified information.

### Setting the Entry Values

- [date](clkcomplicationtimelineentry/date.md): Deprecated. The time at which to display the entry.
- [complicationTemplate](clkcomplicationtimelineentry/complicationtemplate.md): Deprecated. The template containing the data to display in your complication.
- [timelineAnimationGroup](clkcomplicationtimelineentry/timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Other Symbols

- [CLKComplicationServer](clkcomplicationserver.md): Deprecated. An object that manages the active complications for an app.
- [CLKComplication](clkcomplication.md): Deprecated. Metadata about a custom complication.

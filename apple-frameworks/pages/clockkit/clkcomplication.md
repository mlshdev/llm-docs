> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplication](https://developer.apple.com/documentation/clockkit/clkcomplication)

# CLKComplication (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Metadata about a custom complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplication
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)
- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

ClockKit defines each complication by its [family](clkcomplication/family.md) and [identifier](clkcomplication/identifier.md) properties. Each pair represents a unique complication that the user can select when configuring a watch face. When creating timeline entries, check both properties before creating and filling the complication’s template.

You specify the possible [family](clkcomplication/family.md) and [identifier](clkcomplication/identifier.md) combinations in your data source’s [getComplicationDescriptors(handler:)](clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method. Each of the [CLKComplicationDescriptor](clkcomplicationdescriptor.md) objects you provide defines a unique identifier and the families that it supports.

In watchOS 6 and earlier, each app can have only one complication per supported family. When your app creates complication templates, determine the complication’s type from its [family](clkcomplication/family.md) property only. For more information, see [Declaring complications for your app](declaring-complications-for-your-app.md).

You don’t create instances of this class directly. Instead, you retrieve them from the [CLKComplicationServer](clkcomplicationserver.md) object. Complication objects are only available when your complication is in use on the watch face.

In addition to getting information about the complication, you use complication objects to extend or replace the timeline data for one of your active complications. When calling the [extendTimeline(for:)](clkcomplicationserver/extendtimeline%28for_%29.md) and [reloadTimeline(for:)](clkcomplicationserver/reloadtimeline%28for_%29.md) methods of the shared [CLKComplicationServer](clkcomplicationserver.md) object, pass the complication object you want to update.

## Topics

### Accessing Data About the Complication

- [family](clkcomplication/family.md): Deprecated. The family to which the complication belongs.
- [identifier](clkcomplication/identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](clkcomplication/useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](clkcomplication/userinfo.md): Deprecated. A dictionary of additional data associated with the complication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Other Symbols

- [CLKComplicationServer](clkcomplicationserver.md): Deprecated. An object that manages the active complications for an app.
- [CLKComplicationTimelineEntry](clkcomplicationtimelineentry.md): Deprecated. A container for the complication template object to display and the time to display it.

# CLKComplication (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Metadata about a custom complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplication : NSObject
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)
- [Sharing an Apple Watch face](sharing-an-apple-watch-face.md)

<a id="overview"></a>

## Overview

ClockKit defines each complication by its [family](clkcomplication/family.md) and [identifier](clkcomplication/identifier.md) properties. Each pair represents a unique complication that the user can select when configuring a watch face. When creating timeline entries, check both properties before creating and filling the complication’s template.

You specify the possible [family](clkcomplication/family.md) and [identifier](clkcomplication/identifier.md) combinations in your data source’s [getComplicationDescriptorsWithHandler:](clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method. Each of the [CLKComplicationDescriptor](clkcomplicationdescriptor.md) objects you provide defines a unique identifier and the families that it supports.

In watchOS 6 and earlier, each app can have only one complication per supported family. When your app creates complication templates, determine the complication’s type from its [family](clkcomplication/family.md) property only. For more information, see [Declaring complications for your app](declaring-complications-for-your-app.md).

You don’t create instances of this class directly. Instead, you retrieve them from the [CLKComplicationServer](clkcomplicationserver.md) object. Complication objects are only available when your complication is in use on the watch face.

In addition to getting information about the complication, you use complication objects to extend or replace the timeline data for one of your active complications. When calling the [extendTimelineForComplication:](clkcomplicationserver/extendtimeline%28for_%29.md) and [reloadTimelineForComplication:](clkcomplicationserver/reloadtimeline%28for_%29.md) methods of the shared [CLKComplicationServer](clkcomplicationserver.md) object, pass the complication object you want to update.

## Topics

### Accessing Data About the Complication

- [family](clkcomplication/family.md): Deprecated. The family to which the complication belongs.
- [identifier](clkcomplication/identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](clkcomplication/useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](clkcomplication/userinfo.md): Deprecated. A dictionary of additional data associated with the complication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Other Symbols

- [CLKComplicationServer](clkcomplicationserver.md): Deprecated. An object that manages the active complications for an app.
- [CLKComplicationTimelineEntry](clkcomplicationtimelineentry.md): Deprecated. A container for the complication template object to display and the time to display it.

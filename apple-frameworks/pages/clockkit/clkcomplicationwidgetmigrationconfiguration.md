> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationwidgetmigrationconfiguration](https://developer.apple.com/documentation/clockkit/clkcomplicationwidgetmigrationconfiguration)

# CLKComplicationWidgetMigrationConfiguration (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

An abstract class that specifies WidgetKit complications.

## Declaration

```swift
class CLKComplicationWidgetMigrationConfiguration
```

<a id="overview"></a>

## Overview

The [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md) class is the basis for all classes that describe watchOS complications in WidgetKit. Because it’s an abstract class, you don’t instantiate it directly. Instead, create one of its concrete subclasses: [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md), [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md), or [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md)
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md)
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.

# CLKComplicationWidgetMigrationConfiguration (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

An abstract class that specifies WidgetKit complications.

## Declaration

```objectivec
@interface CLKComplicationWidgetMigrationConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md) class is the basis for all classes that describe watchOS complications in WidgetKit. Because it’s an abstract class, you don’t instantiate it directly. Instead, create one of its concrete subclasses: [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md), [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md), or [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md)
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.

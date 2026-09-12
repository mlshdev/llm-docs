> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationstaticwidgetmigrationconfiguration](https://developer.apple.com/documentation/clockkit/clkcomplicationstaticwidgetmigrationconfiguration)

# CLKComplicationStaticWidgetMigrationConfiguration (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A configuration object that specifies a static complication in WidgetKit.

## Declaration

```swift
class CLKComplicationStaticWidgetMigrationConfiguration
```

<a id="overview"></a>

## Overview

You can use static complications if your app doesn’t dynamically customize the list of complications available in the complication picker. For example, if your complications display the current temperature and chance of precipitation at the user’s current location, you can use a set of static widgets to define these complications.

For more information, see [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md).

## Topics

### Creating static complication configurations

- [init(kind:extensionBundleIdentifier:)](clkcomplicationstaticwidgetmigrationconfiguration/init%28kind_extensionbundleidentifier_%29.md): Creates an object that describes a static watchOS complication in your WidgetKit extension.

### Accessing configuration properties

- [kind](clkcomplicationstaticwidgetmigrationconfiguration/kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](clkcomplicationstaticwidgetmigrationconfiguration/extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.

## Relationships

### Inherits From

- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md)

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
- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

# CLKComplicationStaticWidgetMigrationConfiguration (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A configuration object that specifies a static complication in WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationStaticWidgetMigrationConfiguration : CLKComplicationWidgetMigrationConfiguration
```

<a id="overview"></a>

## Overview

You can use static complications if your app doesn’t dynamically customize the list of complications available in the complication picker. For example, if your complications display the current temperature and chance of precipitation at the user’s current location, you can use a set of static widgets to define these complications.

For more information, see [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md).

## Topics

### Creating static complication configurations

- [initWithKind:extensionBundleIdentifier:](clkcomplicationstaticwidgetmigrationconfiguration/init%28kind_extensionbundleidentifier_%29.md): Creates an object that describes a static watchOS complication in your WidgetKit extension.
- [staticWidgetMigrationConfigurationWithKind:extensionBundleIdentifier:](clkcomplicationstaticwidgetmigrationconfiguration/staticwidgetmigrationconfigurationwithkind_extensionbundleidentifier_.md): Creates an object that describes a static watchOS complication in your WidgetKit extension.

### Accessing configuration properties

- [kind](clkcomplicationstaticwidgetmigrationconfiguration/kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](clkcomplicationstaticwidgetmigrationconfiguration/extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.

## Relationships

### Inherits From

- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

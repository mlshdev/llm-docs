> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration](https://developer.apple.com/documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration)

# CLKComplicationIntentWidgetMigrationConfiguration (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A configuration object that specifies an intents-based complication in WidgetKit.

## Declaration

```swift
class CLKComplicationIntentWidgetMigrationConfiguration
```

<a id="overview"></a>

## Overview

These configuration objects use an [INIntent](../intents/inintent.md) object to provide dynamic configuration information. Use intent-based complications when your app customizes the list of complications available in the complication picker based on the state of your app. For example, if you provide temperature complications for the top cities in the user’s favorites list, use an [INIntent](../intents/inintent.md) object to describe each city.

For more information, see [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md).

## Topics

### Creating Intent widget configurations

- [init(kind:extensionBundleIdentifier:intent:localizedDisplayName:)](clkcomplicationintentwidgetmigrationconfiguration/init%28kind_extensionbundleidentifier_intent_localizeddisplayname_%29.md): Creates an object that describes an intents-based watchOS complication in your WidgetKit extension.

### Accessing configuration properties

- [kind](clkcomplicationintentwidgetmigrationconfiguration/kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](clkcomplicationintentwidgetmigrationconfiguration/extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.
- [intent](clkcomplicationintentwidgetmigrationconfiguration/intent.md): A SiriKit intent that provides additional configuration information to your WidgetKit complication.
- [localizedDisplayName](clkcomplicationintentwidgetmigrationconfiguration/localizeddisplayname.md): A localized name for the complication.

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
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

# CLKComplicationIntentWidgetMigrationConfiguration (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 9.0+

A configuration object that specifies an intents-based complication in WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationIntentWidgetMigrationConfiguration : CLKComplicationWidgetMigrationConfiguration
```

<a id="overview"></a>

## Overview

These configuration objects use an [INIntent](../intents/inintent.md) object to provide dynamic configuration information. Use intent-based complications when your app customizes the list of complications available in the complication picker based on the state of your app. For example, if you provide temperature complications for the top cities in the user’s favorites list, use an [INIntent](../intents/inintent.md) object to describe each city.

For more information, see [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md).

## Topics

### Creating Intent widget configurations

- [initWithKind:extensionBundleIdentifier:intent:localizedDisplayName:](clkcomplicationintentwidgetmigrationconfiguration/init%28kind_extensionbundleidentifier_intent_localizeddisplayname_%29.md): Creates an object that describes an intents-based watchOS complication in your WidgetKit extension.
- [intentWidgetMigrationConfigurationWithKind:extensionBundleIdentifier:intent:localizedDisplayName:](clkcomplicationintentwidgetmigrationconfiguration/intentwidgetmigrationconfigurationwithkind_extensionbundleidentifier_intent_localizeddisplayname_.md): Creates an object that describes an intents-based watchOS complication in your WidgetKit extension.

### Accessing configuration properties

- [kind](clkcomplicationintentwidgetmigrationconfiguration/kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](clkcomplicationintentwidgetmigrationconfiguration/extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.
- [intent](clkcomplicationintentwidgetmigrationconfiguration/intent.md): A SiriKit intent that provides additional configuration information to your WidgetKit complication.
- [localizedDisplayName](clkcomplicationintentwidgetmigrationconfiguration/localizeddisplayname.md): A localized name for the complication.

## Relationships

### Inherits From

- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationappintentwidgetmigrationconfiguration](https://developer.apple.com/documentation/clockkit/clkcomplicationappintentwidgetmigrationconfiguration)

# CLKComplicationAppIntentWidgetMigrationConfiguration

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 10.0+

A configuration object that specifies a WidgetKit complication that uses app intents.

## Declaration

```swift
class CLKComplicationAppIntentWidgetMigrationConfiguration<Intent> where Intent : WidgetConfigurationIntent
```

<a id="overview"></a>

## Overview

These configuration objects use app intents to provide dynamic configuration information. Use intent-based complications when your app customizes the list of complications available in the complication picker based on the state of your app. For example, if you provide temperature complications for the top cities in the user’s favorites list, use a [WidgetConfigurationIntent](../appintents/widgetconfigurationintent.md) instance to describe each city.

For more information, see [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md).

## Topics

### Creating configurations

- [init(kind:extensionBundleIdentifier:intent:localizedDisplayName:)](clkcomplicationappintentwidgetmigrationconfiguration/init%28kind_extensionbundleidentifier_intent_localizeddisplayname_%29.md): Creates an object that describes a watchOS complication that uses app intents in your WidgetKit extension.

### Accessing configuration properties

- [kind](clkcomplicationappintentwidgetmigrationconfiguration/kind.md): A string that uniquely identifies a widget in your WidgetKit extension.
- [extensionBundleIdentifier](clkcomplicationappintentwidgetmigrationconfiguration/extensionbundleidentifier.md): The bundle identifier for your WidgetKit extension.
- [intent](clkcomplicationappintentwidgetmigrationconfiguration/intent.md): An intent that provides additional configuration information to your WidgetKit complication.
- [localizedDisplayName](clkcomplicationappintentwidgetmigrationconfiguration/localizeddisplayname.md): A localized name for the complication.

### Initializers

- [init(coder:)](clkcomplicationappintentwidgetmigrationconfiguration/init%28coder_%29.md)

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
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

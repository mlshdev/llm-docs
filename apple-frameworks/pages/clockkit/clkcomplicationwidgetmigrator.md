> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationwidgetmigrator](https://developer.apple.com/documentation/clockkit/clkcomplicationwidgetmigrator)

# CLKComplicationWidgetMigrator (Swift)

**Framework:** ClockKit  
**Kind:** Protocol  
**Availability:** watchOS 9.0+

A protocol that maps ClockKit complications to their WidgetKit replacements.

## Declaration

```swift
protocol CLKComplicationWidgetMigrator : NSObjectProtocol
```

## Topics

### Migrating complications

- [getWidgetConfiguration(from:completionHandler:)](clkcomplicationwidgetmigrator/getwidgetconfiguration%28from_completionhandler_%29.md): Returns a configuration object that defines the WidgetKit replacement for the provided ClockKit complication.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationAppIntentWidgetMigrationConfiguration](clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

# CLKComplicationWidgetMigrator (Objective-C)

**Framework:** ClockKit  
**Kind:** Protocol  
**Availability:** watchOS 9.0+

A protocol that maps ClockKit complications to their WidgetKit replacements.

## Declaration

```objectivec
@protocol CLKComplicationWidgetMigrator <NSObject>
```

## Topics

### Migrating complications

- [getWidgetConfigurationFrom:completionHandler:](clkcomplicationwidgetmigrator/getwidgetconfiguration%28from_completionhandler_%29.md): Returns a configuration object that defines the WidgetKit replacement for the provided ClockKit complication.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Migrating to WidgetKit

- [widgetMigrator](clkcomplicationdatasource/widgetmigrator.md): A migrator that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationStaticWidgetMigrationConfiguration](clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationIntentWidgetMigrationConfiguration](clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrationConfiguration](clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

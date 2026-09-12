> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdatasource/widgetmigrator](https://developer.apple.com/documentation/clockkit/clkcomplicationdatasource/widgetmigrator)

# widgetMigrator (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 9.0+

A migrator that maps ClockKit complications to their WidgetKit replacements.

## Declaration

```swift
optional var widgetMigrator: any CLKComplicationWidgetMigrator { get }
```

<a id="Discussion"></a>

## Discussion

Implement this to provide an instance that can migrate a user’s ClockKit complications to their WidgetKit replacements. For example, update your data source so that it also conforms to the [CLKComplicationWidgetMigrator](../clkcomplicationwidgetmigrator.md) protocol.

```swift
class ComplicationController: NSObject, CLKComplicationDataSource, CLKComplicationWidgetMigrator {
   // ...
}
```

Then, have its [widgetMigrator](widgetmigrator.md) property return `self`.

```swift
var widgetMigrator: CLKComplicationWidgetMigrator {
    self
}
```

Finally, implement the [getWidgetConfiguration(from:completionHandler:)](../clkcomplicationwidgetmigrator/getwidgetconfiguration%28from_completionhandler_%29.md) method. This method determines the best WidgetKit configuration for the given complication descriptor. The following example uses the Swift async version of the method.

```swift
func widgetConfiguration(from complicationDescriptor: CLKComplicationDescriptor) async -> CLKComplicationWidgetMigrationConfiguration? {
    
    switch complicationDescriptor.identifier {
    case caffeineDoseIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "Caffeine_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    case cupTotalIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "CupTotal_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    case cupAndCaffeineIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "CupAndCaffeine_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    default:
        return nil
    }
}
```

## See Also

### Migrating to WidgetKit

- [CLKComplicationStaticWidgetMigrationConfiguration](../clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationAppIntentWidgetMigrationConfiguration](../clkcomplicationappintentwidgetmigrationconfiguration.md): A configuration object that specifies a WidgetKit complication that uses app intents.
- [CLKComplicationIntentWidgetMigrationConfiguration](../clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](../clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](../clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

# widgetMigrator (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 9.0+

A migrator that maps ClockKit complications to their WidgetKit replacements.

## Declaration

```objectivec
@property (nonatomic, readonly) id<CLKComplicationWidgetMigrator> widgetMigrator;
```

<a id="Discussion"></a>

## Discussion

Implement this to provide an instance that can migrate a user’s ClockKit complications to their WidgetKit replacements. For example, update your data source so that it also conforms to the [CLKComplicationWidgetMigrator](../clkcomplicationwidgetmigrator.md) protocol.

```swift
class ComplicationController: NSObject, CLKComplicationDataSource, CLKComplicationWidgetMigrator {
   // ...
}
```

Then, have its [widgetMigrator](widgetmigrator.md) property return `self`.

```swift
var widgetMigrator: CLKComplicationWidgetMigrator {
    self
}
```

Finally, implement the [getWidgetConfigurationFrom:completionHandler:](../clkcomplicationwidgetmigrator/getwidgetconfiguration%28from_completionhandler_%29.md) method. This method determines the best WidgetKit configuration for the given complication descriptor. The following example uses the Swift async version of the method.

```swift
func widgetConfiguration(from complicationDescriptor: CLKComplicationDescriptor) async -> CLKComplicationWidgetMigrationConfiguration? {
    
    switch complicationDescriptor.identifier {
    case caffeineDoseIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "Caffeine_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    case cupTotalIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "CupTotal_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    case cupAndCaffeineIdentifier:
        return CLKComplicationStaticWidgetMigrationConfiguration(
            kind: "CupAndCaffeine_Complications",
            extensionBundleIdentifier: "com.example.apple-samplecode.Coffee-Tracker.watchkitapp.watchkitextension.CoffeeTracker-Complications")

    default:
        return nil
    }
}
```

## See Also

### Migrating to WidgetKit

- [CLKComplicationStaticWidgetMigrationConfiguration](../clkcomplicationstaticwidgetmigrationconfiguration.md): A configuration object that specifies a static complication in WidgetKit.
- [CLKComplicationIntentWidgetMigrationConfiguration](../clkcomplicationintentwidgetmigrationconfiguration.md): A configuration object that specifies an intents-based complication in WidgetKit.
- [CLKComplicationWidgetMigrator](../clkcomplicationwidgetmigrator.md): A protocol that maps ClockKit complications to their WidgetKit replacements.
- [CLKComplicationWidgetMigrationConfiguration](../clkcomplicationwidgetmigrationconfiguration.md): An abstract class that specifies WidgetKit complications.

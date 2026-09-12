> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration/intentwidgetmigrationconfigurationwithkind:extensionbundleidentifier:intent:localizeddisplayname:](https://developer.apple.com/documentation/clockkit/clkcomplicationintentwidgetmigrationconfiguration/intentwidgetmigrationconfigurationwithkind:extensionbundleidentifier:intent:localizeddisplayname:)

# intentWidgetMigrationConfigurationWithKind:extensionBundleIdentifier:intent:localizedDisplayName:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 9.0+

Creates an object that describes an intents-based watchOS complication in your WidgetKit extension.

## Declaration

```objectivec
+ (instancetype) intentWidgetMigrationConfigurationWithKind:(NSString *) kind extensionBundleIdentifier:(NSString *) extensionBundleIdentifier intent:(INIntent *) intent localizedDisplayName:(NSString *) localizedDisplayName;
```

## Parameters

- `kind`: A string that uniquely identifies a widget in your WidgetKit extension.
- `extensionBundleIdentifier`: The bundle identifier for your WidgetKit extension.
- `intent`: A SiriKit intent that provides additional configuration information to your WidgetKit complication.
- `localizedDisplayName`: A localized name for the complication.

## See Also

### Creating Intent widget configurations

- [initWithKind:extensionBundleIdentifier:intent:localizedDisplayName:](init%28kind_extensionbundleidentifier_intent_localizeddisplayname_%29.md): Creates an object that describes an intents-based watchOS complication in your WidgetKit extension.

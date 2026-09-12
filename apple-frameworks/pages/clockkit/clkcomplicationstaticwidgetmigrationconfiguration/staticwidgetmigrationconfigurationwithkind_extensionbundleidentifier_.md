> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationstaticwidgetmigrationconfiguration/staticwidgetmigrationconfigurationwithkind:extensionbundleidentifier:](https://developer.apple.com/documentation/clockkit/clkcomplicationstaticwidgetmigrationconfiguration/staticwidgetmigrationconfigurationwithkind:extensionbundleidentifier:)

# staticWidgetMigrationConfigurationWithKind:extensionBundleIdentifier:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 9.0+

Creates an object that describes a static watchOS complication in your WidgetKit extension.

## Declaration

```objectivec
+ (instancetype) staticWidgetMigrationConfigurationWithKind:(NSString *) kind extensionBundleIdentifier:(NSString *) extensionBundleIdentifier;
```

## Parameters

- `kind`: A string that uniquely identifies a widget in your WidgetKit extension.
- `extensionBundleIdentifier`: The bundle identifier for your WidgetKit extension.

## See Also

### Creating static complication configurations

- [initWithKind:extensionBundleIdentifier:](init%28kind_extensionbundleidentifier_%29.md): Creates an object that describes a static watchOS complication in your WidgetKit extension.

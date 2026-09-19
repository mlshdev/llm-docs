> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationstaticwidgetmigrationconfiguration/init(kind:extensionbundleidentifier:)

# init(kind:extensionBundleIdentifier:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 9.0+

Creates an object that describes a static watchOS complication in your WidgetKit extension.

## Declaration

```swift
init(kind: String, extensionBundleIdentifier: String)
```

## Parameters

- `kind`: A string that uniquely identifies a widget in your WidgetKit extension.
- `extensionBundleIdentifier`: The bundle identifier for your WidgetKit extension.

# initWithKind:extensionBundleIdentifier: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

Creates an object that describes a static watchOS complication in your WidgetKit extension.

## Declaration

```objectivec
- (instancetype) initWithKind:(NSString *) kind extensionBundleIdentifier:(NSString *) extensionBundleIdentifier;
```

## Parameters

- `kind`: A string that uniquely identifies a widget in your WidgetKit extension.
- `extensionBundleIdentifier`: The bundle identifier for your WidgetKit extension.

## See Also

### Creating static complication configurations

- [staticWidgetMigrationConfigurationWithKind:extensionBundleIdentifier:](staticwidgetmigrationconfigurationwithkind_extensionbundleidentifier_.md): Creates an object that describes a static watchOS complication in your WidgetKit extension.

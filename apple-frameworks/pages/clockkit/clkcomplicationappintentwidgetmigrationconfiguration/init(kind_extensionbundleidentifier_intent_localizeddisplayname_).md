> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationappintentwidgetmigrationconfiguration/init(kind:extensionbundleidentifier:intent:localizeddisplayname:)](https://developer.apple.com/documentation/clockkit/clkcomplicationappintentwidgetmigrationconfiguration/init(kind:extensionbundleidentifier:intent:localizeddisplayname:))

# init(kind:extensionBundleIdentifier:intent:localizedDisplayName:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 10.0+

Creates an object that describes a watchOS complication that uses app intents in your WidgetKit extension.

## Declaration

```swift
init(kind: String, extensionBundleIdentifier: String, intent: Intent, localizedDisplayName: String)
```

## Parameters

- `kind`: A string that uniquely identifies a widget in your WidgetKit extension.
- `extensionBundleIdentifier`: The bundle identifier for your WidgetKit extension.
- `intent`: An intent that provides additional configuration information to your WidgetKit complication.
- `localizedDisplayName`: A localized name for the complication.

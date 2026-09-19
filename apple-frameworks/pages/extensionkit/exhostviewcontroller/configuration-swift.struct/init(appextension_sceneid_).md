> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionkit/exhostviewcontroller/configuration-swift.struct/init(appextension:sceneid:)

# init(appExtension:sceneID:)

**Framework:** ExtensionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

Creates a new configuration object.

## Declaration

```swift
init(appExtension: AppExtensionIdentity, sceneID: String)
```

## Parameters

- `appExtension`: The app extension for this configuration object.
- `sceneID`: The unique identifier for the scene that uses this configuration.

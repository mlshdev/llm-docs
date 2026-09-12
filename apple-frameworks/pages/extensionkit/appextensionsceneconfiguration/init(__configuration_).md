> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionsceneconfiguration/init(_:configuration:)](https://developer.apple.com/documentation/extensionkit/appextensionsceneconfiguration/init(_:configuration:))

# init(\_:configuration:)

**Framework:** ExtensionKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a scene configuration object from a closure and extension configuration.

## Declaration

```swift
@MainActor @preconcurrency init<Content, Configuration>(_ content: @autoclosure @escaping @MainActor () -> Content, configuration: Configuration? = nil) where Content : AppExtensionScene, Configuration : AppExtensionConfiguration
```

## Parameters

- `content`: The SwiftUI closure from which to build the scene’s content.
- `configuration`: An optional extension configuration file.

<a id="discussion"></a>

## Discussion

To provide a user interface, the extension’s `configuration` must be an [AppExtensionSceneConfiguration](../appextensionsceneconfiguration.md), which combines an [AppExtensionScene](../appextensionscene.md) with an optional non-UI [AppExtensionConfiguration](../../extensionfoundation/appextensionconfiguration.md). The `configuration` value you pass manages global interprocess communications with the host process, while the `content` value defines the extension’s user interface.

## See Also

### Creating the configuration

- [init(\_:)](init%28__%29.md): Creates a scene configuration from a closure.

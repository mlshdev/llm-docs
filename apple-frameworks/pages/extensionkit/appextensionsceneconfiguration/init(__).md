> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionsceneconfiguration/init(_:)](https://developer.apple.com/documentation/extensionkit/appextensionsceneconfiguration/init(_:))

# init(\_:)

**Framework:** ExtensionKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a scene configuration from a closure.

## Declaration

```swift
@MainActor @preconcurrency init<Content>(_ content: @autoclosure @escaping @MainActor () -> Content) where Content : AppExtensionScene
```

<a id="discussion"></a>

## Discussion

- content: The SwiftUI closure from which to build the scene’s content.

## See Also

### Creating the configuration

- [init(\_:configuration:)](init%28__configuration_%29.md): Creates a scene configuration object from a closure and extension configuration.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/primitiveappextensionscene](https://developer.apple.com/documentation/extensionkit/primitiveappextensionscene)

# PrimitiveAppExtensionScene

**Framework:** ExtensionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type you use to deliver the contents of your app-extension-based UI.

## Declaration

```swift
@MainActor @preconcurrency struct PrimitiveAppExtensionScene
```

## Mentioned In

- [Including extension-based UI in your interface](including-extension-based-ui-in-your-interface.md)

<a id="overview"></a>

## Overview

When defining an [AppExtensionScene](appextensionscene.md) type, provide a `PrimitiveAppExtensionScene` structure as the body of that type. This type facilitates the delivery of the scene’s UI views back to the host app for incorporation into the host view controller. When constructing this type, specify one of the defined scene identifiers that the host app supports.

For more information about creating scenes for your app extension, see [Including extension-based UI in your interface](including-extension-based-ui-in-your-interface.md).

## Topics

### Creating a primitive extension scene

- [init(id:content:onConnection:)](primitiveappextensionscene/init%28id_content_onconnection_%29.md): Initializes the primitive app extension scene with the specified ID and closure for the content.

### Defining the scene contents

- [body](primitiveappextensionscene/body.md): The scene’s user interface.

### Describing the scene

- [debugDescription](primitiveappextensionscene/debugdescription.md): A string that provides information about the scene.

### Default Implementations

- [CustomDebugStringConvertible Implementations](primitiveappextensionscene/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [AppExtensionScene](appextensionscene.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### UI definition

- [AppExtensionScene](appextensionscene.md): An interface you use to provide a specific scene from your app extension’s UI.
- [AppExtensionSceneBuilder](appextensionscenebuilder.md): A custom parameter attribute that constructs extension scenes from closures.

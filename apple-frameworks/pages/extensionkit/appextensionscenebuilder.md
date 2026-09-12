> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionscenebuilder](https://developer.apple.com/documentation/extensionkit/appextensionscenebuilder)

# AppExtensionSceneBuilder

**Framework:** ExtensionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A custom parameter attribute that constructs extension scenes from closures.

## Declaration

```swift
@MainActor @preconcurrency @resultBuilder struct AppExtensionSceneBuilder
```

## Topics

### Building the scene’s content

- [buildBlock(\_:)](appextensionscenebuilder/buildblock%28__%29.md): Passes through a single extension scene unmodified.
- [buildBlock(\_:\_:)](appextensionscenebuilder/buildblock%28____%29.md): Builds an extension scene by combining two scenes.
- [buildBlock(\_:\_:\_:)](appextensionscenebuilder/buildblock%28______%29.md): Builds an extension scene by combining three scenes.
- [buildBlock(\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28________%29.md): Builds an extension scene by combining four scenes.
- [buildBlock(\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28__________%29.md): Builds an extension scene by combining five scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28____________%29.md): Builds an extension scene by combining six scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28______________%29.md): Builds an extension scene by combining seven scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28________________%29.md): Builds an extension scene by combining eight scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28__________________%29.md): Builds an extension scene by combining nine scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](appextensionscenebuilder/buildblock%28____________________%29.md): Builds an extension scene by combining ten scenes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### UI definition

- [AppExtensionScene](appextensionscene.md): An interface you use to provide a specific scene from your app extension’s UI.
- [PrimitiveAppExtensionScene](primitiveappextensionscene.md): A type you use to deliver the contents of your app-extension-based UI.

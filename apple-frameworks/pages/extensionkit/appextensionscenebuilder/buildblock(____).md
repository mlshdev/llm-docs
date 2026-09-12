> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionscenebuilder/buildblock(_:_:)](https://developer.apple.com/documentation/extensionkit/appextensionscenebuilder/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** ExtensionKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds an extension scene by combining two scenes.

## Declaration

```swift
@MainActor @preconcurrency static func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> some AppExtensionScene where C0 : AppExtensionScene, C1 : AppExtensionScene

```

<a id="return-value"></a>

## Return Value

The composed scene.

## See Also

### Building the scene’s content

- [buildBlock(\_:)](buildblock%28__%29.md): Passes through a single extension scene unmodified.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Builds an extension scene by combining three scenes.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Builds an extension scene by combining four scenes.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Builds an extension scene by combining five scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Builds an extension scene by combining six scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Builds an extension scene by combining seven scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Builds an extension scene by combining eight scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Builds an extension scene by combining nine scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Builds an extension scene by combining ten scenes.

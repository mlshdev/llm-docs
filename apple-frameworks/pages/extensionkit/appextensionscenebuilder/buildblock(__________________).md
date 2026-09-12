> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/appextensionscenebuilder/buildblock(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/extensionkit/appextensionscenebuilder/buildblock(_:_:_:_:_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)

**Framework:** ExtensionKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds an extension scene by combining nine scenes.

## Declaration

```swift
@MainActor @preconcurrency static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7, C8>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7, _ c8: C8) -> some AppExtensionScene where C0 : AppExtensionScene, C1 : AppExtensionScene, C2 : AppExtensionScene, C3 : AppExtensionScene, C4 : AppExtensionScene, C5 : AppExtensionScene, C6 : AppExtensionScene, C7 : AppExtensionScene, C8 : AppExtensionScene

```

<a id="return-value"></a>

## Return Value

The composed scene.

## See Also

### Building the scene’s content

- [buildBlock(\_:)](buildblock%28__%29.md): Passes through a single extension scene unmodified.
- [buildBlock(\_:\_:)](buildblock%28____%29.md): Builds an extension scene by combining two scenes.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Builds an extension scene by combining three scenes.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Builds an extension scene by combining four scenes.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Builds an extension scene by combining five scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Builds an extension scene by combining six scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Builds an extension scene by combining seven scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28________________%29.md): Builds an extension scene by combining eight scenes.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Builds an extension scene by combining ten scenes.

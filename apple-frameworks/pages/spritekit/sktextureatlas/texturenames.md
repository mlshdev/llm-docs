> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/sktextureatlas/texturenames

# textureNames (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The names of the texture images stored in the atlas.

## Declaration

```swift
var textureNames: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The property holds an array of [NSString](../../foundation/nsstring.md) objects. Each string is the name of a texture stored in the atlas. The count of the array is the number of textures stored in the atlas.

If the atlas is not currently loaded into memory, this method forces it to be loaded from the app bundle. Your game blocks until the atlas is loaded.

# textureNames (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The names of the texture images stored in the atlas.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * textureNames;
```

<a id="Discussion"></a>

## Discussion

The property holds an array of [NSString](../../foundation/nsstring.md) objects. Each string is the name of a texture stored in the atlas. The count of the array is the number of textures stored in the atlas.

If the atlas is not currently loaded into memory, this method forces it to be loaded from the app bundle. Your game blocks until the atlas is loaded.

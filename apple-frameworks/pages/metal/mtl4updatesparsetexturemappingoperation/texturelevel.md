> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsetexturemappingoperation/texturelevel](https://developer.apple.com/documentation/metal/mtl4updatesparsetexturemappingoperation/texturelevel)

# textureLevel (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The index of the mipmap level in the texture to update.

## Declaration

```swift
var textureLevel: Int
```

<a id="discussion"></a>

## Discussion

Provide a value between `0` and the texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

# textureLevel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the mipmap level in the texture to update.

## Declaration

```objectivec
NSUInteger textureLevel;
```

<a id="discussion"></a>

## Discussion

Provide a value between `0` and the texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

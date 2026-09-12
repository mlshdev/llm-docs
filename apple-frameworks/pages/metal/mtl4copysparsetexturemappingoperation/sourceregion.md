> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4copysparsetexturemappingoperation/sourceregion](https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation/sourceregion)

# sourceRegion (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The region in the source texture, in tiles.

## Declaration

```swift
var sourceRegion: MTLRegion
```

<a id="discussion"></a>

## Discussion

The tiles remain mapped in the source texture.

When [sourceLevel](sourcelevel.md) is equal to the source texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `origin.y` to `0` and `size.height` to `1`.

# sourceRegion (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The region in the source texture, in tiles.

## Declaration

```objectivec
MTLRegion sourceRegion;
```

<a id="discussion"></a>

## Discussion

The tiles remain mapped in the source texture.

When [sourceLevel](sourcelevel.md) is equal to the source texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `origin.y` to `0` and `size.height` to `1`.

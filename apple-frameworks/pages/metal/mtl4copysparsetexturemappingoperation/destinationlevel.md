> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation/destinationlevel

# destinationLevel (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The index of the mipmap level in the destination texture.

## Declaration

```swift
var destinationLevel: Int
```

<a id="discussion"></a>

## Discussion

Provide a value between `0` and the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

When [sourceLevel](sourcelevel.md) is equal to the source texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set [destinationLevel](destinationlevel.md) to the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

# destinationLevel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the mipmap level in the destination texture.

## Declaration

```objectivec
NSUInteger destinationLevel;
```

<a id="discussion"></a>

## Discussion

Provide a value between `0` and the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

When [sourceLevel](sourcelevel.md) is equal to the source texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set [destinationLevel](destinationlevel.md) to the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md).

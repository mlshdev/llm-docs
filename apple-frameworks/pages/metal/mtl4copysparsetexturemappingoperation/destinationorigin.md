> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation/destinationorigin

# destinationOrigin (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The origin in the destination texture to copy into, in tiles.

## Declaration

```swift
var destinationOrigin: MTLOrigin
```

<a id="discussion"></a>

## Discussion

The X, Y and Z coordinates of the tiles relative to the origin match the same coordinates in the source region.

When [destinationLevel](destinationlevel.md) is equal to the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `destinationOrigin.y` to `0`.

# destinationOrigin (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The origin in the destination texture to copy into, in tiles.

## Declaration

```objectivec
MTLOrigin destinationOrigin;
```

<a id="discussion"></a>

## Discussion

The X, Y and Z coordinates of the tiles relative to the origin match the same coordinates in the source region.

When [destinationLevel](destinationlevel.md) is equal to the destination texture’s [firstMipmapInTail](../mtltexture/firstmipmapintail.md), set `destinationOrigin.y` to `0`.

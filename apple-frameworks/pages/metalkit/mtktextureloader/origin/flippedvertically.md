> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/origin/flippedvertically](https://developer.apple.com/documentation/metalkit/mtktextureloader/origin/flippedvertically)

# flippedVertically (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option that specifies that images should always be flipped.

## Declaration

```swift
static let flippedVertically: MTKTextureLoader.Origin
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically regardless of any metadata in the file indicating the placement of the origin in the source data.

## See Also

### Specifying Texture Origin Options

- [topLeft](topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [bottomLeft](bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.

# MTKTextureLoaderOriginFlippedVertically (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option that specifies that images should always be flipped.

## Declaration

```objectivec
extern MTKTextureLoaderOrigin const MTKTextureLoaderOriginFlippedVertically;
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically regardless of any metadata in the file indicating the placement of the origin in the source data.

## See Also

### Specifying Texture Origin Options

- [MTKTextureLoaderOriginTopLeft](topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [MTKTextureLoaderOriginBottomLeft](bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/origin/bottomleft](https://developer.apple.com/documentation/metalkit/mtktextureloader/origin/bottomleft)

# bottomLeft (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option for specifying images that should be flipped only to put their origin in the bottom-left corner.

## Declaration

```swift
static let bottomLeft: MTKTextureLoader.Origin
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically if metadata in the file being loaded indicates that the source data starts with the top-left corner of the texture.

## See Also

### Specifying Texture Origin Options

- [topLeft](topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [flippedVertically](flippedvertically.md): An option that specifies that images should always be flipped.

# MTKTextureLoaderOriginBottomLeft (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option for specifying images that should be flipped only to put their origin in the bottom-left corner.

## Declaration

```objectivec
extern MTKTextureLoaderOrigin const MTKTextureLoaderOriginBottomLeft;
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically if metadata in the file being loaded indicates that the source data starts with the top-left corner of the texture.

## See Also

### Specifying Texture Origin Options

- [MTKTextureLoaderOriginTopLeft](topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [MTKTextureLoaderOriginFlippedVertically](flippedvertically.md): An option that specifies that images should always be flipped.

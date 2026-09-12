> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/origin/topleft](https://developer.apple.com/documentation/metalkit/mtktextureloader/origin/topleft)

# topLeft (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option for specifying images that should be flipped only to put their origin in the top-left corner.

## Declaration

```swift
static let topLeft: MTKTextureLoader.Origin
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically if metadata in the file being loaded indicates that the source data starts with the bottom-left corner of the texture.

## See Also

### Specifying Texture Origin Options

- [bottomLeft](bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.
- [flippedVertically](flippedvertically.md): An option that specifies that images should always be flipped.

# MTKTextureLoaderOriginTopLeft (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An option for specifying images that should be flipped only to put their origin in the top-left corner.

## Declaration

```objectivec
extern MTKTextureLoaderOrigin const MTKTextureLoaderOriginTopLeft;
```

<a id="Discussion"></a>

## Discussion

The texture will be flipped vertically if metadata in the file being loaded indicates that the source data starts with the bottom-left corner of the texture.

## See Also

### Specifying Texture Origin Options

- [MTKTextureLoaderOriginBottomLeft](bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.
- [MTKTextureLoaderOriginFlippedVertically](flippedvertically.md): An option that specifies that images should always be flipped.

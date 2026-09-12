> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/origin](https://developer.apple.com/documentation/metalkit/mtktextureloader/origin)

# MTKTextureLoader.Origin (Swift)

**Framework:** MetalKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for specifying when to flip the pixel coordinates of the texture.

## Declaration

```swift
struct Origin
```

## Topics

### Creating Texture Origin Options

- [init(rawValue:)](origin/init%28rawvalue_%29.md): Creates a texture origin option from a raw string value.

### Specifying Texture Origin Options

- [topLeft](origin/topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [bottomLeft](origin/bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.
- [flippedVertically](origin/flippedvertically.md): An option that specifies that images should always be flipped.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Origin Information

- [origin](option/origin.md): A key used to specify when to flip the pixel coordinates of the texture.

# MTKTextureLoaderOrigin (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for specifying when to flip the pixel coordinates of the texture.

## Declaration

```objectivec
typedef NSString * MTKTextureLoaderOrigin;
```

## Topics

### Specifying Texture Origin Options

- [MTKTextureLoaderOriginTopLeft](origin/topleft.md): An option for specifying images that should be flipped only to put their origin in the top-left corner.
- [MTKTextureLoaderOriginBottomLeft](origin/bottomleft.md): An option for specifying images that should be flipped only to put their origin in the bottom-left corner.
- [MTKTextureLoaderOriginFlippedVertically](origin/flippedvertically.md): An option that specifies that images should always be flipped.

## See Also

### Specifying Origin Information

- [MTKTextureLoaderOptionOrigin](option/origin.md): A key used to specify when to flip the pixel coordinates of the texture.

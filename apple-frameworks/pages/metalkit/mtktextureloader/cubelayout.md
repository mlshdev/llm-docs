> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/cubelayout](https://developer.apple.com/documentation/metalkit/mtktextureloader/cubelayout)

# MTKTextureLoader.CubeLayout (Swift)

**Framework:** MetalKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for specifying how cube texture data is arranged in the source image.

## Declaration

```swift
struct CubeLayout
```

## Topics

### Creating Cube Texture Layout Options

- [init(rawValue:)](cubelayout/init%28rawvalue_%29.md): Creates a cube layout option from a raw string value.

### Specifying Cube Texture Layout Options

- [vertical](cubelayout/vertical.md): Specifies that the source 2D image is a vertical arrangement of six cube faces.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Cube Layout

- [cubeLayout](option/cubelayout.md): A key used to specify how cube texture data is arranged in the source image.

# MTKTextureLoaderCubeLayout (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for specifying how cube texture data is arranged in the source image.

## Declaration

```objectivec
typedef NSString * MTKTextureLoaderCubeLayout;
```

## Topics

### Specifying Cube Texture Layout Options

- [MTKTextureLoaderCubeLayoutVertical](cubelayout/vertical.md): Specifies that the source 2D image is a vertical arrangement of six cube faces.

## See Also

### Specifying Cube Layout

- [MTKTextureLoaderOptionCubeLayout](option/cubelayout.md): A key used to specify how cube texture data is arranged in the source image.

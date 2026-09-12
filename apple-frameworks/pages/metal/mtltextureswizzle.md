> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureswizzle](https://developer.apple.com/documentation/metal/mtltextureswizzle)

# MTLTextureSwizzle (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A set of options to choose from when creating a texture swizzle pattern.

## Declaration

```swift
enum MTLTextureSwizzle
```

## Topics

### Specifying swizzle channels

- [MTLTextureSwizzle.alpha](mtltextureswizzle/alpha.md): The alpha channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzle.blue](mtltextureswizzle/blue.md): The blue channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzle.green](mtltextureswizzle/green.md): The green channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzle.red](mtltextureswizzle/red.md): The red channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzle.one](mtltextureswizzle/one.md): A value of `1.0` is copied to the destination channel.
- [MTLTextureSwizzle.zero](mtltextureswizzle/zero.md): A value of `0.0` is copied to the destination channel.

### Initializers

- [init(rawValue:)](mtltextureswizzle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying texture attributes

- [textureType](mtltexturedescriptor/texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](mtltexturedescriptor/pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](mtltexturedescriptor/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexturedescriptor/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexturedescriptor/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexturedescriptor/mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](mtltexturedescriptor/samplecount.md): The number of samples in each fragment.
- [arrayLength](mtltexturedescriptor/arraylength.md): The number of array elements for this texture.
- [resourceOptions](mtltexturedescriptor/resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](mtltexturedescriptor/cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](mtltexturedescriptor/storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](mtltexturedescriptor/hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](mtltexturedescriptor/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](mtltexturedescriptor/usage.md): Options that determine how you can use the texture.
- [swizzle](mtltexturedescriptor/swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.

# MTLTextureSwizzle (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A set of options to choose from when creating a texture swizzle pattern.

## Declaration

```objectivec
enum MTLTextureSwizzle : uint8_t;
```

## Topics

### Specifying swizzle channels

- [MTLTextureSwizzleAlpha](mtltextureswizzle/alpha.md): The alpha channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzleBlue](mtltextureswizzle/blue.md): The blue channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzleGreen](mtltextureswizzle/green.md): The green channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzleRed](mtltextureswizzle/red.md): The red channel of the source pixel is copied to the destination channel.
- [MTLTextureSwizzleOne](mtltextureswizzle/one.md): A value of `1.0` is copied to the destination channel.
- [MTLTextureSwizzleZero](mtltextureswizzle/zero.md): A value of `0.0` is copied to the destination channel.

## See Also

### Specifying texture attributes

- [textureType](mtltexturedescriptor/texturetype.md): The dimension and arrangement of texture image data.
- [pixelFormat](mtltexturedescriptor/pixelformat.md): The size and bit layout of all pixels in the texture.
- [width](mtltexturedescriptor/width.md): The width of the texture image for the base level mipmap, in pixels.
- [height](mtltexturedescriptor/height.md): The height of the texture image for the base level mipmap, in pixels.
- [depth](mtltexturedescriptor/depth.md): The depth of the texture image for the base level mipmap, in pixels.
- [mipmapLevelCount](mtltexturedescriptor/mipmaplevelcount.md): The number of mipmap levels for this texture.
- [sampleCount](mtltexturedescriptor/samplecount.md): The number of samples in each fragment.
- [arrayLength](mtltexturedescriptor/arraylength.md): The number of array elements for this texture.
- [resourceOptions](mtltexturedescriptor/resourceoptions.md): The behavior of a new memory allocation.
- [cpuCacheMode](mtltexturedescriptor/cpucachemode.md): The CPU cache mode used for the CPU mapping of the texture.
- [storageMode](mtltexturedescriptor/storagemode.md): The location and access permissions of the texture.
- [hazardTrackingMode](mtltexturedescriptor/hazardtrackingmode.md): The texture’s hazard tracking mode.
- [allowGPUOptimizedContents](mtltexturedescriptor/allowgpuoptimizedcontents.md): A Boolean value indicating whether the GPU is allowed to adjust the texture’s contents to improve GPU performance.
- [usage](mtltexturedescriptor/usage.md): Options that determine how you can use the texture.
- [swizzle](mtltexturedescriptor/swizzle.md): The pattern you want the GPU to apply to pixels when you read or sample pixels from the texture.

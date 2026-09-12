> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureswizzlechannels](https://developer.apple.com/documentation/metal/mtltextureswizzlechannels)

# MTLTextureSwizzleChannels (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

## Declaration

```swift
struct MTLTextureSwizzleChannels
```

<a id="overview"></a>

## Overview

Use this structure to specify a custom swizzle pattern when creating a new texture or texture view.

## Topics

### Creating a swizzle pattern

- [init()](mtltextureswizzlechannels/init%28%29.md): Creates a default swizzle pattern.
- [init(red:green:blue:alpha:)](mtltextureswizzlechannels/init%28red_green_blue_alpha_%29.md): Creates a swizzle pattern.

### Specifying swizzle values

- [red](mtltextureswizzlechannels/red.md): The data copied to the first output channel.
- [green](mtltextureswizzlechannels/green.md): The data copied to the second output channel.
- [blue](mtltextureswizzlechannels/blue.md): The data copied to the third output channel.
- [alpha](mtltextureswizzlechannels/alpha.md): The data copied to the fourth output channel.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

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

# MTLTextureSwizzleChannels (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A pattern that modifies the data read or sampled from a texture by rearranging or duplicating the elements of a vector.

## Declaration

```objectivec
typedef struct { ... } MTLTextureSwizzleChannels;
```

<a id="overview"></a>

## Overview

Use this structure to specify a custom swizzle pattern when creating a new texture or texture view.

## Topics

### Specifying swizzle values

- [red](mtltextureswizzlechannels/red.md): The data copied to the first output channel.
- [green](mtltextureswizzlechannels/green.md): The data copied to the second output channel.
- [blue](mtltextureswizzlechannels/blue.md): The data copied to the third output channel.
- [alpha](mtltextureswizzlechannels/alpha.md): The data copied to the fourth output channel.

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

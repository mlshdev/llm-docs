> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagedescriptor/usage](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagedescriptor/usage)

# usage (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options to specify the intended usage of the underlying texture.

## Declaration

```swift
var usage: MTLTextureUsage { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [shaderRead](../../metal/mtltextureusage/shaderread.md)`|`[shaderWrite](../../metal/mtltextureusage/shaderwrite.md).

## See Also

### Properties

- [width](width.md): The width of the image.
- [height](height.md): The height of the image.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [pixelFormat](pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](channelformat.md): The storage format to use for each channel in the image.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode of the underlying texture.
- [storageMode](storagemode.md): The storage mode of underlying texture.

# usage (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Options to specify the intended usage of the underlying texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTextureUsage usage;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLTextureUsageShaderRead](../../metal/mtltextureusage/shaderread.md)`|`[MTLTextureUsageShaderWrite](../../metal/mtltextureusage/shaderwrite.md).

## See Also

### Properties

- [width](width.md): The width of the image.
- [height](height.md): The height of the image.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [pixelFormat](pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](channelformat.md): The storage format to use for each channel in the image.
- [cpuCacheMode](cpucachemode.md): The CPU cache mode of the underlying texture.
- [storageMode](storagemode.md): The storage mode of underlying texture.

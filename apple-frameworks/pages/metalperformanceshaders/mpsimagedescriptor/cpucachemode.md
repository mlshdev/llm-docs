> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagedescriptor/cpucachemode](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagedescriptor/cpucachemode)

# cpuCacheMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The CPU cache mode of the underlying texture.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLCPUCacheMode.defaultCache](../../metal/mtlcpucachemode/defaultcache.md).

## See Also

### Properties

- [width](width.md): The width of the image.
- [height](height.md): The height of the image.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [pixelFormat](pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](channelformat.md): The storage format to use for each channel in the image.
- [storageMode](storagemode.md): The storage mode of underlying texture.
- [usage](usage.md): Options to specify the intended usage of the underlying texture.

# cpuCacheMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The CPU cache mode of the underlying texture.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLCPUCacheMode cpuCacheMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLCPUCacheModeDefaultCache](../../metal/mtlcpucachemode/defaultcache.md).

## See Also

### Properties

- [width](width.md): The width of the image.
- [height](height.md): The height of the image.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [pixelFormat](pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](channelformat.md): The storage format to use for each channel in the image.
- [storageMode](storagemode.md): The storage mode of underlying texture.
- [usage](usage.md): Options to specify the intended usage of the underlying texture.

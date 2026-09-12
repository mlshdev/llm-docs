> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/init(device:histograminfo:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/init(device:histograminfo:))

# init(device:histogramInfo:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a histogram with specific information.

## Declaration

```swift
init(device: any MTLDevice, histogramInfo: UnsafePointer<MPSImageHistogramInfo>)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `histogramInfo`: A pointer to a structure describing the histogram content.

<a id="return-value"></a>

## Return Value

An initialized histogram object.

## See Also

### Methods

- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encode(to:sourceTexture:histogram:histogramOffset:)](encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSize(forSourceFormat:)](histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

# initWithDevice:histogramInfo: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a histogram with specific information.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device histogramInfo:(const MPSImageHistogramInfo *) histogramInfo;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `histogramInfo`: A pointer to a structure describing the histogram content.

<a id="return-value"></a>

## Return Value

An initialized histogram object.

## See Also

### Methods

- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSizeForSourceFormat:](histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

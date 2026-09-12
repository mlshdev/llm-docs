> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogramequalization/init(device:histograminfo:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogramequalization/init(device:histograminfo:))

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

- [encodeTransform(to:sourceTexture:histogram:histogramOffset:)](encodetransform%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the transform function to a command buffer using a compute command encoder. The transform function computes the equalization lookup table.

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

- [encodeTransformToCommandBuffer:sourceTexture:histogram:histogramOffset:](encodetransform%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the transform function to a command buffer using a compute command encoder. The transform function computes the equalization lookup table.

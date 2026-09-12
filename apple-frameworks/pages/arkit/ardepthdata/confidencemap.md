> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardepthdata/confidencemap](https://developer.apple.com/documentation/arkit/ardepthdata/confidencemap)

# confidenceMap (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The framework’s confidence in the accuracy of the depth-map data.

## Declaration

```swift
unowned(unsafe) var confidenceMap: CVPixelBuffer? { get }
```

<a id="Discussion"></a>

## Discussion

The natural light of the physical environment affects the [depthMap](depthmap.md) property such that ARKit is less confident about the accuracy of the LiDAR Scanner’s depth measurements for surfaces that are highly reflective, or that have high light absorption. This property measures the accuracy of the scene depth-data by containing an [ARConfidenceLevel](../arconfidencelevel.md) raw-value for every component in [depthMap](depthmap.md).

Custom renderers that process confidence data on the GPU should choose a [MTLPixelFormat](../../metal/mtlpixelformat.md) according to the [confidenceMap](confidencemap.md) pixel format the app reads at runtime. Call [CVPixelBufferGetPixelFormatType(\_:)](../../corevideo/cvpixelbuffergetpixelformattype%28__%29.md) on the [confidenceMap](confidencemap.md) to get its format. If, for example, the [confidenceMap](confidencemap.md) format is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) ([OSType](https://developer.apple.com/documentation/kernel/ostype) \``L008`\`), create a Metal texture with format [MTLPixelFormat.r8Uint](../../metal/mtlpixelformat/r8uint.md) to send confidence data to the GPU.

## See Also

### Depth Information

- [depthMap](depthmap.md): The estimated distance from the device to its environment, in meters.
- [ARConfidenceLevel](../arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

# confidenceMap (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The framework’s confidence in the accuracy of the depth-map data.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, nullable) CVPixelBufferRef confidenceMap;
```

<a id="Discussion"></a>

## Discussion

The natural light of the physical environment affects the [depthMap](depthmap.md) property such that ARKit is less confident about the accuracy of the LiDAR Scanner’s depth measurements for surfaces that are highly reflective, or that have high light absorption. This property measures the accuracy of the scene depth-data by containing an [ARConfidenceLevel](../arconfidencelevel.md) raw-value for every component in [depthMap](depthmap.md).

Custom renderers that process confidence data on the GPU should choose a [MTLPixelFormat](../../metal/mtlpixelformat.md) according to the [confidenceMap](confidencemap.md) pixel format the app reads at runtime. Call [CVPixelBufferGetPixelFormatType](../../corevideo/cvpixelbuffergetpixelformattype%28__%29.md) on the [confidenceMap](confidencemap.md) to get its format. If, for example, the [confidenceMap](confidencemap.md) format is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) ([OSType](https://developer.apple.com/documentation/kernel/ostype) \``L008`\`), create a Metal texture with format [MTLPixelFormatR8Uint](../../metal/mtlpixelformat/r8uint.md) to send confidence data to the GPU.

## See Also

### Depth Information

- [depthMap](depthmap.md): The estimated distance from the device to its environment, in meters.
- [ARConfidenceLevel](../arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

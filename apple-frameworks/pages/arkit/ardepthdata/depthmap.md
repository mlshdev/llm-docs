> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardepthdata/depthmap](https://developer.apple.com/documentation/arkit/ardepthdata/depthmap)

# depthMap (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The estimated distance from the device to its environment, in meters.

## Declaration

```swift
unowned(unsafe) var depthMap: CVPixelBuffer { get }
```

<a id="Discussion"></a>

## Discussion

For custom renderers, if you create a texture to send depth data to the GPU, choose a [MTLPixelFormat](../../metal/mtlpixelformat.md) according to the [depthMap](depthmap.md) pixel format. Call [CVPixelBufferGetPixelFormatType(\_:)](../../corevideo/cvpixelbuffergetpixelformattype%28__%29.md) on the [depthMap](depthmap.md) to get its format. For example, if at runtime the [depthMap](depthmap.md) format is [kCVPixelFormatType_DepthFloat32](../../corevideo/kcvpixelformattype_depthfloat32.md)  ([OSType](https://developer.apple.com/documentation/kernel/ostype) \``fdep`\`), use  [MTLPixelFormat.r32Float](../../metal/mtlpixelformat/r32float.md).

## See Also

### Depth Information

- [confidenceMap](confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.
- [ARConfidenceLevel](../arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

# depthMap (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The estimated distance from the device to its environment, in meters.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CVPixelBufferRef depthMap;
```

<a id="Discussion"></a>

## Discussion

For custom renderers, if you create a texture to send depth data to the GPU, choose a [MTLPixelFormat](../../metal/mtlpixelformat.md) according to the [depthMap](depthmap.md) pixel format. Call [CVPixelBufferGetPixelFormatType](../../corevideo/cvpixelbuffergetpixelformattype%28__%29.md) on the [depthMap](depthmap.md) to get its format. For example, if at runtime the [depthMap](depthmap.md) format is [kCVPixelFormatType_DepthFloat32](../../corevideo/kcvpixelformattype_depthfloat32.md)  ([OSType](https://developer.apple.com/documentation/kernel/ostype) \``fdep`\`), use  [MTLPixelFormatR32Float](../../metal/mtlpixelformat/r32float.md).

## See Also

### Depth Information

- [confidenceMap](confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.
- [ARConfidenceLevel](../arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

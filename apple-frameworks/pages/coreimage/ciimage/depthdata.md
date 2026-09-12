> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/depthdata](https://developer.apple.com/documentation/coreimage/ciimage/depthdata)

# depthData (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Depth data associated with the image.

## Declaration

```swift
var depthData: AVDepthData? { get }
```

<a id="Discussion"></a>

## Discussion

Returns an [AVDepthData](../../avfoundation/avdepthdata.md) if the [CIImage](../ciimage.md) was created with [imageWithData:](imagewithdata_.md) or [imageWithContentsOfURL:](imagewithcontentsofurl_.md) and one of the options [auxiliaryDepth](../ciimageoption/auxiliarydepth.md) or [auxiliaryDisparity](../ciimageoption/auxiliarydisparity.md), otherwise [nil](../../objectivec/nil-227m0.md).

## See Also

### Accessing Original Image Content

- [cgImage](cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [pixelBuffer](pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)

# depthData (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Depth data associated with the image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVDepthData * depthData;
```

<a id="Discussion"></a>

## Discussion

Returns an [AVDepthData](../../avfoundation/avdepthdata.md) if the [CIImage](../ciimage.md) was created with [imageWithData:](imagewithdata_.md) or [imageWithContentsOfURL:](imagewithcontentsofurl_.md) and one of the options [kCIImageAuxiliaryDepth](../ciimageoption/auxiliarydepth.md) or [kCIImageAuxiliaryDisparity](../ciimageoption/auxiliarydisparity.md), otherwise [nil](../../objectivec/nil-227m0.md).

## See Also

### Accessing Original Image Content

- [CGImage](cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [pixelBuffer](pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)

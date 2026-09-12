> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/segmentationbuffer](https://developer.apple.com/documentation/arkit/arframe/segmentationbuffer)

# segmentationBuffer (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.

## Declaration

```swift
var segmentationBuffer: CVPixelBuffer? { get }
```

<a id="Discussion"></a>

## Discussion

ARKit generates the contents of this buffer by processing the camera feed.

If you implement a custom renderer, you apply this property by using alpha and depth mattes provided with [ARMatteGenerator](../armattegenerator.md).

Apps using one of the standard renderers don’t need this this property to occlude virtual content with people. The standard renderers ([ARView](../../realitykit/arview.md), [ARSCNView](../arscnview.md), and [ARSKView](../arskview.md)) enable people occlusion when you add [personSegmentation](../arconfiguration/framesemantics-swift.struct/personsegmentation.md) or [personSegmentationWithDepth](../arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md) to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md).

## See Also

### Checking for people

- [detectedBody](detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARFrame.SegmentationClass](segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

# segmentationBuffer (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferRef segmentationBuffer;
```

<a id="Discussion"></a>

## Discussion

ARKit generates the contents of this buffer by processing the camera feed.

If you implement a custom renderer, you apply this property by using alpha and depth mattes provided with [ARMatteGenerator](../armattegenerator.md).

Apps using one of the standard renderers don’t need this this property to occlude virtual content with people. The standard renderers ([ARView](../../realitykit/arview.md), [ARSCNView](../arscnview.md), and [ARSKView](../arskview.md)) enable people occlusion when you add [ARFrameSemanticPersonSegmentation](../arconfiguration/framesemantics-swift.struct/personsegmentation.md) or [ARFrameSemanticPersonSegmentationWithDepth](../arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md) to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md).

## See Also

### Checking for people

- [detectedBody](detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARSegmentationClass](segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

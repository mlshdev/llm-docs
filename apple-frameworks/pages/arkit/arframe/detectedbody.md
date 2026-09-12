> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/detectedbody](https://developer.apple.com/documentation/arkit/arframe/detectedbody)

# detectedBody (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The screen position information of a body that ARKit recognizes in the camera image.

## Declaration

```swift
var detectedBody: ARBody2D? { get }
```

<a id="Discussion"></a>

## Discussion

To enable 2D body detection, you add the [bodyDetection](../arconfiguration/framesemantics-swift.struct/bodydetection.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) property, or run your session with an [ARBodyTrackingConfiguration](../arbodytrackingconfiguration.md), in which body detection is enabled by default.

## See Also

### Checking for people

- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARFrame.SegmentationClass](segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

# detectedBody (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The screen position information of a body that ARKit recognizes in the camera image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ARBody2D * detectedBody;
```

<a id="Discussion"></a>

## Discussion

To enable 2D body detection, you add the [ARFrameSemanticBodyDetection](../arconfiguration/framesemantics-swift.struct/bodydetection.md) frame semantic to your configuration’s [frameSemantics](../arconfiguration/framesemantics-swift.property.md) property, or run your session with an [ARBodyTrackingConfiguration](../arbodytrackingconfiguration.md), in which body detection is enabled by default.

## See Also

### Checking for people

- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARSegmentationClass](segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth](https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth)

# personSegmentationWithDepth (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An option that indicates that people occlude your app’s virtual content depending on depth.

## Declaration

```swift
static var personSegmentationWithDepth: ARConfiguration.FrameSemantics { get }
```

<a id="Discussion"></a>

## Discussion

The [personSegmentationWithDepth](personsegmentationwithdepth.md) frame semantic specifies that any person ARKit detects in the camera feed should occlude virtual content, depending on the person’s depth in the scene.

When this option is enabled, ARKit sets the [estimatedDepthData](../../arframe/estimateddepthdata.md) and [segmentationBuffer](../../arframe/segmentationbuffer.md) properties to serve as a foundation for people occlusion. The standard renderers ([ARView](../../../realitykit/arview.md), and [ARSCNView](../../arscnview.md)) use those properties to implement people occlusion for you. See [frameSemantics](../framesemantics-swift.property.md) for more information.

## See Also

### Occluding Virtual Content with People

- [personSegmentation](personsegmentation.md): An option that indicates that people occlude your app’s virtual content.

# ARFrameSemanticPersonSegmentationWithDepth (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option that indicates that people occlude your app’s virtual content depending on depth.

## Declaration

```objectivec
ARFrameSemanticPersonSegmentationWithDepth
```

<a id="Discussion"></a>

## Discussion

The [ARFrameSemanticPersonSegmentationWithDepth](personsegmentationwithdepth.md) frame semantic specifies that any person ARKit detects in the camera feed should occlude virtual content, depending on the person’s depth in the scene.

When this option is enabled, ARKit sets the [estimatedDepthData](../../arframe/estimateddepthdata.md) and [segmentationBuffer](../../arframe/segmentationbuffer.md) properties to serve as a foundation for people occlusion. The standard renderers ([ARView](../../../realitykit/arview.md), and [ARSCNView](../../arscnview.md)) use those properties to implement people occlusion for you. See [frameSemantics](../framesemantics-swift.property.md) for more information.

## See Also

### Occluding Virtual Content with People

- [ARFrameSemanticPersonSegmentation](personsegmentation.md): An option that indicates that people occlude your app’s virtual content.

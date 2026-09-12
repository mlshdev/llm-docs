> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentation](https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/personsegmentation)

# personSegmentation (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An option that indicates that people occlude your app’s virtual content.

## Declaration

```swift
static var personSegmentation: ARConfiguration.FrameSemantics { get }
```

<a id="Discussion"></a>

## Discussion

The [personSegmentation](personsegmentation.md) frame semantic specifies that any person ARKit detects in the camera feed occludes virtual content, regardless of the person’s depth in the scene.

When this option is enabled, ARKit sets the [estimatedDepthData](../../arframe/estimateddepthdata.md) and [segmentationBuffer](../../arframe/segmentationbuffer.md) properties to serve as a foundation for people occlusion. The standard renderers ([ARView](../../../realitykit/arview.md), and [ARSCNView](../../arscnview.md)) use those properties to implement people occlusion for you. See [frameSemantics](../framesemantics-swift.property.md) for more information.

## See Also

### Occluding Virtual Content with People

- [personSegmentationWithDepth](personsegmentationwithdepth.md): An option that indicates that people occlude your app’s virtual content depending on depth.

# ARFrameSemanticPersonSegmentation (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option that indicates that people occlude your app’s virtual content.

## Declaration

```objectivec
ARFrameSemanticPersonSegmentation
```

<a id="Discussion"></a>

## Discussion

The [ARFrameSemanticPersonSegmentation](personsegmentation.md) frame semantic specifies that any person ARKit detects in the camera feed occludes virtual content, regardless of the person’s depth in the scene.

When this option is enabled, ARKit sets the [estimatedDepthData](../../arframe/estimateddepthdata.md) and [segmentationBuffer](../../arframe/segmentationbuffer.md) properties to serve as a foundation for people occlusion. The standard renderers ([ARView](../../../realitykit/arview.md), and [ARSCNView](../../arscnview.md)) use those properties to implement people occlusion for you. See [frameSemantics](../framesemantics-swift.property.md) for more information.

## See Also

### Occluding Virtual Content with People

- [ARFrameSemanticPersonSegmentationWithDepth](personsegmentationwithdepth.md): An option that indicates that people occlude your app’s virtual content depending on depth.

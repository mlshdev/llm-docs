> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/framesemantics-swift.struct/bodydetection](https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/bodydetection)

# bodyDetection (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An option that indicates that 2D body detection is enabled.

## Declaration

```swift
static var bodyDetection: ARConfiguration.FrameSemantics { get }
```

<a id="Discussion"></a>

## Discussion

When you set this option in your configuration’s [frameSemantics](../framesemantics-swift.property.md) property, ARKit describes the joint positions of a body it detects in the camera image, using normalized coordinates. See [detectedBody](../../arframe/detectedbody.md) for more information.

# ARFrameSemanticBodyDetection (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

An option that indicates that 2D body detection is enabled.

## Declaration

```objectivec
ARFrameSemanticBodyDetection
```

<a id="Discussion"></a>

## Discussion

When you set this option in your configuration’s [frameSemantics](../framesemantics-swift.property.md) property, ARKit describes the joint positions of a body it detects in the camera image, using normalized coordinates. See [detectedBody](../../arframe/detectedbody.md) for more information.

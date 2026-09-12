> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodytrackingconfiguration/planedetection](https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/planedetection)

# planeDetection (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.

## Declaration

```swift
var planeDetection: ARWorldTrackingConfiguration.PlaneDetection { get set }
```

<a id="Discussion"></a>

## Discussion

By default, plane detection is off. If you enable [horizontal](../arworldtrackingconfiguration/planedetection-swift.struct/horizontal.md) or [vertical](../arworldtrackingconfiguration/planedetection-swift.struct/vertical.md) plane detection, the session adds [ARPlaneAnchor](../arplaneanchor.md) objects and notifies your [ARSessionDelegate](../arsessiondelegate.md), [ARSCNViewDelegate](../arscnviewdelegate.md), or [ARSKViewDelegate](../arskviewdelegate.md) object whenever its analysis of captured video images detects an area that appears to be a flat surface.

## See Also

### Enabling Plane Detection

- [ARWorldTrackingConfiguration.PlaneDetection](../arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

# planeDetection (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.

## Declaration

```objectivec
@property (nonatomic, assign) ARPlaneDetection planeDetection;
```

<a id="Discussion"></a>

## Discussion

By default, plane detection is off. If you enable [ARPlaneDetectionHorizontal](../arworldtrackingconfiguration/planedetection-swift.struct/horizontal.md) or [ARPlaneDetectionVertical](../arworldtrackingconfiguration/planedetection-swift.struct/vertical.md) plane detection, the session adds [ARPlaneAnchor](../arplaneanchor.md) objects and notifies your [ARSessionDelegate](../arsessiondelegate.md), [ARSCNViewDelegate](../arscnviewdelegate.md), or [ARSKViewDelegate](../arskviewdelegate.md) object whenever its analysis of captured video images detects an area that appears to be a flat surface.

## See Also

### Enabling Plane Detection

- [ARPlaneDetection](../arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

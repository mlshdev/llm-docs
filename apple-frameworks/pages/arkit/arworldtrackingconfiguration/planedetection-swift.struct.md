> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/planedetection-swift.struct](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/planedetection-swift.struct)

# ARWorldTrackingConfiguration.PlaneDetection (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Options for whether and how the framework detects flat surfaces in captured images.

## Declaration

```swift
struct PlaneDetection
```

<a id="overview"></a>

## Overview

By default, this configuration disables plane detection. If you enable horizontal or vertical plane detection, the session adds ARPlaneAnchor objects and notifies your ARSessionDelegate, ARSCNViewDelegate, or ARSKViewDelegate object when its analysis of captured video images detects an area that appears to be a flat surface.

Use an empty set literal `[]` to specify no plane detection.

## Topics

### Plane Detection Option Creation

- [init(rawValue:)](planedetection-swift.struct/init%28rawvalue_%29.md): Creates plane detection options.

### Plane Detection Options

- [horizontal](planedetection-swift.struct/horizontal.md): The session detects planar surfaces that are perpendicular to gravity.
- [vertical](planedetection-swift.struct/vertical.md): The session detects surfaces that are parallel to gravity, regardless of other orientation.
- [horizontal](planedetection-swift.struct/horizontal.md): The session detects planar surfaces that are perpendicular to gravity.
- [vertical](planedetection-swift.struct/vertical.md): The session detects surfaces that are parallel to gravity, regardless of other orientation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enabling Plane Detection

- [planeDetection](../arbodytrackingconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.

# ARPlaneDetection (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options for whether and how the framework detects flat surfaces in captured images.

## Declaration

```objectivec
enum ARPlaneDetection : NSUInteger;
```

<a id="overview"></a>

## Overview

By default, this configuration disables plane detection. If you enable horizontal or vertical plane detection, the session adds ARPlaneAnchor objects and notifies your ARSessionDelegate, ARSCNViewDelegate, or ARSKViewDelegate object when its analysis of captured video images detects an area that appears to be a flat surface.

Use an empty set literal `[]` to specify no plane detection.

## Topics

### Plane Detection Options

- [ARPlaneDetectionHorizontal](planedetection-swift.struct/horizontal.md): The session detects planar surfaces that are perpendicular to gravity.
- [ARPlaneDetectionVertical](planedetection-swift.struct/vertical.md): The session detects surfaces that are parallel to gravity, regardless of other orientation.
- [ARPlaneDetectionHorizontal](planedetection-swift.struct/horizontal.md): The session detects planar surfaces that are perpendicular to gravity.
- [ARPlaneDetectionVertical](planedetection-swift.struct/vertical.md): The session detects surfaces that are parallel to gravity, regardless of other orientation.
- [ARPlaneDetectionNone](../arplanedetection/arplanedetectionnone.md): Plane detection is disabled.

## See Also

### Enabling Plane Detection

- [planeDetection](../arbodytrackingconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.

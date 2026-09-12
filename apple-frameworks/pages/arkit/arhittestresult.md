> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult](https://developer.apple.com/documentation/arkit/arhittestresult)

# ARHitTestResult (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

Information about a real-world surface found by examining a point on the screen.

> Use raycasting

## Declaration

```swift
class ARHitTestResult
```

<a id="overview"></a>

## Overview

If you use SceneKit or SpriteKit as your renderer, you can search for real-world surfaces at a screen point using:

- [ARSCNView](arscnview.md) [hitTest(\_:types:)](arscnview/hittest%28__types_%29.md)
- [ARSKView](arskview.md) [hitTest(\_:types:)](arskview/hittest%28__types_%29.md)

Otherwise, you can search the camera image for real-world content using the [ARFrame](arframe.md) [hitTest(\_:types:)](arframe/hittest%28__types_%29.md) method. Because a frame is independent of a view, for this method you pass a point specified in normalized image coordinates (where `(0,0)` is the top left corner of the image and `(1,1)` is the lower right).

All these methods return an array of [ARHitTestResult](arhittestresult.md) objects describing the content found. The number and order of results in the array depends on the search types you specify and the order you specify them in. For example, consider the code below:

```swift
let results = view.hitTest(point, [.existingPlaneUsingGeometry, .estimatedHorizontalPlane])
```

This [hitTest(\_:types:)](arscnview/hittest%28__types_%29.md) call searches first for plane anchors already present in the session (according to the session configuration’s [planeDetection](arworldtrackingconfiguration/planedetection-swift.property.md) settings); returning any such results (in order of distance from the camera) as the first elements in the array. This call also (due to the [estimatedHorizontalPlane](arhittestresult/resulttype/estimatedhorizontalplane.md) request) attempts to determine whether the hit test ray intersects any horizontal surface not already found by plane detection, and returns that result (if any) as the last element in the array.

## Topics

### Identifying Results

- [type](arhittestresult/type.md): Deprecated. The kind of detected feature the search result represents.
- [ARHitTestResult.ResultType](arhittestresult/resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.
- [anchor](arhittestresult/anchor.md): Deprecated. The anchor representing the detected surface, if any.

### Examining Result Geometry

- [distance](arhittestresult/distance.md): Deprecated. The distance, in meters, from the camera to the detected surface.
- [worldTransform](arhittestresult/worldtransform.md): Deprecated. The position and orientation of the result relative to the world coordinate system.
- [localTransform](arhittestresult/localtransform.md): Deprecated. The position and orientation of the result relative to the nearest anchor or feature point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# ARHitTestResult (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

Information about a real-world surface found by examining a point on the screen.

> Use raycasting

## Declaration

```objectivec
@interface ARHitTestResult : NSObject
```

<a id="overview"></a>

## Overview

If you use SceneKit or SpriteKit as your renderer, you can search for real-world surfaces at a screen point using:

- [ARSCNView](arscnview.md) [hitTest:types:](arscnview/hittest%28__types_%29.md)
- [ARSKView](arskview.md) [hitTest:types:](arskview/hittest%28__types_%29.md)

Otherwise, you can search the camera image for real-world content using the [ARFrame](arframe.md) [hitTest:types:](arframe/hittest%28__types_%29.md) method. Because a frame is independent of a view, for this method you pass a point specified in normalized image coordinates (where `(0,0)` is the top left corner of the image and `(1,1)` is the lower right).

All these methods return an array of [ARHitTestResult](arhittestresult.md) objects describing the content found. The number and order of results in the array depends on the search types you specify and the order you specify them in. For example, consider the code below:

```swift
let results = view.hitTest(point, [.existingPlaneUsingGeometry, .estimatedHorizontalPlane])
```

This [hitTest:types:](arscnview/hittest%28__types_%29.md) call searches first for plane anchors already present in the session (according to the session configuration’s [planeDetection](arworldtrackingconfiguration/planedetection-swift.property.md) settings); returning any such results (in order of distance from the camera) as the first elements in the array. This call also (due to the [ARHitTestResultTypeEstimatedHorizontalPlane](arhittestresult/resulttype/estimatedhorizontalplane.md) request) attempts to determine whether the hit test ray intersects any horizontal surface not already found by plane detection, and returns that result (if any) as the last element in the array.

## Topics

### Identifying Results

- [type](arhittestresult/type.md): Deprecated. The kind of detected feature the search result represents.
- [ARHitTestResultType](arhittestresult/resulttype.md): Deprecated. Possible types for specifying a hit-test search, or for the result of a hit-test search.
- [anchor](arhittestresult/anchor.md): Deprecated. The anchor representing the detected surface, if any.

### Examining Result Geometry

- [distance](arhittestresult/distance.md): Deprecated. The distance, in meters, from the camera to the detected surface.
- [worldTransform](arhittestresult/worldtransform.md): Deprecated. The position and orientation of the result relative to the world coordinate system.
- [localTransform](arhittestresult/localtransform.md): Deprecated. The position and orientation of the result relative to the nearest anchor or feature point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

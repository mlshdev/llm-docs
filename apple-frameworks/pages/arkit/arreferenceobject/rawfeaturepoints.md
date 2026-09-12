> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/rawfeaturepoints](https://developer.apple.com/documentation/arkit/arreferenceobject/rawfeaturepoints)

# rawFeaturePoints (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

A coarse representation of the space-mapping data contained in the reference object.

> Only supported for legacy reference objects.

## Declaration

```swift
var rawFeaturePoints: ARPointCloud { get }
```

<a id="Discussion"></a>

## Discussion

These points represent notable features detected in camera imagery during the session that recorded the reference object. ARKit extrapolates the locations of these features in 3D world coordinate space as part of the image and motion analysis that tracks the device’s movement in a session. Taken together, these points loosely correlate to the contours of real-world objects that were in view of the camera during the session.

ARKit does not guarantee that the number and arrangement of raw feature points will remain stable between software releases. However, you can visualize the point cloud to debug your app’s object recording or detection, or inspect its size to estimate the quality of a recorded object.

# rawFeaturePoints (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

A coarse representation of the space-mapping data contained in the reference object.

> Only supported for legacy reference objects.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARPointCloud * rawFeaturePoints;
```

<a id="Discussion"></a>

## Discussion

These points represent notable features detected in camera imagery during the session that recorded the reference object. ARKit extrapolates the locations of these features in 3D world coordinate space as part of the image and motion analysis that tracks the device’s movement in a session. Taken together, these points loosely correlate to the contours of real-world objects that were in view of the camera during the session.

ARKit does not guarantee that the number and arrangement of raw feature points will remain stable between software releases. However, you can visualize the point cloud to debug your app’s object recording or detection, or inspect its size to estimate the quality of a recorded object.

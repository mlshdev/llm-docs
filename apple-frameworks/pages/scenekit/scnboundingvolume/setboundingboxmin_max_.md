> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnboundingvolume/setboundingboxmin:max:](https://developer.apple.com/documentation/scenekit/scnboundingvolume/setboundingboxmin:max:)

# setBoundingBoxMin:max:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Sets a custom bounding box for the object.

## Declaration

```objectivec
- (void) setBoundingBoxMin:(SCNVector3 *) min max:(SCNVector3 *) max;
```

## Parameters

- `min`: A pointer to the minimum coordinates of the bounding box.
- `max`: A pointer to the maximum coordinates of the bounding box.

<a id="Discussion"></a>

## Discussion

You define a bounding box in the local coordinate space using two points identifying its corners, which implicitly determine six axis-aligned planes marking its limits. The x-, y-, and z-coordinate values of any point in the volume are each greater than those of the `min` point and less than those of the `max` point.

By default, Scene Kit automatically computes the bounding volumes of nodes and geometries and uses this information to assist in rendering. You use this method to override the default bounding box.

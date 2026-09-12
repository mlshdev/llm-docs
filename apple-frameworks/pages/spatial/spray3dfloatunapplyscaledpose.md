> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatunapplyscaledpose](https://developer.apple.com/documentation/spatial/spray3dfloatunapplyscaledpose)

# SPRay3DFloatUnapplyScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatUnapplyScaledPose(SPRay3DFloat ray, SPScaledPose3DFloat pose);
```

## Parameters

- `ray`: The source ray.
- `pose`: The scaled pose that the function unapplies to the ray.

<a id="return-value"></a>

## Return Value

The transformed ray.

<a id="discussion"></a>

## Discussion

Returns a ray that’s transformed by the inverse of the specified scaled pose.

> **Note**

> This function rotates the ray’s direction by the pose’s rotation and offsets the ray’s origin by the pose’s position.

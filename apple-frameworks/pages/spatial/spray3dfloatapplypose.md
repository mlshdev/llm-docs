> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatapplypose](https://developer.apple.com/documentation/spatial/spray3dfloatapplypose)

# SPRay3DFloatApplyPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatApplyPose(SPRay3DFloat ray, SPPose3DFloat pose);
```

## Parameters

- `ray`: The source ray.
- `pose`: The pose that the function applies to the ray.

<a id="return-value"></a>

## Return Value

The transformed ray.

<a id="discussion"></a>

## Discussion

Returns a ray that’s transformed by the specified pose.

> **Note**

> This function rotates the ray’s direction by the pose’s rotation and offsets the ray’s origin by the pose’s position.

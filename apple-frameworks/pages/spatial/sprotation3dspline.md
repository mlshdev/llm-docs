> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dspline](https://developer.apple.com/documentation/spatial/sprotation3dspline)

# SPRotation3DSpline

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an interpolated value between two rotations along a spherical cubic spline.

## Declaration

```objectivec
static SPRotation3D SPRotation3DSpline(SPRotation3D r0, SPRotation3D r1, SPRotation3D r2, SPRotation3D r3, double t);
```

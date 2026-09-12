> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatmake-8d6wq](https://developer.apple.com/documentation/spatial/spray3dfloatmake-8d6wq)

# SPRay3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatMake(SPPoint3DFloat origin, SPVector3DFloat direction);
```

## Parameters

- `origin`: A point structure that specifies the origin of the ray.
- `direction`: A Spatial vector that specifies the direction of the ray.

<a id="return-value"></a>

## Return Value

A new ray stucture.

<a id="discussion"></a>

## Discussion

Returns a ray at the specified origin.

> **Note**

> This function normalizes nonzero direction vectors.

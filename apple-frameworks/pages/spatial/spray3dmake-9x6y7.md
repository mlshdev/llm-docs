> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dmake-9x6y7](https://developer.apple.com/documentation/spatial/spray3dmake-9x6y7)

# SPRay3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPRay3D SPRay3DMake(SPPoint3D origin, SPVector3D direction);
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

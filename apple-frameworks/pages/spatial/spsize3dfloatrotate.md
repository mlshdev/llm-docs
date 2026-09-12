> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatrotate](https://developer.apple.com/documentation/spatial/spsize3dfloatrotate)

# SPSize3DFloatRotate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatRotate(SPSize3DFloat size, SPRotation3DFloat rotation);
```

## Parameters

- `size`: The source size.
- `rotation`: The rotation.

<a id="return-value"></a>

## Return Value

A size that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a size that’s rotated by the specified rotation around the origin.

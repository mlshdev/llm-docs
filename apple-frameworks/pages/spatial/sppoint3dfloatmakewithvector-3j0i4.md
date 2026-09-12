> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatmakewithvector-3j0i4](https://developer.apple.com/documentation/spatial/sppoint3dfloatmakewithvector-3j0i4)

# SPPoint3DFloatMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatMakeWithVector(SPVector3DFloat xyz);
```

## Parameters

- `xyz`: The source vector.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Creates a point with coordinates specified as a Spatial vector.

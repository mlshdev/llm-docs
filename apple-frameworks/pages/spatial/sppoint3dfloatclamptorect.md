> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatclamptorect](https://developer.apple.com/documentation/spatial/sppoint3dfloatclamptorect)

# SPPoint3DFloatClampToRect

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatClampToRect(SPPoint3DFloat point, SPRect3DFloat rect);
```

## Parameters

- `point`: The source point.
- `rect`: A 3DFloat rectangle that defines the volume to clamp the point.

<a id="return-value"></a>

## Return Value

A point that’s clamped to the rectangle.

<a id="discussion"></a>

## Discussion

Returns a point with coordinates clamped to the specified rectangle.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dclamptorect](https://developer.apple.com/documentation/spatial/sppoint3dclamptorect)

# SPPoint3DClampToRect

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPoint3D SPPoint3DClampToRect(SPPoint3D point, SPRect3D rect);
```

## Parameters

- `point`: The source point.
- `rect`: A 3D rectangle that defines the volume to clamp the point.

<a id="return-value"></a>

## Return Value

A point that’s clamped to the rectangle.

<a id="discussion"></a>

## Discussion

Returns a point with coordinates clamped to the specified rectangle.

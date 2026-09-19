> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppoint3dmake-2g23y

# SPPoint3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPoint3D SPPoint3DMake(double x, double y, double z);
```

## Parameters

- `x`: The x coordinate.
- `y`: The y coordinate.
- `z`: The z coordinate.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Creates a point with the specified coordinates.

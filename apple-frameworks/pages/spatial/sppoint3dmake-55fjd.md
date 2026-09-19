> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sppoint3dmake-55fjd

# SPPoint3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3D SPPoint3DMake(SPPoint3DFloat point);
```

## Parameters

- `point`: The point.

<a id="return-value"></a>

## Return Value

A new point.

<a id="discussion"></a>

## Discussion

Returns a double-precision point from a single-precision point.

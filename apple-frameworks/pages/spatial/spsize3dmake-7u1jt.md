> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spsize3dmake-7u1jt

# SPSize3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPSize3D SPSize3DMake(double width, double height, double depth);
```

## Parameters

- `width`: The width.
- `height`: The height.
- `depth`: The depth.

<a id="return-value"></a>

## Return Value

A new size stucture.

<a id="discussion"></a>

## Discussion

Creates a size structure with the specified dimensions.

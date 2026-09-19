> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprotationaxis3dfloatmake-5v6mj

# SPRotationAxis3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotationAxis3DFloat SPRotationAxis3DFloatMake(float x, float y, float z);
```

## Parameters

- `x`: The x component.
- `y`: The y component.
- `z`: The z component.

<a id="return-value"></a>

## Return Value

A new rotation axis.

<a id="discussion"></a>

## Discussion

Creates an axis with the specified components.

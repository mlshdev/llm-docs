> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprotationaxis3dfloatmake-4qq2

# SPRotationAxis3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotationAxis3DFloat SPRotationAxis3DFloatMake(SPRotationAxis3D axis);
```

## Parameters

- `axis`: The rotation axis.

<a id="return-value"></a>

## Return Value

A new rotation axis.

<a id="discussion"></a>

## Discussion

Returns a single-precision rotation axis from a double-precision rotation axis.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprotationaxis3dfloatgetvector

# SPRotationAxis3DFloatGetVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static simd_float3 SPRotationAxis3DFloatGetVector(SPRotationAxis3DFloat axis);
```

## Parameters

- `axis`: The source axis.

<a id="return-value"></a>

## Return Value

A three-element vector that contains the axis values.

<a id="discussion"></a>

## Discussion

Returns the @p x, @p y, and @p z components of the axis expressed as a simd vector.

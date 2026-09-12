> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spsize3dfloatshear](https://developer.apple.com/documentation/spatial/spsize3dfloatshear)

# SPSize3DFloatShear

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPSize3DFloatShear(SPSize3DFloat size, SPAxis shearAxis, float shearFactor0, float shearFactor1);
```

## Parameters

- `size`: The source size.
- `shearAxis`: The shear axis.
- `shearFactor0`: The first shear factor.
- `shearFactor1`: The second shear factor.

<a id="return-value"></a>

## Return Value

The transformed size.

<a id="discussion"></a>

## Discussion

Returns a size that’s sheared over an axis by shear factors for the other two axes.

When the shear axis is @p x , @p shearFactor0 is the @p y shear factor and @p shearFactor0 is the @p z shear factor.

When the shear axis is @p y , @p shearFactor0 is the @p x  shear factor and @p shearFactor0 is the @p z shear factor.

When the shear axis is @p z , @p shearFactor0 is the @p x  shear factor and @p shearFactor0 is the @p y shear factor.

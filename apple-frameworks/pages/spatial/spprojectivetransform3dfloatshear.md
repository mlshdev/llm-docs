> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatshear](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatshear)

# SPProjectiveTransform3DFloatShear

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatShear(SPProjectiveTransform3DFloat transform, SPAxis shearAxis, float shearFactor0, float shearFactor1);
```

<a id="discussion"></a>

## Discussion

Returns a new shear transform.

When the shear axis is @p x , @p shearFactor0 is the @p y shear factor and @p shearFactor0 is the @p z shear factor.

When the shear axis is @p y , @p shearFactor0 is the @p x  shear factor and @p shearFactor0 is the @p z shear factor.

When the shear axis is @p z , @p shearFactor0 is the @p x  shear factor and @p shearFactor0 is the @p y shear factor.

If you pass a flip axis that’s not @p x , @p y , or @p z , the function returns @p transform unmodified.

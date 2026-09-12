> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference/parametricvalue(_:offsetbydistance:)](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/parametricvalue(_:offsetbydistance:))

# parametricValue(\_:offsetByDistance:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.

## Declaration

```swift
func parametricValue(_ parametricValue: CGFloat, offsetByDistance distanceStep: CGFloat) -> CGFloat
```

## Parameters

- `parametricValue`: The floating point `[0, count-1]` parametric value.
- `distanceStep`: The distance to offset `parametricValue;` `distanceStep` can be positive or negative.

<a id="return-value"></a>

## Return Value

A parametric value offset by `distanceStep` from `parametricValue`.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPoints(in:strideByDistance:using:)](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPoints(in:strideByParametricStep:using:)](enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPoints(in:strideByTime:using:)](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocation(at:)](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetByTime:)](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [point(at:)](point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [subscript(\_:)](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

# parametricValue:offsetByDistance: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.

## Declaration

```objectivec
- (CGFloat) parametricValue:(CGFloat) parametricValue offsetByDistance:(CGFloat) distanceStep;
```

## Parameters

- `parametricValue`: The floating point `[0, count-1]` parametric value.
- `distanceStep`: The distance to offset `parametricValue;` `distanceStep` can be positive or negative.

<a id="return-value"></a>

## Return Value

A parametric value offset by `distanceStep` from `parametricValue`.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPointsInRange:strideByDistance:usingBlock:](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPointsInRange:strideByParametricStep:usingBlock:](enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPointsInRange:strideByTime:usingBlock:](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocationAt:](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPointAt:](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue:offsetByTime:](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [pointAtIndex:](point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

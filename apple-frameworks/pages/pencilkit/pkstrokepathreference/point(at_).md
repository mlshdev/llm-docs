> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference/point(at:)](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/point(at:))

# point(at:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the B-spline control point at an index point that you provide.

## Declaration

```swift
func point(at i: Int) -> PKStrokePoint
```

## Parameters

- `i`: A control point index.

<a id="return-value"></a>

## Return Value

The [PKStrokePointReference](../pkstrokepointreference.md) at control point index i.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPoints(in:strideByDistance:using:)](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPoints(in:strideByParametricStep:using:)](enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPoints(in:strideByTime:using:)](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocation(at:)](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetByDistance:)](parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue(\_:offsetByTime:)](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [subscript(\_:)](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

# pointAtIndex: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Returns the B-spline control point at an index point that you provide.

## Declaration

```objectivec
- (PKStrokePoint *) pointAtIndex:(NSUInteger) i;
```

## Parameters

- `i`: A control point index.

<a id="return-value"></a>

## Return Value

The [PKStrokePoint](../pkstrokepointreference.md) at control point index i.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPointsInRange:strideByDistance:usingBlock:](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPointsInRange:strideByParametricStep:usingBlock:](enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPointsInRange:strideByTime:usingBlock:](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocationAt:](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPointAt:](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue:offsetByDistance:](parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue:offsetByTime:](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference/enumerateinterpolatedpoints(in:stridebyparametricstep:using:)](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/enumerateinterpolatedpoints(in:stridebyparametricstep:using:))

# enumerateInterpolatedPoints(in:strideByParametricStep:using:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Executes a given block using each point in a range with a parametric step.

> Use \`PKStrokePath.interpolatedPoints(in:by:)\`

## Declaration

```swift
func enumerateInterpolatedPoints(in range: __PKFloatRange, strideByParametricStep parametricStep: CGFloat, using block: @escaping (PKStrokePoint, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `range`: The parametric range in which to enumerate points.
- `parametricStep`: The parametric step between points.
- `block`: The block to execute for each point. This block takes two parameters:

  - `point` —The interpolated point on the spline.
  - `stop` —A reference to a Boolean value. Setting the value to `YES` within the block stops further enumeration, but the block continues to run until it’s finished.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPoints(in:strideByDistance:using:)](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPoints(in:strideByTime:using:)](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocation(at:)](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetByDistance:)](parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue(\_:offsetByTime:)](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [point(at:)](point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [subscript(\_:)](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

# enumerateInterpolatedPointsInRange:strideByParametricStep:usingBlock: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Executes a given block using each point in a range with a parametric step.

## Declaration

```objectivec
- (void) enumerateInterpolatedPointsInRange:(PKFloatRange *) range strideByParametricStep:(CGFloat) parametricStep usingBlock:(void (^)(PKStrokePoint *point, BOOL *stop)) block;
```

## Parameters

- `range`: The parametric range in which to enumerate points.
- `parametricStep`: The parametric step between points.
- `block`: The block to execute for each point. This block takes two parameters:

  - `point` —The interpolated point on the spline.
  - `stop` —A reference to a Boolean value. Setting the value to `YES` within the block stops further enumeration, but the block continues to run until it’s finished.

## See Also

### Accessing and interpolating points

- [enumerateInterpolatedPointsInRange:strideByDistance:usingBlock:](enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPointsInRange:strideByTime:usingBlock:](enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocationAt:](interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPointAt:](interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue:offsetByDistance:](parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue:offsetByTime:](parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [pointAtIndex:](point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

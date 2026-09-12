> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/curvebasis](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/curvebasis)

# curveBasis (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the curve basis function, determining how Metal interpolates the control points.

## Declaration

```swift
var curveBasis: MTLCurveBasis { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `MTLCurveBasisBSpline`. All keyframes share the same curve basis function.

# curveBasis (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the curve basis function, determining how Metal interpolates the control points.

## Declaration

```objectivec
@property (nonatomic) MTLCurveBasis curveBasis;
```

<a id="discussion"></a>

## Discussion

Defaults to `MTLCurveBasisBSpline`. All keyframes share the same curve basis function.

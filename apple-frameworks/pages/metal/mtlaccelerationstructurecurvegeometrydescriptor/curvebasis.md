> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/curvebasis

# curveBasis (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The basis function for the curve geometry.

## Declaration

```swift
var curveBasis: MTLCurveBasis { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCurveBasis.bSpline](../mtlcurvebasis/bspline.md).

# curveBasis (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The basis function for the curve geometry.

## Declaration

```objectivec
@property (nonatomic) MTLCurveBasis curveBasis;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCurveBasisBSpline](../mtlcurvebasis/bspline.md).

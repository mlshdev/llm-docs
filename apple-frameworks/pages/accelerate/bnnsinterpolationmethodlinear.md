> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsinterpolationmethodlinear](https://developer.apple.com/documentation/accelerate/bnnsinterpolationmethodlinear)

# BNNSInterpolationMethodLinear (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Interpolation that is linear or bilinear depending on the number of resized dimensions.

## Declaration

```swift
var BNNSInterpolationMethodLinear: BNNSInterpolationMethod { get }
```

<a id="Discussion"></a>

## Discussion

Linear interpolation is suitable for one or two interpolation dimensions.

## See Also

### Interpolation Methods

- [rawValue](bnnsinterpolationmethod/rawvalue.md)
- [init(\_:)](bnnsinterpolationmethod/init%28__%29.md)
- [init(rawValue:)](bnnsinterpolationmethod/init%28rawvalue_%29.md)
- [BNNSInterpolationMethodNearest](bnnsinterpolationmethodnearest.md): Nearest-neighbor interpolation.

# BNNSInterpolationMethodLinear (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Interpolation that is linear or bilinear depending on the number of resized dimensions.

## Declaration

```objectivec
BNNSInterpolationMethodLinear
```

<a id="Discussion"></a>

## Discussion

Linear interpolation is suitable for one or two interpolation dimensions.

## See Also

### Interpolation Methods

- [BNNSInterpolationMethodNearest](bnnsinterpolationmethodnearest.md): Nearest-neighbor interpolation.

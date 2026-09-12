> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslinearsamplingoffsetcorners](https://developer.apple.com/documentation/accelerate/bnnslinearsamplingoffsetcorners)

# BNNSLinearSamplingOffsetCorners (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The offset corners sampling mode.

## Declaration

```swift
var BNNSLinearSamplingOffsetCorners: BNNSLinearSamplingMode { get }
```

<a id="Discussion"></a>

## Discussion

Given an input grid with a size of `Xin` and an output grid with a size `Xout`, this mode samples the grid using the following:

```swift
delta = max(1, Xin - 1) / Xout
spacing = ((Xout - 1) * delta) / (Xout - 1)

grid_point[i] = min(Xin-1, max(0, 0.5*delta + i*spacing)), for i=0,1,...,Xout-1
```

## See Also

### Constants

- [init(\_:)](bnnslinearsamplingmode/init%28__%29.md)
- [init(rawValue:)](bnnslinearsamplingmode/init%28rawvalue_%29.md)
- [rawValue](bnnslinearsamplingmode/rawvalue.md)
- [BNNSLinearSamplingDefault](bnnslinearsamplingdefault.md): The default linear sampling mode.
- [BNNSLinearSamplingAlignCorners](bnnslinearsamplingaligncorners.md): The align corners sampling mode.
- [BNNSLinearSamplingUnalignCorners](bnnslinearsamplingunaligncorners.md): The unalign corners sampling mode.
- [BNNSLinearSamplingStrictAlignCorners](bnnslinearsamplingstrictaligncorners.md): The strict align corners sampling mode.

# BNNSLinearSamplingOffsetCorners (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The offset corners sampling mode.

## Declaration

```objectivec
BNNSLinearSamplingOffsetCorners
```

<a id="Discussion"></a>

## Discussion

Given an input grid with a size of `Xin` and an output grid with a size `Xout`, this mode samples the grid using the following:

```swift
delta = max(1, Xin - 1) / Xout
spacing = ((Xout - 1) * delta) / (Xout - 1)

grid_point[i] = min(Xin-1, max(0, 0.5*delta + i*spacing)), for i=0,1,...,Xout-1
```

## See Also

### Constants

- [BNNSLinearSamplingDefault](bnnslinearsamplingdefault.md): The default linear sampling mode.
- [BNNSLinearSamplingAlignCorners](bnnslinearsamplingaligncorners.md): The align corners sampling mode.
- [BNNSLinearSamplingUnalignCorners](bnnslinearsamplingunaligncorners.md): The unalign corners sampling mode.
- [BNNSLinearSamplingStrictAlignCorners](bnnslinearsamplingstrictaligncorners.md): The strict align corners sampling mode.

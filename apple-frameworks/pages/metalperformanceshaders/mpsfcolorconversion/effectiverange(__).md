> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfcolorconversion/effectiverange(_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsfcolorconversion/effectiverange(_:))

# effectiveRange(\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func effectiveRange(_ inputRange: MPSFunctions_AABB) -> MPSFunctions_AABB
```

<a id="discussion"></a>

## Discussion

Estimate the gamut produced by the function based on a range of inputs

# effectiveRange: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (MPSFunctions_AABB) effectiveRange:(MPSFunctions_AABB) inputRange;
```

<a id="discussion"></a>

## Discussion

Estimate the gamut produced by the function based on a range of inputs

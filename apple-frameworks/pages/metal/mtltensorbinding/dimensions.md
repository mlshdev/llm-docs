> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltensorbinding/dimensions

# dimensions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The array of sizes, in elements, one for each dimension of this tensor.

## Declaration

```swift
var dimensions: MTLTensorExtents? { get }
```

<a id="discussion"></a>

## Discussion

For shader-bound tensors with dynamic extents, the [rank](../mtltensorextents/rank.md) of `dimensions` corresponds to the rank the shader function specifies, and [extentAtDimensionIndex:](../mtltensorextents/extentatdimensionindex_.md) always returns a value of -1.

For machine learning pipelines, `dimensions` corresponds to the default shape, if you provide one. Otherwise, it’s `nil` in the case of an undefined shape.

# dimensions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The array of sizes, in elements, one for each dimension of this tensor.

## Declaration

```objectivec
@property (readonly, nullable) MTLTensorExtents * dimensions;
```

<a id="discussion"></a>

## Discussion

For shader-bound tensors with dynamic extents, the [rank](../mtltensorextents/rank.md) of `dimensions` corresponds to the rank the shader function specifies, and [extentAtDimensionIndex:](../mtltensorextents/extentatdimensionindex_.md) always returns a value of -1.

For machine learning pipelines, `dimensions` corresponds to the default shape, if you provide one. Otherwise, it’s `nil` in the case of an undefined shape.

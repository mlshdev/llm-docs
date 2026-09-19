> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/splitsectionlengths-5abch

# splitSectionLengths

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

An array that contains the lengths of each split section.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var splitSectionLengths: [Int]? { get }
```

<a id="Discussion"></a>

## Discussion

The layer splits the tensor into chunks along dimensions with sizes given in `splitSectionLengths`.

## See Also

### Inspecting Split Layers

- [dimension](dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitCount](splitcount.md): Deprecated. The number of splits.

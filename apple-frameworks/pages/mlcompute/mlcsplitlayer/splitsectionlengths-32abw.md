> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer/splitsectionlengths-32abw](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/splitsectionlengths-32abw)

# splitSectionLengths

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the lengths of each split section.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * splitSectionLengths;
```

<a id="Discussion"></a>

## Discussion

The layer splits the tensor into chunks along dimensions with sizes given in `splitSectionLengths`.

## See Also

### Inspecting Split Layers

- [dimension](dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitCount](splitcount.md): Deprecated. The number of splits.

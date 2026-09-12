> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer/splitcount](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer/splitcount)

# splitCount (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of splits.

## Declaration

```swift
var splitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The layer splits the tensor into equally sized chunks, however the last chunk may be smaller in size.

## See Also

### Inspecting Split Layers

- [dimension](dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitSectionLengths](splitsectionlengths-5abch.md): Deprecated. An array that contains the lengths of each split section.

# splitCount (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of splits.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger splitCount;
```

<a id="Discussion"></a>

## Discussion

The layer splits the tensor into equally sized chunks, however the last chunk may be smaller in size.

## See Also

### Inspecting Split Layers

- [dimension](dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitSectionLengths](splitsectionlengths-32abw.md): Deprecated. An array that contains the lengths of each split section.

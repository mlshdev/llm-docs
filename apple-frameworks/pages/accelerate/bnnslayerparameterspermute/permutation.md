> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspermute/permutation](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspermute/permutation)

# permutation (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The tuple that defines the permutation.

> Use BNNSGraph\* APIs

## Declaration

```swift
var permutation: (Int, Int, Int, Int, Int, Int, Int, Int)
```

<a id="Discussion"></a>

## Discussion

Use the permutation array to specify the input axis source for the corresponding output axis source. For example, a permutation array \[2,1,0\] applied on a [BNNSDataLayoutImageCHW](../bnnsdatalayoutimagechw.md) tensor results in axis reverse (that is, output axis 0 is input axis 2, output axis 1 is input axis 1, and output axis 2 is input axis 0).

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.

# permutation (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The tuple that defines the permutation.

## Declaration

```objectivec
size_t permutation[8];
```

<a id="Discussion"></a>

## Discussion

Use the permutation array to specify the input axis source for the corresponding output axis source. For example, a permutation array \[2,1,0\] applied on a [BNNSDataLayoutImageCHW](../bnnsdatalayoutimagechw.md) tensor results in axis reverse (that is, output axis 0 is input axis 2, output axis 1 is input axis 1, and output axis 2 is input axis 0).

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.

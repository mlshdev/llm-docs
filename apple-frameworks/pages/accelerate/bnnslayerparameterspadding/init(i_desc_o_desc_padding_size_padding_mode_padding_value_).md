> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterspadding/init(i_desc:o_desc:padding_size:padding_mode:padding_value:)](https://developer.apple.com/documentation/accelerate/bnnslayerparameterspadding/init(i_desc:o_desc:padding_size:padding_mode:padding_value:))

# init(i_desc:o_desc:padding_size:padding_mode:padding_value:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new padding-layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, padding_size: ((Int, Int), (Int, Int), (Int, Int), (Int, Int), (Int, Int), (Int, Int), (Int, Int), (Int, Int)), padding_mode: BNNSPaddingMode, padding_value: UInt32)
```

## Parameters

- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `padding_size`: The number of padding elements to add before and after the original data.
- `padding_mode`: The mode the operation uses to pad.
- `padding_value`: The value the operation uses to fill the padding area when the mode is constant.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Padding isn’t supported beyond 4D tensors.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new padding-layer parameters structure.

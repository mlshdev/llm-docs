> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersgram/init(alpha:i_desc:o_desc:)](https://developer.apple.com/documentation/accelerate/bnnslayerparametersgram/init(alpha:i_desc:o_desc:))

# init(alpha:i_desc:o_desc:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new Gram matrix layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(alpha: Float, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor)
```

## Parameters

- `alpha`: A value to scale the result.
- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new Gram matrix layer parameters structure.

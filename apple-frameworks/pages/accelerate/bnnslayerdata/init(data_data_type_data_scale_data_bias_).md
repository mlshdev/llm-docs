> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerdata/init(data:data_type:data_scale:data_bias:)](https://developer.apple.com/documentation/accelerate/bnnslayerdata/init(data:data_type:data_scale:data_bias:))

# init(data:data_type:data_scale:data_bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS · watchOS 3.0+ (deprecated in 8.0)

> BNNS switched to new Layer Parameters data structures.

## Declaration

```swift
init(data: UnsafeRawPointer?, data_type: BNNSDataType, data_scale: Float = 1, data_bias: Float = 0)
```

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated.
- [init(data:data_type:data_scale:data_bias:data_table:)](init%28data_data_type_data_scale_data_bias_data_table_%29.md): Deprecated. Returns a new layer data structure.

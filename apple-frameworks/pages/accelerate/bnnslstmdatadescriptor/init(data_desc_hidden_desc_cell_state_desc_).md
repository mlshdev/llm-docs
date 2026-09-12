> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslstmdatadescriptor/init(data_desc:hidden_desc:cell_state_desc:)](https://developer.apple.com/documentation/accelerate/bnnslstmdatadescriptor/init(data_desc:hidden_desc:cell_state_desc:))

# init(data_desc:hidden_desc:cell_state_desc:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new long short-term memory (LSTM) data descriptor structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(data_desc: BNNSNDArrayDescriptor, hidden_desc: BNNSNDArrayDescriptor, cell_state_desc: BNNSNDArrayDescriptor)
```

## Parameters

- `data_desc`: The descriptor of the input-output.
- `hidden_desc`: The descriptor of the hidden input-output.
- `cell_state_desc`: The descriptor of the cell-state input-output.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new long short-term memory (LSTM) data descriptor structure.

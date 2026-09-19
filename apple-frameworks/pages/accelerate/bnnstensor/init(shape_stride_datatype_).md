> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/init(shape:stride:datatype:)

# init(shape:stride:dataType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a `BNNSTensor` structure based on the supplied shape and data type.

## Declaration

```swift
init(shape: [Int], stride: [Int], dataType: BNNSDataType)
```

## Parameters

- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.
- `dataType`: The data type of the data.

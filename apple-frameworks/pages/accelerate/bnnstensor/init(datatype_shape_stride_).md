> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/init(datatype:shape:stride:)

# init(dataType:shape:stride:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an unallocated `BNNSTensor`

## Declaration

```swift
init(dataType: BNNSDataType, shape: [Int], stride: [Int])
```

## Parameters

- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

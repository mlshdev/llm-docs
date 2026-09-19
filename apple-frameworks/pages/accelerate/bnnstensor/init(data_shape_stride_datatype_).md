> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/init(data:shape:stride:datatype:)

# init(data:shape:stride:dataType:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a `BNNSTensor` that references the same memory as the specified `UnsafeMutableRawBufferPointer`.

## Declaration

```swift
init(data: UnsafeMutableRawBufferPointer, shape: [Int], stride: [Int], dataType: BNNSDataType)
```

## Parameters

- `data`: A pointer to the source data.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

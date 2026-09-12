> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/init(data:shape:stride:)](https://developer.apple.com/documentation/accelerate/bnnstensor/init(data:shape:stride:))

# init(data:shape:stride:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a `BNNSTensor` that references the same memory as the specified `UnsafeMutableBufferPointer`.

## Declaration

```swift
init<T>(data: UnsafeMutableBufferPointer<T>, shape: [Int], stride: [Int]) where T : BNNSScalar
```

## Parameters

- `data`: A pointer to the source data.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

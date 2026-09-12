> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/init(initializingfrom:shape:stride:)](https://developer.apple.com/documentation/accelerate/bnnstensor/init(initializingfrom:shape:stride:))

# init(initializingFrom:shape:stride:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a `BNNSTensor` structure that’s initialized with every element of the source.

## Declaration

```swift
init<T>(initializingFrom source: some AccelerateBuffer, shape: [Int], stride: [Int]) where T : BNNSScalar
```

## Parameters

- `source`: A collection of elements that the function uses to initialize the tensor’s storage.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

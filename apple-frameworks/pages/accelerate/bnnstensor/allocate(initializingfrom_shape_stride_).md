> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/allocate(initializingfrom:shape:stride:)](https://developer.apple.com/documentation/accelerate/bnnstensor/allocate(initializingfrom:shape:stride:))

# allocate(initializingFrom:shape:stride:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a `BNNSTensor` populated with a **copy** of the values in `source`.

## Declaration

```swift
static func allocate<C>(initializingFrom source: C, shape: [Int], stride: [Int]) -> BNNSTensor where C : AccelerateBuffer, C.Element : BNNSScalar
```

## Parameters

- `source`: The collection that provides the source elements.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

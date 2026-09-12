> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/allocate(repeating:shape:stride:)](https://developer.apple.com/documentation/accelerate/bnnstensor/allocate(repeating:shape:stride:))

# allocate(repeating:shape:stride:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a `BNNSTensor` filled with the specified scalar value.

## Declaration

```swift
static func allocate<T>(repeating repeatedValue: T, shape: [Int], stride: [Int]) -> BNNSTensor where T : BNNSScalar
```

## Parameters

- `repeatedValue`: The value that the function uses for a fillable element.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

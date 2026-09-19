> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/allocateuninitialized(scalartype:shape:stride:)

# allocateUninitialized(scalarType:shape:stride:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a `BNNSTensor` of the specified data type with allocated memory.

## Declaration

```swift
static func allocateUninitialized(scalarType: any BNNSScalar.Type, shape: [Int], stride: [Int]) -> BNNSTensor
```

## Parameters

- `scalarType`: The data type.
- `shape`: The shape of the tensor.
- `stride`: The stride of the tensor.

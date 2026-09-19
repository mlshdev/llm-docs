> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/allocate(as:count:)

# allocate(as:count:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Allocates a tensor with existing size and stride populated by `Context.tensor(forFunction:argument:fillKnownDynamicShapes:)`.

## Declaration

```swift
mutating func allocate<T>(as scalarType: T.Type, count: Int) where T : BNNSScalar
```

## Parameters

- `scalarType`: The data type.
- `count`: The allocation size represented by the count of `scalarType` elements.

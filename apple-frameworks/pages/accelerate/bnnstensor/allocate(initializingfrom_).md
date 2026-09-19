> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/allocate(initializingfrom:)

# allocate(initializingFrom:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Allocates and initializes a tensor with existing size and stride populated by `Context.tensor(forFunction:argument:fillKnownDynamicShapes:)`.

## Declaration

```swift
mutating func allocate<T>(initializingFrom source: some AccelerateBuffer) where T : BNNSScalar
```

## Parameters

- `source`: The collection that provides the source elements.

<a id="discussion"></a>

## Discussion

This function copies the data in `source` to the tensor and sets the tensor’s `data_type` property to that of the source collection’s elements.

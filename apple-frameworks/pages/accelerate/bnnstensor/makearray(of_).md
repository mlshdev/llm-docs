> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnstensor/makearray(of:)

# makeArray(of:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an array that contains a copy of this `BNNSTensor`’s elements.

## Declaration

```swift
func makeArray<T>(of scalarType: T.Type) -> [T] where T : BNNSScalar
```

## Parameters

- `scalarType`: The type that the tensor’s memory is bound to.

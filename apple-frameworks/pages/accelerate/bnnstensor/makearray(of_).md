> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/makearray(of:)](https://developer.apple.com/documentation/accelerate/bnnstensor/makearray(of:))

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

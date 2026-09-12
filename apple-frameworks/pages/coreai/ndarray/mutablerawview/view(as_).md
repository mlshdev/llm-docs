> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview/view(as:)](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview/view(as:))

# view(as:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Create a typed `MutableView` of the same storage as this raw view.

## Declaration

```swift
consuming func view<T>(as type: T.Type = T.self) -> NDArray.MutableView<T> where T : BitwiseCopyable
```

## Parameters

- `type`: Must be the type corresponding to the `ScalarType` of this tensor. For example if this tensor has scalar type `.int32` then you would pass `Int32.self` for type.

<a id="return-value"></a>

## Return Value

A mutable view of the tensor.

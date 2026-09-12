> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rawview/view(as:)](https://developer.apple.com/documentation/coreai/ndarray/rawview/view(as:))

# view(as:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Consume this raw view to create a typed view.

## Declaration

```swift
consuming func view<T>(as: T.Type = T.self) -> NDArray.View<T> where T : BitwiseCopyable
```

<a id="discussion"></a>

## Discussion

> **Note**

> `T` must match `self.scalarType.type`.

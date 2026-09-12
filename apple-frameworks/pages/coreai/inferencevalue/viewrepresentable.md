> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/viewrepresentable](https://developer.apple.com/documentation/coreai/inferencevalue/viewrepresentable)

# InferenceValue.ViewRepresentable

**Framework:** Core AI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that can provide a read-only view of itself as an inference value.

## Declaration

```swift
protocol ViewRepresentable : ~Copyable
```

## Topics

### Creating a view

- [view()](viewrepresentable/view%28%29.md)

## Relationships

### Conforming Types

- [NDArray](../ndarray.md)

## See Also

### Adopting representable protocols

- [InferenceValue.MutableViewRepresentable](mutableviewrepresentable.md): A type that can provide a mutable view of itself as an inference value.

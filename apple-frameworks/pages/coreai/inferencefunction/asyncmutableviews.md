> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutableviews](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutableviews)

# InferenceFunction.AsyncMutableViews

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of mutable references to async states, used as the states argument to an inference function.

## Declaration

```swift
struct AsyncMutableViews
```

## Topics

### Creating a collection

- [init()](asyncmutableviews/init%28%29.md): Initialize an empty `AsyncMutableViews`.

### Adding values

- [insert(\_:for:)](asyncmutableviews/insert%28__for_%29.md): Insert the view to be used as the async mutable value for `name`.

## See Also

### Asynchronous inference

- [InferenceFunction.AsyncValue](asyncvalue.md): A future which will provide an inference value once any pending write is complete.
- [InferenceFunction.AsyncMutableValue](asyncmutablevalue.md): An async value which can be provided as a mutable argument to an inference function.

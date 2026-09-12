> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelactor](https://developer.apple.com/documentation/swiftdata/modelactor)

# ModelActor

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for providing mutually-exclusive access to the attributes of a conforming model.

## Declaration

```swift
protocol ModelActor : Actor
```

## Topics

### Accessing the container and context

- [modelContainer](modelactor/modelcontainer.md): The ModelContainer for the ModelActor The container that manages the app’s schema and model storage configuration
- [modelContext](modelactor/modelcontext.md): The context that serializes any code running on the model actor.

### Accessing the executors

- [modelExecutor](modelactor/modelexecutor.md): The executor that coordinates access to the model actor.
- [unownedExecutor](modelactor/unownedexecutor.md): The optimized, unonwned reference to the model actor’s executor.

### Accessing specific models

- [subscript(\_:as:)](modelactor/subscript%28__as_%29.md): Returns the model for the specified identifier, downcast to the appropriate class.

## Relationships

### Inherits From

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model actors

- [ModelActor()](modelactor%28%29.md): Converts a Swift actor into a model actor by generating boilerplate code that fulfills the requirements of the associated protocol.

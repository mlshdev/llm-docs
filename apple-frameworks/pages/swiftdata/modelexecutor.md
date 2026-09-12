> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelexecutor](https://developer.apple.com/documentation/swiftdata/modelexecutor)

# ModelExecutor

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for performing storage-related tasks using an isolated model context.

## Declaration

```swift
protocol ModelExecutor : Executor
```

## Topics

### Accessing the context

- [modelContext](modelexecutor/modelcontext.md)

## Relationships

### Inherits From

- [Executor](https://developer.apple.com/documentation/swift/executor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [SerialModelExecutor](serialmodelexecutor.md)

### Conforming Types

- [DefaultSerialModelExecutor](defaultserialmodelexecutor.md)

## See Also

### Model executors

- [DefaultSerialModelExecutor](defaultserialmodelexecutor.md): An object that safely performs storage-related tasks using an isolated model context.
- [SerialModelExecutor](serialmodelexecutor.md): An interface for performing serial storage-related tasks using an isolated model context.

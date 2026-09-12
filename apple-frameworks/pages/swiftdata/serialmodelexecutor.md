> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/serialmodelexecutor](https://developer.apple.com/documentation/swiftdata/serialmodelexecutor)

# SerialModelExecutor

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for performing serial storage-related tasks using an isolated model context.

## Declaration

```swift
protocol SerialModelExecutor : ModelExecutor, SerialExecutor
```

## Relationships

### Inherits From

- [Executor](https://developer.apple.com/documentation/swift/executor)
- [ModelExecutor](modelexecutor.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SerialExecutor](https://developer.apple.com/documentation/swift/serialexecutor)

### Conforming Types

- [DefaultSerialModelExecutor](defaultserialmodelexecutor.md)

## See Also

### Model executors

- [DefaultSerialModelExecutor](defaultserialmodelexecutor.md): An object that safely performs storage-related tasks using an isolated model context.
- [ModelExecutor](modelexecutor.md): An interface for performing storage-related tasks using an isolated model context.

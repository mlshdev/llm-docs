> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelactor/modelexecutor](https://developer.apple.com/documentation/swiftdata/modelactor/modelexecutor)

# modelExecutor

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The executor that coordinates access to the model actor.

## Declaration

```swift
nonisolated var modelExecutor: any ModelExecutor { get }
```

<a id="discussion"></a>

## Discussion

> **Important**

> Don’t use the executor to access the model context. Instead, use the [modelContext](modelcontext.md) property.

## See Also

### Accessing the executors

- [unownedExecutor](unownedexecutor.md): The optimized, unonwned reference to the model actor’s executor.

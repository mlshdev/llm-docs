> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unownedserialexecutor/init(complexequality:)](https://developer.apple.com/documentation/swift/unownedserialexecutor/init(complexequality:))

# init(complexEquality:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Opts the executor into complex “same exclusive execution context” equality checks.

## Declaration

```swift
init<E>(complexEquality executor: E) where E : SerialExecutor
```

<a id="discussion"></a>

## Discussion

This means what when asserting or assuming executors, and the current and expected executor are not the same instance (by object equality), the runtime may invoke `isSameExclusiveExecutionContext` in order to compare the executors for equality.

Implementing such complex equality can be useful if multiple executor instances actually use the same underlying serialization context and can be therefore safely treated as the same serial exclusive execution context (e.g. multiple dispatch queues targeting the same serial queue).

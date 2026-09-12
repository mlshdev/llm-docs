> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unownedserialexecutor/init(_:)-9jcxo](https://developer.apple.com/documentation/swift/unownedserialexecutor/init(_:)-9jcxo)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Automatically opt-in to complex equality semantics if the Executor implements `Equatable`.

## Declaration

```swift
init<E>(_ executor: E) where E : SerialExecutor
```

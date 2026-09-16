> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unownedserialexecutor/init(_:)-9jcxo

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Automatically opt-in to complex equality semantics if the Executor implements `Equatable`.

## Declaration

```swift
init<E>(_ executor: E) where E : SerialExecutor
```

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/tasklocal/withvalue(_:operation:isolation:file:line:)](https://developer.apple.com/documentation/swift/tasklocal/withvalue(_:operation:isolation:file:line:))

# withValue(\_:operation:isolation:file:line:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

> Prefer the 'nonisolated(nonsending)' overload with stricter execution on caller context semantics: withValue(\_:operation:file:line:)

## Declaration

```swift
@backDeployed(before: macOS 15.0, iOS 18.0, watchOS 11.0, tvOS 18.0, visionOS 2.0)
@discardableResult final func withValue<R>(_ valueDuringOperation: Value, operation: () async throws -> R, isolation: isolated (any Actor)? = #isolation, file: String = #fileID, line: UInt = #line) async rethrows -> R
```

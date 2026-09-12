> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/waitforall(isolation:)](https://developer.apple.com/documentation/swift/throwingtaskgroup/waitforall(isolation:))

# waitForAll(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

> Replaced by nonisolated(nonsending) overload

## Declaration

```swift
mutating func waitForAll(isolation: isolated (any Actor)? = #isolation) async throws
```

## See Also

### Deprecated

- [add(priority:operation:)](add%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [async(priority:operation:)](async%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [asyncUnlessCancelled(priority:operation:)](asyncunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [nextResult(isolation:)](nextresult%28isolation_%29.md): Deprecated.
- [spawn(priority:operation:)](spawn%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [spawnUnlessCancelled(priority:operation:)](spawnunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.

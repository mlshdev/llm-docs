> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/nextresult(isolation:)](https://developer.apple.com/documentation/swift/throwingtaskgroup/nextresult(isolation:))

# nextResult(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

> Replaced by nonisolated(nonsending) overload

## Declaration

```swift
mutating func nextResult(isolation: isolated (any Actor)? = #isolation) async -> Result<ChildTaskResult, Failure>?
```

## See Also

### Deprecated

- [add(priority:operation:)](add%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [async(priority:operation:)](async%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [asyncUnlessCancelled(priority:operation:)](asyncunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [spawn(priority:operation:)](spawn%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [spawnUnlessCancelled(priority:operation:)](spawnunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [waitForAll(isolation:)](waitforall%28isolation_%29.md): Deprecated.

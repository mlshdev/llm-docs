> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/spawnunlesscancelled(priority:operation:)](https://developer.apple.com/documentation/swift/throwingtaskgroup/spawnunlesscancelled(priority:operation:))

# spawnUnlessCancelled(priority:operation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
mutating func spawnUnlessCancelled(priority: TaskPriority? = nil, operation: @escaping @Sendable () async throws -> ChildTaskResult) -> Bool
```

## See Also

### Deprecated

- [add(priority:operation:)](add%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [async(priority:operation:)](async%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [asyncUnlessCancelled(priority:operation:)](asyncunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [nextResult(isolation:)](nextresult%28isolation_%29.md): Deprecated.
- [spawn(priority:operation:)](spawn%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [waitForAll(isolation:)](waitforall%28isolation_%29.md): Deprecated.

> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/throwingtaskgroup/spawn(priority:operation:)

# spawn(priority:operation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
mutating func spawn(priority: TaskPriority? = nil, operation: @escaping @Sendable () async throws -> ChildTaskResult)
```

## See Also

### Deprecated

- [add(priority:operation:)](add%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [async(priority:operation:)](async%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [asyncUnlessCancelled(priority:operation:)](asyncunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [nextResult(isolation:)](nextresult%28isolation_%29.md): Deprecated.
- [spawnUnlessCancelled(priority:operation:)](spawnunlesscancelled%28priority_operation_%29.md): Deprecated. Conforms when `ChildTaskResult` conforms to `Sendable` and `Failure` conforms to `Error`.
- [waitForAll(isolation:)](waitforall%28isolation_%29.md): Deprecated.

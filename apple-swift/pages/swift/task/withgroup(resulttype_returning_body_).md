> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/withgroup(resulttype:returning:body:)](https://developer.apple.com/documentation/swift/task/withgroup(resulttype:returning:body:))

# withGroup(resultType:returning:body:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

> \`Task.withGroup\` was replaced by \`withThrowingTaskGroup\` and \`withTaskGroup\` and will be removed shortly.

## Declaration

```swift
static func withGroup<TaskResult, BodyResult>(resultType: TaskResult.Type, returning returnType: BodyResult.Type = BodyResult.self, body: (inout Task<Success, Failure>.Group<TaskResult>) async throws -> BodyResult) async rethrows -> BodyResult where TaskResult : Sendable
```

## See Also

### Deprecated

- [Task.Group](group.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Handle](handle.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Priority](priority.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [CancellationError()](cancellationerror%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [getResult()](getresult%28%29.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [get()](get%28%29-4i2gt.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [get()](get%28%29-4ohks.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`.
- [sleep(\_:)](sleep%28__%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [suspend()](suspend%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [runDetached(priority:operation:)](rundetached%28priority_operation_%29-88zf5.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Deprecated, available only for source compatibility reasons.
- [runDetached(priority:operation:)](rundetached%28priority_operation_%29-8s8lh.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Deprecated, available only for source compatibility reasons.
- [withCancellationHandler(handler:operation:)](withcancellationhandler%28handler_operation_%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [withTaskCancellationHandler(handler:operation:)](../withtaskcancellationhandler%28handler_operation_%29.md): Deprecated.

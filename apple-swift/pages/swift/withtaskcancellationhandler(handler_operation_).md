> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withtaskcancellationhandler(handler:operation:)](https://developer.apple.com/documentation/swift/withtaskcancellationhandler(handler:operation:))

# withTaskCancellationHandler(handler:operation:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func withTaskCancellationHandler<T>(handler: @Sendable () -> Void, operation: () async throws -> T) async rethrows -> T
```

## See Also

### Deprecated

- [Task.Group](task/group.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Handle](task/handle.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Priority](task/priority.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [CancellationError()](task/cancellationerror%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [getResult()](task/getresult%28%29.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [get()](task/get%28%29-4i2gt.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [get()](task/get%28%29-4ohks.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`.
- [sleep(\_:)](task/sleep%28__%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [suspend()](task/suspend%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [runDetached(priority:operation:)](task/rundetached%28priority_operation_%29-88zf5.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Deprecated, available only for source compatibility reasons.
- [runDetached(priority:operation:)](task/rundetached%28priority_operation_%29-8s8lh.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Deprecated, available only for source compatibility reasons.
- [withCancellationHandler(handler:operation:)](task/withcancellationhandler%28handler_operation_%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [withGroup(resultType:returning:body:)](task/withgroup%28resulttype_returning_body_%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.

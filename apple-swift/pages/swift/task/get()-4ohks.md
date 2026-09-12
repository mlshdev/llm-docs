> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/get()-4ohks](https://developer.apple.com/documentation/swift/task/get()-4ohks)

# get()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

> get() has been replaced by .value

## Declaration

```swift
func get() async -> Success
```

## See Also

### Deprecated

- [Task.Group](group.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Handle](handle.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [Task.Priority](priority.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [CancellationError()](cancellationerror%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [getResult()](getresult%28%29.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [get()](get%28%29-4i2gt.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`.
- [sleep(\_:)](sleep%28__%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [suspend()](suspend%28%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [runDetached(priority:operation:)](rundetached%28priority_operation_%29-88zf5.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `any Error`. Deprecated, available only for source compatibility reasons.
- [runDetached(priority:operation:)](rundetached%28priority_operation_%29-8s8lh.md): Deprecated. Conforms when `Success` conforms to `Sendable` and `Failure` is `Never`. Deprecated, available only for source compatibility reasons.
- [withCancellationHandler(handler:operation:)](withcancellationhandler%28handler_operation_%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [withGroup(resultType:returning:body:)](withgroup%28resulttype_returning_body_%29.md): Deprecated. Conforms when `Success` is `Never` and `Failure` is `Never`.
- [withTaskCancellationHandler(handler:operation:)](../withtaskcancellationhandler%28handler_operation_%29.md): Deprecated.

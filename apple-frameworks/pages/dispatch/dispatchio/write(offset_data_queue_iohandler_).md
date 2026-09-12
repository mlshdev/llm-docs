> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/write(offset:data:queue:iohandler:)](https://developer.apple.com/documentation/dispatch/dispatchio/write(offset:data:queue:iohandler:))

# write(offset:data:queue:ioHandler:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules an asynchronous write operation for the specified channel.

## Declaration

```swift
func write(offset: off_t, data: DispatchData, queue: DispatchQueue, ioHandler: @escaping (Bool, DispatchData?, Int32) -> Void)
```

## Parameters

- `offset`: For random-access channels, this parameter specifies the offset into the channel at which to write. The offset is specified relative to the initial file pointer of the channel’s file descriptor at the time the channel was created. For stream-based channels, this parameter is ignored and data is written to the current position.
- `data`: The data to write to the channel.
- `queue`: The dispatch queue on which to submit the `ioHandler` closure.
- `ioHandler`: The closure to use to report any progress. This block may be queued multiple times to process a given data request. Each time the block is queued, the `data` parameter passed to the handler contains the data that remains to be written. Your closure need not be reentrant. The system guarantees that only one instance of this closure is executed at any given time.

<a id="Discussion"></a>

## Discussion

This function writes the specified data and submits the `io_handler` block to the `queue` to report on the progress of the operation. If the `done` parameter of the handler is set to [false](https://developer.apple.com/documentation/swift/false), it means that only part of the data was written. If the `done` parameter is set to [true](https://developer.apple.com/documentation/swift/true), it means the write operation is complete and the handler is not submitted again. If the operation was successful, the handler’s `error` parameter is set to `0`. However, if an unrecoverable error occurs on the channel’s file descriptor, the `done` parameter is set to [true](https://developer.apple.com/documentation/swift/true) and an appropriate error value is reported in the handler’s `error` parameter.

## See Also

### Writing to the File

- [write(toFileDescriptor:data:runningHandlerOn:handler:)](write%28tofiledescriptor_data_runninghandleron_handler_%29.md): Schedules an asynchronous write operation to the specified file descriptor.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio](https://developer.apple.com/documentation/dispatch/dispatchio)

# DispatchIO

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages operations on a file descriptor using either stream-based or random-access semantics.

## Declaration

```swift
class DispatchIO
```

## Topics

### Creating a Dispatch I/O Object

- [init(type:fileDescriptor:queue:cleanupHandler:)](dispatchio/init%28type_filedescriptor_queue_cleanuphandler_%29.md): Creates a new I/O channel that accesses the specified file descriptor.
- [init(type:path:oflag:mode:queue:cleanupHandler:)](dispatchio/init%28type_path_oflag_mode_queue_cleanuphandler_%29-50rb0.md): Creates a new I/O channel that accesses the file at the specified path, potentially creating that file in the process.
- [init(type:io:queue:cleanupHandler:)](dispatchio/init%28type_io_queue_cleanuphandler_%29.md): Creates a new I/O channel from an existing I/O channel.
- [DispatchIO.StreamType](dispatchio/streamtype.md): The semantics for accessing the contents of a file descriptor.

### Reading from the File

- [read(offset:length:queue:ioHandler:)](dispatchio/read%28offset_length_queue_iohandler_%29.md): Schedules an asynchronous read operation on the specified channel.
- [read(fromFileDescriptor:maxLength:runningHandlerOn:handler:)](dispatchio/read%28fromfiledescriptor_maxlength_runninghandleron_handler_%29.md): Schedules an asynchronous read operation using the specified file descriptor.

### Writing to the File

- [write(offset:data:queue:ioHandler:)](dispatchio/write%28offset_data_queue_iohandler_%29.md): Schedules an asynchronous write operation for the specified channel.
- [write(toFileDescriptor:data:runningHandlerOn:handler:)](dispatchio/write%28tofiledescriptor_data_runninghandleron_handler_%29.md): Schedules an asynchronous write operation to the specified file descriptor.

### Closing the File

- [close(flags:)](dispatchio/close%28flags_%29.md): Closes the channel to new read and write operations.
- [DispatchIO.CloseFlags](dispatchio/closeflags.md): Additional flags to use when closing an I/O channel.

### Managing the File Descriptor

- [fileDescriptor](dispatchio/filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [setLimit(highWater:)](dispatchio/setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
- [setLimit(lowWater:)](dispatchio/setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [setInterval(interval:flags:)](dispatchio/setinterval%28interval_flags_%29.md): Sets the interval, in nanoseconds, at which to invoke the I/O handlers for the channel.
- [DispatchIO.IntervalFlags](dispatchio/intervalflags.md): The desired delivery behavior for interval events.

### Synchronizing File Operations

- [barrier(execute:)](dispatchio/barrier%28execute_%29.md): Schedules a barrier operation on the specified channel.

### Initializers

- [init(type:path:oflag:mode:queue:cleanupHandler:)](dispatchio/init%28type_path_oflag_mode_queue_cleanuphandler_%29-25rlb.md)

## Relationships

### Inherits From

- [DispatchObject](dispatchobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### System Event Monitoring

- [DispatchSource](dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchData](dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchDataIterator](dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.

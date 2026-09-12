> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_handler_t](https://developer.apple.com/documentation/dispatch/dispatch_io_handler_t)

# dispatch_io_handler_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A handler block used to process operations on a dispatch I/O channel.

## Declaration

```objectivec
typedef void (^)(_Bool, NSObject<OS_dispatch_data> *, int) dispatch_io_handler_t;
```

<a id="Discussion"></a>

## Discussion

The parameters of a dispatch I/O handler are as follows:

- `done` \- A flag indicating whether the operation is complete.
- `data` \- The data object to be handled. This object is retained by the system for the duration of the handler’s execution and is released when the handler block returns.
- `error` \- The error number (if any) reported for the operation. An error number of `0` typically indicates the operation was successful.

## See Also

### Reading from the File

- [dispatch_read](dispatch_read.md): Schedules an asynchronous read operation using the specified file descriptor.
- [dispatch_io_read](dispatch_io_read.md): Schedules an asynchronous read operation on the specified channel.

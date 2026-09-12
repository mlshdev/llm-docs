> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makefilesystemobjectsource(filedescriptor:eventmask:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makefilesystemobjectsource(filedescriptor:eventmask:queue:))

# makeFileSystemObjectSource(fileDescriptor:eventMask:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object for monitoring file-system events.

## Declaration

```swift
class func makeFileSystemObjectSource(fileDescriptor: Int32, eventMask: DispatchSource.FileSystemEvent, queue: DispatchQueue? = nil) -> any DispatchSourceFileSystemObject
```

## Parameters

- `fileDescriptor`: A file descriptor pointing to an open file or socket.
- `eventMask`: The set of events you want to monitor. For a list of possible values, see [DispatchSource.FileSystemEvent](filesystemevent.md).
- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceFileSystemObject](../dispatchsourcefilesystemobject.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a File System Source

- [makeReadSource(fileDescriptor:queue:)](makereadsource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for reading bytes from the specified file.
- [makeWriteSource(fileDescriptor:queue:)](makewritesource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for writing data to the specified file.
- [DispatchSourceRead](../dispatchsourceread.md): A dispatch source object for reading data from a file descriptor.
- [DispatchSourceWrite](../dispatchsourcewrite.md): A dispatch source object for writing data to a file descriptor.
- [DispatchSourceFileSystemObject](../dispatchsourcefilesystemobject.md): A dispatch source that monitors events associated with a file descriptor.
- [DispatchSource.FileSystemEvent](filesystemevent.md): Events involving a change to a file system object.

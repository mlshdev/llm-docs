> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makereadsource(filedescriptor:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makereadsource(filedescriptor:queue:))

# makeReadSource(fileDescriptor:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object for reading bytes from the specified file.

## Declaration

```swift
class func makeReadSource(fileDescriptor: Int32, queue: DispatchQueue? = nil) -> any DispatchSourceRead
```

## Parameters

- `fileDescriptor`: A file descriptor pointing to an open file or socket. The dispatch source begins reading at the file descriptor’s current location.
- `queue`: The dispatch queue to which to execute the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceRead](../dispatchsourceread.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

As the system reads the contents of the file or socket, it calls your event handler to process the bytes.

## See Also

### Creating a File System Source

- [makeWriteSource(fileDescriptor:queue:)](makewritesource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for writing data to the specified file.
- [makeFileSystemObjectSource(fileDescriptor:eventMask:queue:)](makefilesystemobjectsource%28filedescriptor_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring file-system events.
- [DispatchSourceRead](../dispatchsourceread.md): A dispatch source object for reading data from a file descriptor.
- [DispatchSourceWrite](../dispatchsourcewrite.md): A dispatch source object for writing data to a file descriptor.
- [DispatchSourceFileSystemObject](../dispatchsourcefilesystemobject.md): A dispatch source that monitors events associated with a file descriptor.
- [DispatchSource.FileSystemEvent](filesystemevent.md): Events involving a change to a file system object.

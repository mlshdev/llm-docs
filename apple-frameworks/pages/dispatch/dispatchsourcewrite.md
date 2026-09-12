> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourcewrite](https://developer.apple.com/documentation/dispatch/dispatchsourcewrite)

# DispatchSourceWrite

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source object for writing data to a file descriptor.

## Declaration

```swift
protocol DispatchSourceWrite : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeWriteSource(fileDescriptor:queue:)](dispatchsource/makewritesource%28filedescriptor_queue_%29.md) method to create an object that adopts this protocol.

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a File System Source

- [makeReadSource(fileDescriptor:queue:)](dispatchsource/makereadsource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for reading bytes from the specified file.
- [makeWriteSource(fileDescriptor:queue:)](dispatchsource/makewritesource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for writing data to the specified file.
- [makeFileSystemObjectSource(fileDescriptor:eventMask:queue:)](dispatchsource/makefilesystemobjectsource%28filedescriptor_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring file-system events.
- [DispatchSourceRead](dispatchsourceread.md): A dispatch source object for reading data from a file descriptor.
- [DispatchSourceFileSystemObject](dispatchsourcefilesystemobject.md): A dispatch source that monitors events associated with a file descriptor.
- [DispatchSource.FileSystemEvent](dispatchsource/filesystemevent.md): Events involving a change to a file system object.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/filesystemevent](https://developer.apple.com/documentation/dispatch/dispatchsource/filesystemevent)

# DispatchSource.FileSystemEvent

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Events involving a change to a file system object.

## Declaration

```swift
struct FileSystemEvent
```

## Topics

### File System Event Flags

- [all](filesystemevent/all.md): All changes related to the file system object.
- [attrib](filesystemevent/attrib.md): Changes to the metadata of the file system object.
- [delete](filesystemevent/delete.md): The deletion of the file system object.
- [extend](filesystemevent/extend.md): Changes to the size of the file system object.
- [funlock](filesystemevent/funlock.md): The unlocking of the file system object.
- [link](filesystemevent/link.md): Changes to the link count of the file system object.
- [rename](filesystemevent/rename.md): Changes to the name of the file system object.
- [revoke](filesystemevent/revoke.md): The revocation of the file system object.
- [write](filesystemevent/write.md): The writing of data to the file system object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a File System Source

- [makeReadSource(fileDescriptor:queue:)](makereadsource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for reading bytes from the specified file.
- [makeWriteSource(fileDescriptor:queue:)](makewritesource%28filedescriptor_queue_%29.md): Creates a new dispatch source object for writing data to the specified file.
- [makeFileSystemObjectSource(fileDescriptor:eventMask:queue:)](makefilesystemobjectsource%28filedescriptor_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring file-system events.
- [DispatchSourceRead](../dispatchsourceread.md): A dispatch source object for reading data from a file descriptor.
- [DispatchSourceWrite](../dispatchsourcewrite.md): A dispatch source object for writing data to a file descriptor.
- [DispatchSourceFileSystemObject](../dispatchsourcefilesystemobject.md): A dispatch source that monitors events associated with a file descriptor.

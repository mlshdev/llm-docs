> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/connectionacceptedmessage/filehandleitem](https://developer.apple.com/documentation/foundation/filehandle/connectionacceptedmessage/filehandleitem)

# fileHandleItem

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A result instance that contains either the file handle representing the “near” end of a socket connection, or an error.

## Declaration

```swift
var fileHandleItem: Result<FileHandle, POSIXError>
```

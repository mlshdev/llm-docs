> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/connectionacceptedmessage/init(filehandleitem:)](https://developer.apple.com/documentation/foundation/filehandle/connectionacceptedmessage/init(filehandleitem:))

# init(fileHandleItem:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a message for a file handle connection acceptance.

## Declaration

```swift
init(fileHandleItem: Result<FileHandle, POSIXError>)
```

## Parameters

- `fileHandleItem`: A result instance containing either the file handle representing the “near” end of a socket connection, or an error.

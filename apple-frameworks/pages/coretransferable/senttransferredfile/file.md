> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/senttransferredfile/file](https://developer.apple.com/documentation/coretransferable/senttransferredfile/file)

# file

**Framework:** Core Transferable  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A URL that describes the location of the file.

## Declaration

```swift
let file: URL
```

## See Also

### Configuring a file transfer

- [init(\_:allowAccessingOriginalFile:)](init%28__allowaccessingoriginalfile_%29.md): Creates a description of a file from the perspective of the sender.
- [allowAccessingOriginalFile](allowaccessingoriginalfile.md): A Boolean value that indicates whether the receiver can read and write the original file. When set to `false`, the receiver can only gain access to a copy of the file.

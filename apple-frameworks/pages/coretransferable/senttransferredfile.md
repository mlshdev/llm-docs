> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/senttransferredfile

# SentTransferredFile

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A description of a file from the perspective of the sender.

## Declaration

```swift
struct SentTransferredFile
```

## Topics

### Configuring a file transfer

- [init(\_:allowAccessingOriginalFile:)](senttransferredfile/init%28__allowaccessingoriginalfile_%29.md): Creates a description of a file from the perspective of the sender.
- [file](senttransferredfile/file.md): A URL that describes the location of the file.
- [allowAccessingOriginalFile](senttransferredfile/allowaccessingoriginalfile.md): A Boolean value that indicates whether the receiver can read and write the original file. When set to `false`, the receiver can only gain access to a copy of the file.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### File transfer

- [FileRepresentation](filerepresentation.md): A transfer representation for types that transfer as a file URL.
- [ReceivedTransferredFile](receivedtransferredfile.md): A description of a file from the perspective of the receiver.

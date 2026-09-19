> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/receivedtransferredfile

# ReceivedTransferredFile

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A description of a file from the perspective of the receiver.

## Declaration

```swift
struct ReceivedTransferredFile
```

## Topics

### Configuring a file transfer

- [file](receivedtransferredfile/file.md): The received file on disk.
- [isOriginalFile](receivedtransferredfile/isoriginalfile.md): A Boolean value that indicates whether the file’s URL points to the original file provided by the sender or to a copy.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### File transfer

- [FileRepresentation](filerepresentation.md): A transfer representation for types that transfer as a file URL.
- [SentTransferredFile](senttransferredfile.md): A description of a file from the perspective of the sender.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/filerepresentation/init(contenttype:shouldattempttoopeninplace:exporting:importing:)](https://developer.apple.com/documentation/coretransferable/filerepresentation/init(contenttype:shouldattempttoopeninplace:exporting:importing:))

# init(contentType:shouldAttemptToOpenInPlace:exporting:importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation for importing and exporting transferable items as files.

## Declaration

```swift
init(contentType: UTType, shouldAttemptToOpenInPlace: Bool = false, exporting: @escaping @Sendable (Item) async throws -> SentTransferredFile, importing: @escaping @Sendable (ReceivedTransferredFile) async throws -> Item)
```

## Parameters

- `contentType`: A uniform type identifier that best describes the item.
- `shouldAttemptToOpenInPlace`: A Boolean value that indicates whether the receiver gains access to the original item on disk and can edit it, or to a copy made by the system.
- `exporting`: A closure that provides a file representation of the given item.
- `importing`: A closure that instantiates the item with given file promise. The file referred to by the [file](../receivedtransferredfile/file.md) property of the [ReceivedTransferredFile](../receivedtransferredfile.md) instance is only guaranteed to exist within the `importing` closure. If you need the file to be around for a longer period, make a copy in the `importing` closure.

## See Also

### Creating a transfer representation

- [init(importedContentType:shouldAttemptToOpenInPlace:importing:)](init%28importedcontenttype_shouldattempttoopeninplace_importing_%29.md): Creates a transfer representation for importing transferable items as files.
- [init(exportedContentType:shouldAllowToOpenInPlace:exporting:)](init%28exportedcontenttype_shouldallowtoopeninplace_exporting_%29.md): Creates a transfer representation for exporting transferable items as files.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/filerepresentation/init(importedcontenttype:shouldattempttoopeninplace:importing:)](https://developer.apple.com/documentation/coretransferable/filerepresentation/init(importedcontenttype:shouldattempttoopeninplace:importing:))

# init(importedContentType:shouldAttemptToOpenInPlace:importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation for importing transferable items as files.

## Declaration

```swift
init(importedContentType: UTType, shouldAttemptToOpenInPlace: Bool = false, importing: @escaping @Sendable (ReceivedTransferredFile) async throws -> Item)
```

## Parameters

- `importedContentType`: A uniform type identifier for the file promise, returned by the `exporting` closure.
- `shouldAttemptToOpenInPlace`: A Boolean value that indicates whether the receiver wants to gain access to the original item on disk and can edit it. If `false`, the receiver only has access to a copy of the file made by the system.
- `importing`: A closure that creates the item with given file promise. The file referred to by the `file` property of the `ReceivedTransferredFile` is only guaranteed to exist within the `importing` closure. If you need the file to be around for a longer period, make a copy in the `importing` closure.

## See Also

### Creating a transfer representation

- [init(contentType:shouldAttemptToOpenInPlace:exporting:importing:)](init%28contenttype_shouldattempttoopeninplace_exporting_importing_%29.md): Creates a transfer representation for importing and exporting transferable items as files.
- [init(exportedContentType:shouldAllowToOpenInPlace:exporting:)](init%28exportedcontenttype_shouldallowtoopeninplace_exporting_%29.md): Creates a transfer representation for exporting transferable items as files.

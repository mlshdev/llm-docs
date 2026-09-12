> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/filerepresentation/init(exportedcontenttype:shouldallowtoopeninplace:exporting:)](https://developer.apple.com/documentation/coretransferable/filerepresentation/init(exportedcontenttype:shouldallowtoopeninplace:exporting:))

# init(exportedContentType:shouldAllowToOpenInPlace:exporting:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation for exporting transferable items as files.

## Declaration

```swift
init(exportedContentType: UTType, shouldAllowToOpenInPlace: Bool = false, exporting: @escaping @Sendable (Item) async throws -> SentTransferredFile)
```

## Parameters

- `exportedContentType`: A uniform type identifier for the file `URL`, returned by the `exporting` closure.
- `shouldAllowToOpenInPlace`: A Boolean value that indicates whether the receiver can try to gain access to the original item on disk and can edit it. If `false`, the receiver only has access to a copy of the file made by the system.
- `exporting`: A closure that provides a file representation of the given item.

## See Also

### Creating a transfer representation

- [init(contentType:shouldAttemptToOpenInPlace:exporting:importing:)](init%28contenttype_shouldattempttoopeninplace_exporting_importing_%29.md): Creates a transfer representation for importing and exporting transferable items as files.
- [init(importedContentType:shouldAttemptToOpenInPlace:importing:)](init%28importedcontenttype_shouldattempttoopeninplace_importing_%29.md): Creates a transfer representation for importing transferable items as files.

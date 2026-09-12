> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/datarepresentation/init(importedcontenttype:importing:)](https://developer.apple.com/documentation/coretransferable/datarepresentation/init(importedcontenttype:importing:))

# init(importedContentType:importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a representation that allows importing an item as binary data.

## Declaration

```swift
init(importedContentType: UTType, importing: @escaping @Sendable (Data) async throws -> Item)
```

## Parameters

- `importedContentType`: A uniform type identifier that best describes the item.
- `importing`: A closure that instantiates the item with given binary data

## See Also

### Creating a transfer representation

- [init(contentType:exporting:importing:)](init%28contenttype_exporting_importing_%29.md): Creates a representation that allows transporting an item as binary data.
- [init(exportedContentType:exporting:)](init%28exportedcontenttype_exporting_%29.md): Creates a representation that allows exporting an item as binary data.

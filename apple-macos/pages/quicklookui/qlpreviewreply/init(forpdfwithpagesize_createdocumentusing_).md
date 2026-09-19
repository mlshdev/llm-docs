> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewreply/init(forpdfwithpagesize:createdocumentusing:)

# init(forPDFWithPageSize:createDocumentUsing:)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
convenience init(forPDFWithPageSize defaultPageSize: CGSize, createDocumentUsing closure: @escaping (QLPreviewReply) throws -> PDFDocument)
```

> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewreply/init(dataofcontenttype:contentsize:createdatausing:)

# init(dataOfContentType:contentSize:createDataUsing:)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
convenience init(dataOfContentType contentType: UTType, contentSize: CGSize, createDataUsing closure: @escaping (QLPreviewReply) throws -> Data)
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewreply/init(dataofcontenttype:contentsize:createdatausing:)

# init(dataOfContentType:contentSize:createDataUsing:)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(dataOfContentType contentType: UTType, contentSize: CGSize, createDataUsing closure: @escaping (QLPreviewReply) throws -> Data)
```

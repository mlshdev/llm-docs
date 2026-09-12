> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewreply/init(dataofcontenttype:contentsize:createdatausing:)](https://developer.apple.com/documentation/quicklook/qlpreviewreply/init(dataofcontenttype:contentsize:createdatausing:))

# init(dataOfContentType:contentSize:createDataUsing:)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(dataOfContentType contentType: UTType, contentSize: CGSize, createDataUsing closure: @escaping (QLPreviewReply) throws -> Data)
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewreply/init(contextsize:isbitmap:drawusing:)

# init(contextSize:isBitmap:drawUsing:)

**Framework:** Quick Look  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(contextSize: CGSize, isBitmap: Bool, drawUsing closure: @escaping (CGContext, QLPreviewReply) throws -> Void)
```

> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewreply/init(contextsize:isbitmap:drawusing:)

# init(contextSize:isBitmap:drawUsing:)

**Framework:** Quick Look UI  
**Kind:** Initializer  
**Availability:** macOS 12.0+

## Declaration

```swift
convenience init(contextSize: CGSize, isBitmap: Bool, drawUsing closure: @escaping (CGContext, QLPreviewReply) throws -> Void)
```

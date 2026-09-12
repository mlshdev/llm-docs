> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:cachetextattachmentviewprovider:for:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:cachetextattachmentviewprovider:for:))

# textLayoutManager(\_:cacheTextAttachmentViewProvider:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, cacheTextAttachmentViewProvider viewProvider: NSTextAttachmentViewProvider, for textAttachment: NSTextAttachment)
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `viewProvider`: The view provider being invalidated.
- `textAttachment`: The attachment associated with the view provider.

<a id="discussion"></a>

## Discussion

The delegate can use this to cache the view provider.

## See Also

### Reusing text attachment view providers

- [textLayoutManager(\_:retrieveCachedTextAttachmentViewProviderFor:)](textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

# textLayoutManager:cacheTextAttachmentViewProvider:forTextAttachment: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.

## Declaration

```objectivec
- (void) textLayoutManager:(NSTextLayoutManager *) textLayoutManager cacheTextAttachmentViewProvider:(NSTextAttachmentViewProvider *) viewProvider forTextAttachment:(NSTextAttachment *) textAttachment;
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `viewProvider`: The view provider being invalidated.
- `textAttachment`: The attachment associated with the view provider.

<a id="discussion"></a>

## Discussion

The delegate can use this to cache the view provider.

## See Also

### Reusing text attachment view providers

- [textLayoutManager:retrieveCachedTextAttachmentViewProviderForTextAttachment:](textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

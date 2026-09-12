> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:cachetextattachmentviewprovider:for:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:cachetextattachmentviewprovider:for:))

# textLayoutManager(\_:cacheTextAttachmentViewProvider:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

# textLayoutManager:cacheTextAttachmentViewProvider:forTextAttachment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

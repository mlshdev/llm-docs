> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:retrievecachedtextattachmentviewproviderfor:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:retrievecachedtextattachmentviewproviderfor:))

# textLayoutManager(\_:retrieveCachedTextAttachmentViewProviderFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, retrieveCachedTextAttachmentViewProviderFor attachment: NSTextAttachment) -> NSTextAttachmentViewProvider?
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `attachment`: The attachment to retrieve a cached view provider for.

<a id="return-value"></a>

## Return Value

A previously cached view provider, or `nil`.

## See Also

### Reusing text attachment view providers

- [textLayoutManager(\_:cacheTextAttachmentViewProvider:for:)](textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.

# textLayoutManager:retrieveCachedTextAttachmentViewProviderForTextAttachment: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Declaration

```objectivec
- (NSTextAttachmentViewProvider *) textLayoutManager:(NSTextLayoutManager *) textLayoutManager retrieveCachedTextAttachmentViewProviderForTextAttachment:(NSTextAttachment *) attachment;
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `attachment`: The attachment to retrieve a cached view provider for.

<a id="return-value"></a>

## Return Value

A previously cached view provider, or `nil`.

## See Also

### Reusing text attachment view providers

- [textLayoutManager:cacheTextAttachmentViewProvider:forTextAttachment:](textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.

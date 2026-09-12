> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:retrievecachedtextattachmentviewproviderfor:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:retrievecachedtextattachmentviewproviderfor:))

# textLayoutManager(\_:retrieveCachedTextAttachmentViewProviderFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

# textLayoutManager:retrieveCachedTextAttachmentViewProviderForTextAttachment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

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

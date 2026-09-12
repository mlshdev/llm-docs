> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider/init(textattachment:parentview:textlayoutmanager:location:)](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider/init(textattachment:parentview:textlayoutmanager:location:))

# init(textAttachment:parentView:textLayoutManager:location:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new text attachment view whose content starts at the location you provide.

## Declaration

```swift
init(textAttachment: NSTextAttachment, parentView: NSView?, textLayoutManager: NSTextLayoutManager?, location: any NSTextLocation)
```

## Parameters

- `textAttachment`: The [NSTextAttachment](../nstextattachment.md) for this view.
- `parentView`: The parent view of this attachment.
- `textLayoutManager`: The [NSTextLayoutManager](../nstextlayoutmanager.md) for this view.
- `location`: The [NSTextLocation](../nstextlocation.md) that identifies the start of the text.

# initWithTextAttachment:parentView:textLayoutManager:location: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new text attachment view whose content starts at the location you provide.

## Declaration

```objectivec
- (instancetype) initWithTextAttachment:(NSTextAttachment *) textAttachment parentView:(NSView *) parentView textLayoutManager:(NSTextLayoutManager *) textLayoutManager location:(id<NSTextLocation>) location;
```

## Parameters

- `textAttachment`: The [NSTextAttachment](../nstextattachment.md) for this view.
- `parentView`: The parent view of this attachment.
- `textLayoutManager`: The [NSTextLayoutManager](../nstextlayoutmanager.md) for this view.
- `location`: The [NSTextLocation](../nstextlocation.md) that identifies the start of the text.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextattachmentviewprovider/init(textattachment:parentview:textlayoutmanager:location:)

# init(textAttachment:parentView:textLayoutManager:location:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new text attachment view whose content starts at the location you provide.

## Declaration

```swift
init(textAttachment: NSTextAttachment, parentView: UIView?, textLayoutManager: NSTextLayoutManager?, location: any NSTextLocation)
```

## Parameters

- `textAttachment`: The [NSTextAttachment](../nstextattachment.md) for this view.
- `parentView`: The parent view of this attachment.
- `textLayoutManager`: The [NSTextLayoutManager](../nstextlayoutmanager.md) for this view.
- `location`: The [NSTextLocation](../nstextlocation.md) that identifies the start of the text.

# initWithTextAttachment:parentView:textLayoutManager:location: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new text attachment view whose content starts at the location you provide.

## Declaration

```objectivec
- (instancetype) initWithTextAttachment:(NSTextAttachment *) textAttachment parentView:(UIView *) parentView textLayoutManager:(NSTextLayoutManager *) textLayoutManager location:(id<NSTextLocation>) location;
```

## Parameters

- `textAttachment`: The [NSTextAttachment](../nstextattachment.md) for this view.
- `parentView`: The parent view of this attachment.
- `textLayoutManager`: The [NSTextLayoutManager](../nstextlayoutmanager.md) for this view.
- `location`: The [NSTextLocation](../nstextlocation.md) that identifies the start of the text.

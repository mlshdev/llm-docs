> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider/textlayoutmanager](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider/textlayoutmanager)

# textLayoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The text layout manager for this view.

## Declaration

```swift
weak var textLayoutManager: NSTextLayoutManager? { get }
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [init(textAttachment:parentView:textLayoutManager:location:)](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [location](location.md): The location that indicates the start of the text attachment.
- [textAttachment](textattachment.md): The text attachment for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.

# textLayoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The text layout manager for this view.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextLayoutManager * textLayoutManager;
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [initWithTextAttachment:parentView:textLayoutManager:location:](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [location](location.md): The location that indicates the start of the text attachment.
- [textAttachment](textattachment.md): The text attachment for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.

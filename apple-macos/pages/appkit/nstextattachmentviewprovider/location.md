> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider/location](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider/location)

# location (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The location that indicates the start of the text attachment.

## Declaration

```swift
var location: any NSTextLocation { get }
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [init(textAttachment:parentView:textLayoutManager:location:)](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.

# location (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The location that indicates the start of the text attachment.

## Declaration

```objectivec
@property (strong, readonly) id<NSTextLocation> location;
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [initWithTextAttachment:parentView:textLayoutManager:location:](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.

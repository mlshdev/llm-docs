> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewprovider/trackstextattachmentviewbounds](https://developer.apple.com/documentation/appkit/nstextattachmentviewprovider/trackstextattachmentviewbounds)

# tracksTextAttachmentViewBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines the text attachment’s bounds policy.

## Declaration

```swift
var tracksTextAttachmentViewBounds: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true`, the framework calls the `textAttachment` property’s [attachmentBounds(for:location:textContainer:proposedLineFragment:position:)](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md) method and examines the text attachment view provider to determine the bounds instead of using the `bounds` property of this instance. Defaults to `false`.

## See Also

### Defining the contents

- [location](location.md): The location that indicates the start of the text attachment.
- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [view](view.md): The text attachment’s view.

# tracksTextAttachmentViewBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines the text attachment’s bounds policy.

## Declaration

```objectivec
@property BOOL tracksTextAttachmentViewBounds;
```

<a id="Discussion"></a>

## Discussion

If `true`, the framework calls the `textAttachment` property’s [attachmentBoundsForAttributes:location:textContainer:proposedLineFragment:position:](attachmentbounds%28for_location_textcontainer_proposedlinefragment_position_%29.md) method and examines the text attachment view provider to determine the bounds instead of using the `bounds` property of this instance. Defaults to `false`.

## See Also

### Defining the contents

- [location](location.md): The location that indicates the start of the text attachment.
- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [view](view.md): The text attachment’s view.

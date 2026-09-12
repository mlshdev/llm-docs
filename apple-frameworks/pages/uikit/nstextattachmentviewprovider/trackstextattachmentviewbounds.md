> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentviewprovider/trackstextattachmentviewbounds](https://developer.apple.com/documentation/uikit/nstextattachmentviewprovider/trackstextattachmentviewbounds)

# tracksTextAttachmentViewBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

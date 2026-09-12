> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/allowstextattachmentview](https://developer.apple.com/documentation/appkit/nstextattachment/allowstextattachmentview)

# allowsTextAttachmentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the text attachment uses text attachment views.

## Declaration

```swift
var allowsTextAttachmentView: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When `true`, the text attachment tries to use a text attachment view returned by [viewProvider(for:location:textContainer:)](../nstextattachmentlayout/viewprovider%28for_location_textcontainer_%29.md). Default is `true`.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

# allowsTextAttachmentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the text attachment uses text attachment views.

## Declaration

```objectivec
@property BOOL allowsTextAttachmentView;
```

<a id="Discussion"></a>

## Discussion

When `true`, the text attachment tries to use a text attachment view returned by [viewProviderForParentView:location:textContainer:](../nstextattachmentlayout/viewprovider%28for_location_textcontainer_%29.md). Default is `true`.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

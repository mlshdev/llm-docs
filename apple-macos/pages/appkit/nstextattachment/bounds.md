> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/bounds](https://developer.apple.com/documentation/appkit/nstextattachment/bounds)

# bounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The layout bounds of the text attachment’s graphical representation in the text coordinate system.

## Declaration

```swift
var bounds: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

The bounds rectangle origin is at the current glyph location on the text baseline. The default value is [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero).

## See Also

### Defining the attachment’s contents

- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

# bounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The layout bounds of the text attachment’s graphical representation in the text coordinate system.

## Declaration

```objectivec
@property CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

The bounds rectangle origin is at the current glyph location on the text baseline. The default value is [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero).

## See Also

### Defining the attachment’s contents

- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

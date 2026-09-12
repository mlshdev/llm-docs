> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/image](https://developer.apple.com/documentation/appkit/nstextattachment/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An instance of the relevant image class that represents the contents of the text attachment object.

## Declaration

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

For details about using the [UIImage](https://developer.apple.com/documentation/uikit/uiimage) class to create text attachments that automatically adjust to surrounding font and color attributes, see the [init(image:)](https://developer.apple.com/documentation/uikit/nstextattachment/init%28image:%29) initializer.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An instance of the relevant image class that represents the contents of the text attachment object.

## Declaration

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

For details about using the [UIImage](https://developer.apple.com/documentation/uikit/uiimage) class to create text attachments that automatically adjust to surrounding font and color attributes, see the [textAttachmentWithImage:](https://developer.apple.com/documentation/uikit/nstextattachment/init%28image:%29) initializer.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

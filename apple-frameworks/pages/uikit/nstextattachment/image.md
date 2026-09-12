> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/image](https://developer.apple.com/documentation/uikit/nstextattachment/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An instance of the relevant image class that represents the contents of the text attachment object.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

For details about using the [UIImage](../uiimage.md) class to create text attachments that automatically adjust to surrounding font and color attributes, see the [init(image:)](init%28image_%29.md) initializer.

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An instance of the relevant image class that represents the contents of the text attachment object.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

For details about using the [UIImage](../uiimage.md) class to create text attachments that automatically adjust to surrounding font and color attributes, see the [textAttachmentWithImage:](init%28image_%29.md) initializer.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

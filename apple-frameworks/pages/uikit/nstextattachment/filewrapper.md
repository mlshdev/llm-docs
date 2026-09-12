> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/filewrapper](https://developer.apple.com/documentation/uikit/nstextattachment/filewrapper)

# fileWrapper (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The text attachment’s file wrapper.

## Declaration

```swift
var fileWrapper: FileWrapper? { get set }
```

<a id="Discussion"></a>

## Discussion

The file wrapper holds the contents of the attached file. In iOS, modifying this property has a side effect of invalidating the [image](image.md), [contents](contents.md), and [fileType](filetype.md) properties.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

# fileWrapper (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The text attachment’s file wrapper.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSFileWrapper * fileWrapper;
```

<a id="Discussion"></a>

## Discussion

The file wrapper holds the contents of the attached file. In iOS, modifying this property has a side effect of invalidating the [image](image.md), [contents](contents.md), and [fileType](filetype.md) properties.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

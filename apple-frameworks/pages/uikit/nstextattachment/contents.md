> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/contents](https://developer.apple.com/documentation/uikit/nstextattachment/contents)

# contents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents for the text attachment.

## Declaration

```swift
var contents: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

Modifying this property has the side effect of invalidating the [image](image.md) property.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

# contents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents for the text attachment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * contents;
```

<a id="Discussion"></a>

## Discussion

Modifying this property has the side effect of invalidating the [image](image.md) property.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.
- [lineLayoutPadding](linelayoutpadding.md): The layout padding before and after the text attachment bounds.

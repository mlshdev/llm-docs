> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/linelayoutpadding](https://developer.apple.com/documentation/uikit/nstextattachment/linelayoutpadding)

# lineLayoutPadding (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The layout padding before and after the text attachment bounds.

## Declaration

```swift
var lineLayoutPadding: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The layout and rendering bounds X origin is inset by the padding value. This affects the relationship between the text attachment bounds and `NSLayoutManager` glyph metrics methods [location(forGlyphAt:)](../nslayoutmanager/location%28forglyphat_%29.md) and [attachmentSize(forGlyphAt:)](../nslayoutmanager/attachmentsize%28forglyphat_%29.md). The default value is `0.0`.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.

# lineLayoutPadding (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The layout padding before and after the text attachment bounds.

## Declaration

```objectivec
@property CGFloat lineLayoutPadding;
```

<a id="Discussion"></a>

## Discussion

The layout and rendering bounds X origin is inset by the padding value. This affects the relationship between the text attachment bounds and `NSLayoutManager` glyph metrics methods [locationForGlyphAtIndex:](../nslayoutmanager/location%28forglyphat_%29.md) and [attachmentSizeForGlyphAtIndex:](../nslayoutmanager/attachmentsize%28forglyphat_%29.md). The default value is `0.0`.

## See Also

### Defining the attachment’s contents

- [bounds](bounds.md): The layout bounds of the text attachment’s graphical representation in the text coordinate system.
- [contents](contents.md): The contents for the text attachment.
- [fileType](filetype.md): The file type of the contents for the text attachment.
- [image](image.md): An instance of the relevant image class that represents the contents of the text attachment object.
- [fileWrapper](filewrapper.md): The text attachment’s file wrapper.
- [allowsTextAttachmentView](allowstextattachmentview.md): A Boolean value that determines whether the text attachment uses text attachment views.
- [usesTextAttachmentView](usestextattachmentview.md): A Boolean value that indicates whether the text attachment uses text attachment views.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcontainer/image(forbounds:textcontainer:characterindex:)](https://developer.apple.com/documentation/appkit/nstextattachmentcontainer/image(forbounds:textcontainer:characterindex:))

# image(forBounds:textContainer:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the image object that the layout manager renders in the specified image bounds rectangle inside the text container.

## Declaration

```swift
func image(forBounds imageBounds: CGRect, textContainer: NSTextContainer?, characterIndex charIndex: Int) -> NSImage?
```

## Parameters

- `imageBounds`: The rectangle in which the image is laid out.
- `textContainer`: The text container in which the image is laid out.
- `charIndex`: The character location inside the text storage for the attachment character.

<a id="return-value"></a>

## Return Value

The image rendered in the bounds rectangle.

<a id="Discussion"></a>

## Discussion

The method should return an image appropriate for the target rendering context derived by arguments passed into this method. The `NSTextAttachment` implementation returns the text attachment’s [image](../nstextattachment/image.md) when non-`nil`. If the image is `nil`, it returns an image based on the text attachment’s [contents](../nstextattachment/contents.md) and [fileType](../nstextattachment/filetype.md) properties.

# imageForBounds:textContainer:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the image object that the layout manager renders in the specified image bounds rectangle inside the text container.

## Declaration

```objectivec
- (NSImage *) imageForBounds:(CGRect) imageBounds textContainer:(NSTextContainer *) textContainer characterIndex:(NSUInteger) charIndex;
```

## Parameters

- `imageBounds`: The rectangle in which the image is laid out.
- `textContainer`: The text container in which the image is laid out.
- `charIndex`: The character location inside the text storage for the attachment character.

<a id="return-value"></a>

## Return Value

The image rendered in the bounds rectangle.

<a id="Discussion"></a>

## Discussion

The method should return an image appropriate for the target rendering context derived by arguments passed into this method. The `NSTextAttachment` implementation returns the text attachment’s [image](../nstextattachment/image.md) when non-`nil`. If the image is `nil`, it returns an image based on the text attachment’s [contents](../nstextattachment/contents.md) and [fileType](../nstextattachment/filetype.md) properties.

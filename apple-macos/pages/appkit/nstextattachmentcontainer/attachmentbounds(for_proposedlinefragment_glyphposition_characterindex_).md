> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcontainer/attachmentbounds(for:proposedlinefragment:glyphposition:characterindex:)](https://developer.apple.com/documentation/appkit/nstextattachmentcontainer/attachmentbounds(for:proposedlinefragment:glyphposition:characterindex:))

# attachmentBounds(for:proposedLineFragment:glyphPosition:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout bounds of the text attachment to the layout manager.

## Declaration

```swift
func attachmentBounds(for textContainer: NSTextContainer?, proposedLineFragment lineFrag: CGRect, glyphPosition position: CGPoint, characterIndex charIndex: Int) -> CGRect
```

## Parameters

- `textContainer`: The text container for the text being laid out.
- `lineFrag`: The line fragment containing the text attachment.
- `position`: The glyph location inside `lineFrag` which is the origin of the returned bounds rectangle.
- `charIndex`: The character location inside the text storage for the attachment character.

<a id="return-value"></a>

## Return Value

The [bounds](../nstextattachment/bounds.md) rectangle of the text attachment if not [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero); otherwise, the rectangle of the [size](https://developer.apple.com/documentation/uikit/uiimage/size) property of the attachment’s [image](../nstextattachment/image.md) property.

<a id="Discussion"></a>

## Discussion

Conforming objects can implement more sophisticated logic for negotiating the attachment bounds based on the available container space and proposed line fragment rectangle.

# attachmentBoundsForTextContainer:proposedLineFragment:glyphPosition:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the layout bounds of the text attachment to the layout manager.

## Declaration

```objectivec
- (CGRect) attachmentBoundsForTextContainer:(NSTextContainer *) textContainer proposedLineFragment:(CGRect) lineFrag glyphPosition:(CGPoint) position characterIndex:(NSUInteger) charIndex;
```

## Parameters

- `textContainer`: The text container for the text being laid out.
- `lineFrag`: The line fragment containing the text attachment.
- `position`: The glyph location inside `lineFrag` which is the origin of the returned bounds rectangle.
- `charIndex`: The character location inside the text storage for the attachment character.

<a id="return-value"></a>

## Return Value

The [bounds](../nstextattachment/bounds.md) rectangle of the text attachment if not [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero); otherwise, the rectangle of the [size](https://developer.apple.com/documentation/uikit/uiimage/size) property of the attachment’s [image](../nstextattachment/image.md) property.

<a id="Discussion"></a>

## Discussion

Conforming objects can implement more sophisticated logic for negotiating the attachment bounds based on the available container space and proposed line fragment rectangle.

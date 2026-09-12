> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentcontainer/attachmentbounds(for:proposedlinefragment:glyphposition:characterindex:)](https://developer.apple.com/documentation/uikit/nstextattachmentcontainer/attachmentbounds(for:proposedlinefragment:glyphposition:characterindex:))

# attachmentBounds(for:proposedLineFragment:glyphPosition:characterIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

The [bounds](../nstextattachment/bounds.md) rectangle of the text attachment if not [CGRectZero](../../coregraphics/cgrectzero.md); otherwise, the rectangle of the [size](../uiimage/size.md) property of the attachment’s [image](../nstextattachment/image.md) property.

<a id="Discussion"></a>

## Discussion

Conforming objects can implement more sophisticated logic for negotiating the attachment bounds based on the available container space and proposed line fragment rectangle.

# attachmentBoundsForTextContainer:proposedLineFragment:glyphPosition:characterIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

The [bounds](../nstextattachment/bounds.md) rectangle of the text attachment if not [CGRectZero](../../coregraphics/cgrectzero.md); otherwise, the rectangle of the [size](../uiimage/size.md) property of the attachment’s [image](../nstextattachment/image.md) property.

<a id="Discussion"></a>

## Discussion

Conforming objects can implement more sophisticated logic for negotiating the attachment bounds based on the available container space and proposed line fragment rectangle.

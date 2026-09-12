> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/draw(in:withattributes:)](https://developer.apple.com/documentation/foundation/nsstring/draw(in:withattributes:))

# draw(in:withAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string inside the specified bounding rectangle.

## Declaration

```swift
func draw(in rect: CGRect, withAttributes attrs: [NSAttributedString.Key : Any]? = nil)
```

## Parameters

- `rect`: The bounding rectangle in which to draw the string. In AppKit, the origin of the bounding box is normally in the lower-left corner, but the origin is in the upper-left corner if the focused view is flipped.
- `attrs`: The text attributes with which to draw the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="Discussion"></a>

## Discussion

This method draws as much of the string as it can inside the specified rectangle, wrapping the string text as needed to make it fit. If the string is too long to fit inside the rectangle, the method renders as much as possible and clips the rest.

If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Sizing and Drawing Strings

- [draw(at:withAttributes:)](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [draw(with:options:attributes:context:)](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRect(with:options:attributes:context:)](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [size(withAttributes:)](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth(\_:)](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

# drawInRect:withAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the attributed string inside the specified bounding rectangle.

## Declaration

```objectivec
- (void) drawInRect:(CGRect) rect withAttributes:(NSDictionary<NSString *,id> *) attrs;
```

## Parameters

- `rect`: The bounding rectangle in which to draw the string. In AppKit, the origin of the bounding box is normally in the lower-left corner, but the origin is in the upper-left corner if the focused view is flipped.
- `attrs`: The text attributes with which to draw the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="Discussion"></a>

## Discussion

This method draws as much of the string as it can inside the specified rectangle, wrapping the string text as needed to make it fit. If the string is too long to fit inside the rectangle, the method renders as much as possible and clips the rest.

If newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Sizing and Drawing Strings

- [drawAtPoint:withAttributes:](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [drawWithRect:options:attributes:context:](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRectWithSize:options:attributes:context:](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [sizeWithAttributes:](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth:](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

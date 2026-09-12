> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/draw(at:withattributes:)](https://developer.apple.com/documentation/foundation/nsstring/draw(at:withattributes:))

# draw(at:withAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.

## Declaration

```swift
func draw(at point: CGPoint, withAttributes attrs: [NSAttributedString.Key : Any]? = nil)
```

## Parameters

- `point`: The point in the current graphics context where you want to start drawing the string. The coordinate system of the graphics context is usually defined by the view in which you are drawing. In AppKit, the origin is normally in the lower-left corner of the drawing area, but the origin is in the upper-left corner if the focused view is flipped.
- `attrs`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an [NSAttributedString](../nsattributedstring.md) object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="Discussion"></a>

## Discussion

The width (height for vertical layout) of the rendering area is unlimited, unlike [draw(in:withAttributes:)](draw%28in_withattributes_%29.md), which uses a bounding rectangle. As a result, this method renders the text in a single line. However, if newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Sizing and Drawing Strings

- [draw(in:withAttributes:)](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [draw(with:options:attributes:context:)](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRect(with:options:attributes:context:)](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [size(withAttributes:)](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth(\_:)](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

# drawAtPoint:withAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point withAttributes:(NSDictionary<NSString *,id> *) attrs;
```

## Parameters

- `point`: The point in the current graphics context where you want to start drawing the string. The coordinate system of the graphics context is usually defined by the view in which you are drawing. In AppKit, the origin is normally in the lower-left corner of the drawing area, but the origin is in the upper-left corner if the focused view is flipped.
- `attrs`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an [NSAttributedString](../nsattributedstring.md) object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="Discussion"></a>

## Discussion

The width (height for vertical layout) of the rendering area is unlimited, unlike [drawInRect:withAttributes:](draw%28in_withattributes_%29.md), which uses a bounding rectangle. As a result, this method renders the text in a single line. However, if newline characters are present in the string, those characters are honored and cause subsequent text to be placed on the next line underneath the starting point.

There must be either a focused view or an active graphics context when you call this method.

## See Also

### Sizing and Drawing Strings

- [drawInRect:withAttributes:](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [drawWithRect:options:attributes:context:](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRectWithSize:options:attributes:context:](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [sizeWithAttributes:](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth:](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

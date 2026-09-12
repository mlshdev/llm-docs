> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/boundingrect(with:options:attributes:context:)](https://developer.apple.com/documentation/foundation/nsstring/boundingrect(with:options:attributes:context:))

# boundingRect(with:options:attributes:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.

## Declaration

```swift
func boundingRect(with size: CGSize, options: NSStringDrawingOptions = [], attributes: [NSAttributedString.Key : Any]? = nil, context: NSStringDrawingContext?) -> CGRect
```

```swift
func boundingRect(with size: CGSize, options: NSString.DrawingOptions = [], attributes: [NSAttributedString.Key : Any]? = nil, context: NSStringDrawingContext?) -> CGRect
```

## Parameters

- `size`: The size of the rectangle to draw in.
- `options`: String drawing options.
- `attributes`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.
- `context`: The string drawing context to use for the receiver, specifying minimum scale factor and tracking adjustments.

<a id="return-value"></a>

## Return Value

The bounding rect for the receiver drawn using the given options and display characteristics. The rect origin returned from this method is the first glyph origin.

<a id="Discussion"></a>

## Discussion

To correctly draw and size multi-line text, pass [usesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in the options parameter.

This method returns fractional sizes (in the `size` component of the returned [CGRect](../../corefoundation/cgrect.md)); to use a returned size to size views, you must raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

This method returns the actual bounds of the glyphs in the string. Some of the glyphs (spaces, for example) are allowed to overlap the layout constraints specified by the size passed in, so in some cases the width value of the size component of the returned [CGRect](../../corefoundation/cgrect.md) can exceed the width value of the `size` parameter.

## See Also

### Sizing and Drawing Strings

- [draw(at:withAttributes:)](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [draw(in:withAttributes:)](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [draw(with:options:attributes:context:)](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [size(withAttributes:)](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth(\_:)](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

# boundingRectWithSize:options:attributes:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.

## Declaration

```objectivec
- (CGRect) boundingRectWithSize:(CGSize) size options:(NSStringDrawingOptions) options attributes:(NSDictionary<NSString *,id> *) attributes context:(NSStringDrawingContext *) context;
```

## Parameters

- `size`: The size of the rectangle to draw in.
- `options`: String drawing options.
- `attributes`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.
- `context`: The string drawing context to use for the receiver, specifying minimum scale factor and tracking adjustments.

<a id="return-value"></a>

## Return Value

The bounding rect for the receiver drawn using the given options and display characteristics. The rect origin returned from this method is the first glyph origin.

<a id="Discussion"></a>

## Discussion

To correctly draw and size multi-line text, pass [NSStringDrawingUsesLineFragmentOrigin](../../uikit/nsstringdrawingoptions/useslinefragmentorigin.md) in the options parameter.

This method returns fractional sizes (in the `size` component of the returned [CGRect](../../corefoundation/cgrect.md)); to use a returned size to size views, you must raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

This method returns the actual bounds of the glyphs in the string. Some of the glyphs (spaces, for example) are allowed to overlap the layout constraints specified by the size passed in, so in some cases the width value of the size component of the returned [CGRect](../../corefoundation/cgrect.md) can exceed the width value of the `size` parameter.

## See Also

### Sizing and Drawing Strings

- [drawAtPoint:withAttributes:](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [drawInRect:withAttributes:](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [drawWithRect:options:attributes:context:](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [sizeWithAttributes:](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.
- [variantFittingPresentationWidth:](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

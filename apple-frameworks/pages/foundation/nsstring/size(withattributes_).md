> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/size(withattributes:)](https://developer.apple.com/documentation/foundation/nsstring/size(withattributes:))

# size(withAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box size the receiver occupies when drawn with the given attributes.

## Declaration

```swift
func size(withAttributes attrs: [NSAttributedString.Key : Any]? = nil) -> CGSize
```

## Parameters

- `attrs`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="return-value"></a>

## Return Value

The bounding box size the receiver occupies when drawn with the specified attributes.

<a id="Discussion"></a>

## Discussion

This method returns fractional sizes; to use a returned size to size views, you must raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

## See Also

### Sizing and Drawing Strings

- [draw(at:withAttributes:)](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [draw(in:withAttributes:)](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [draw(with:options:attributes:context:)](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRect(with:options:attributes:context:)](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [variantFittingPresentationWidth(\_:)](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

# sizeWithAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the bounding box size the receiver occupies when drawn with the given attributes.

## Declaration

```objectivec
- (CGSize) sizeWithAttributes:(NSDictionary<NSString *,id> *) attrs;
```

## Parameters

- `attrs`: A dictionary of text attributes to be applied to the string. These are the same attributes that can be applied to an `NSAttributedString` object, but in the case of `NSString` objects, the attributes apply to the entire string, rather than ranges within the string.

<a id="return-value"></a>

## Return Value

The bounding box size the receiver occupies when drawn with the specified attributes.

<a id="Discussion"></a>

## Discussion

This method returns fractional sizes; to use a returned size to size views, you must raise its value to the nearest higher integer using the [ceil](https://developer.apple.com/documentation/kernel/1557272-ceil) function.

## See Also

### Sizing and Drawing Strings

- [drawAtPoint:withAttributes:](draw%28at_withattributes_%29.md): Draws the receiver with the font and other display characteristics of the given attributes, at the specified point in the current graphics context.
- [drawInRect:withAttributes:](draw%28in_withattributes_%29.md): Draws the attributed string inside the specified bounding rectangle.
- [drawWithRect:options:attributes:context:](draw%28with_options_attributes_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.
- [boundingRectWithSize:options:attributes:context:](boundingrect%28with_options_attributes_context_%29.md): Calculates and returns the bounding rect for the receiver drawn using the given options and display characteristics, within the specified rectangle in the current graphics context.
- [variantFittingPresentationWidth:](variantfittingpresentationwidth%28__%29.md): Returns a string variation suitable for the specified presentation width.
- [NSStringDrawingOptions](../../uikit/nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/borderrect(forbounds:)](https://developer.apple.com/documentation/uikit/uitextfield/borderrect(forbounds:))

# borderRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text field’s border rectangle.

## Declaration

```swift
func borderRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The border rectangle for the receiver.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to provide a different border rectangle for drawing, you can override this method and return that rectangle.

The default implementation of this method returns the original `bounds` rectangle.

## See Also

### Drawing and positioning overrides

- [textRect(forBounds:)](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawText(in:)](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRect(forBounds:)](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [drawPlaceholder(in:)](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [editingRect(forBounds:)](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRect(forBounds:)](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

# borderRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text field’s border rectangle.

## Declaration

```objectivec
- (CGRect) borderRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The border rectangle for the receiver.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to provide a different border rectangle for drawing, you can override this method and return that rectangle.

The default implementation of this method returns the original `bounds` rectangle.

## See Also

### Drawing and positioning overrides

- [textRectForBounds:](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawTextInRect:](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRectForBounds:](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [drawPlaceholderInRect:](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [editingRectForBounds:](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRectForBounds:](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/textrect(forbounds:)](https://developer.apple.com/documentation/uikit/uitextfield/textrect(forbounds:))

# textRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the text field’s text.

## Declaration

```swift
func textRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the label’s text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing rectangle for the text, you can override this method and return a different rectangle.

The default implementation of this method returns a rectangle that is derived from the control’s original bounds, but which does not include the area occupied by the receiver’s border or overlay views.

## See Also

### Drawing and positioning overrides

- [drawText(in:)](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRect(forBounds:)](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [drawPlaceholder(in:)](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [borderRect(forBounds:)](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRect(forBounds:)](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRect(forBounds:)](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

# textRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the text field’s text.

## Declaration

```objectivec
- (CGRect) textRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the label’s text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing rectangle for the text, you can override this method and return a different rectangle.

The default implementation of this method returns a rectangle that is derived from the control’s original bounds, but which does not include the area occupied by the receiver’s border or overlay views.

## See Also

### Drawing and positioning overrides

- [drawTextInRect:](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRectForBounds:](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [drawPlaceholderInRect:](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [borderRectForBounds:](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRectForBounds:](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRectForBounds:](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

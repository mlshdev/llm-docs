> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/placeholderrect(forbounds:)](https://developer.apple.com/documentation/uikit/uitextfield/placeholderrect(forbounds:))

# placeholderRect(forBounds:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the text field’s placeholder text.

## Declaration

```swift
func placeholderRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the placeholder text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing rectangle for the placeholder text, you can override this method and return a different rectangle.

If the placeholder string is empty or `nil`, this method is not called.

## See Also

### Drawing and positioning overrides

- [textRect(forBounds:)](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawText(in:)](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [drawPlaceholder(in:)](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [borderRect(forBounds:)](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRect(forBounds:)](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRect(forBounds:)](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

# placeholderRectForBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing rectangle for the text field’s placeholder text.

## Declaration

```objectivec
- (CGRect) placeholderRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the placeholder text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing rectangle for the placeholder text, you can override this method and return a different rectangle.

If the placeholder string is empty or `nil`, this method is not called.

## See Also

### Drawing and positioning overrides

- [textRectForBounds:](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawTextInRect:](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [drawPlaceholderInRect:](drawplaceholder%28in_%29.md): Draws the text field’s placeholder text in the specified rectangle.
- [borderRectForBounds:](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRectForBounds:](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRectForBounds:](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

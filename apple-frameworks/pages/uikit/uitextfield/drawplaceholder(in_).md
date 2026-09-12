> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/drawplaceholder(in:)](https://developer.apple.com/documentation/uikit/uitextfield/drawplaceholder(in:))

# drawPlaceholder(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws the text field’s placeholder text in the specified rectangle.

## Declaration

```swift
func drawPlaceholder(in rect: CGRect)
```

## Parameters

- `rect`: The rectangle in which to draw the placeholder text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing behavior for the placeholder text, you can override this method to do your drawing.

By the time this method is called, the current graphics context is already configured with the default environment and text color for drawing. In your overridden method, you can configure the current context further and then invoke `super` to do the actual drawing or do the drawing yourself. If you do render the text yourself, you should not invoke `super`.

## See Also

### Drawing and positioning overrides

- [textRect(forBounds:)](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawText(in:)](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRect(forBounds:)](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [borderRect(forBounds:)](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRect(forBounds:)](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRect(forBounds:)](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRect(forBounds:)](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRect(forBounds:)](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

# drawPlaceholderInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws the text field’s placeholder text in the specified rectangle.

## Declaration

```objectivec
- (void) drawPlaceholderInRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle in which to draw the placeholder text.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. If you want to customize the drawing behavior for the placeholder text, you can override this method to do your drawing.

By the time this method is called, the current graphics context is already configured with the default environment and text color for drawing. In your overridden method, you can configure the current context further and then invoke `super` to do the actual drawing or do the drawing yourself. If you do render the text yourself, you should not invoke `super`.

## See Also

### Drawing and positioning overrides

- [textRectForBounds:](textrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s text.
- [drawTextInRect:](drawtext%28in_%29.md): Deprecated. Draws the text field’s text in the specified rectangle.
- [placeholderRectForBounds:](placeholderrect%28forbounds_%29.md): Returns the drawing rectangle for the text field’s placeholder text.
- [borderRectForBounds:](borderrect%28forbounds_%29.md): Returns the text field’s border rectangle.
- [editingRectForBounds:](editingrect%28forbounds_%29.md): Returns the rectangle for displaying editable text.
- [clearButtonRectForBounds:](clearbuttonrect%28forbounds_%29.md): Returns the drawing rectangle for the built-in Clear button.
- [leftViewRectForBounds:](leftviewrect%28forbounds_%29.md): Returns the drawing rectangle of the text field’s left overlay view.
- [rightViewRectForBounds:](rightviewrect%28forbounds_%29.md): Returns the drawing location of the text field’s right overlay view.

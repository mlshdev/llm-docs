> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/drawtext(in:)](https://developer.apple.com/documentation/uikit/uilabel/drawtext(in:))

# drawText(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws the label’s text, or its shadow, in the specified rectangle.

## Declaration

```swift
func drawText(in rect: CGRect)
```

## Parameters

- `rect`: The rectangle in which to draw the text.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. Override this method if you want to modify the default drawing behavior for the label’s text.

By the time the system calls this method, the current graphics context is already configured with the default environment and text color for drawing. In your overridden method, you can configure the current context further and then invoke `super` to do the actual drawing, or you can do the drawing yourself. If you do render the text yourself, don’t invoke `super`.

## See Also

### Drawing and positioning overrides

- [textRect(forBounds:limitedToNumberOfLines:)](textrect%28forbounds_limitedtonumberoflines_%29.md): Returns the drawing rectangle for the label’s text.

# drawTextInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Draws the label’s text, or its shadow, in the specified rectangle.

## Declaration

```objectivec
- (void) drawTextInRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle in which to draw the text.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. Override this method if you want to modify the default drawing behavior for the label’s text.

By the time the system calls this method, the current graphics context is already configured with the default environment and text color for drawing. In your overridden method, you can configure the current context further and then invoke `super` to do the actual drawing, or you can do the drawing yourself. If you do render the text yourself, don’t invoke `super`.

## See Also

### Drawing and positioning overrides

- [textRectForBounds:limitedToNumberOfLines:](textrect%28forbounds_limitedtonumberoflines_%29.md): Returns the drawing rectangle for the label’s text.

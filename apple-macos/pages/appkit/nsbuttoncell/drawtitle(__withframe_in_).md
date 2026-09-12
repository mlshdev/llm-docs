> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/drawtitle(_:withframe:in:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/drawtitle(_:withframe:in:))

# drawTitle(\_:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the button’s title centered vertically in a specified rectangle.

## Declaration

```swift
func drawTitle(_ title: NSAttributedString, withFrame frame: NSRect, in controlView: NSView) -> NSRect
```

## Parameters

- `title`: The title of the button.
- `frame`: The rectangle in which to draw the title.
- `controlView`: The control being drawn.

<a id="return-value"></a>

## Return Value

The bounding rectangle for the text of the title.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

## See Also

### Related Documentation

- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.

### Drawing the Button Content

- [drawBezel(withFrame:in:)](drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawImage(\_:withFrame:in:)](drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.

# drawTitle:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the button’s title centered vertically in a specified rectangle.

## Declaration

```objectivec
- (NSRect) drawTitle:(NSAttributedString *) title withFrame:(NSRect) frame inView:(NSView *) controlView;
```

## Parameters

- `title`: The title of the button.
- `frame`: The rectangle in which to draw the title.
- `controlView`: The control being drawn.

<a id="return-value"></a>

## Return Value

The bounding rectangle for the text of the title.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

## See Also

### Related Documentation

- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.

### Drawing the Button Content

- [drawBezelWithFrame:inView:](drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawImage:withFrame:inView:](drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.

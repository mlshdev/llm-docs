> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/drawbezel(withframe:in:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/drawbezel(withframe:in:))

# drawBezel(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the border of the button using the current bezel style.

## Declaration

```swift
func drawBezel(withFrame frame: NSRect, in controlView: NSView)
```

## Parameters

- `frame`: The bounding rectangle of the button.
- `controlView`: The control being drawn.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

## See Also

### Related Documentation

- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.

### Drawing the Button Content

- [drawImage(\_:withFrame:in:)](drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.
- [drawTitle(\_:withFrame:in:)](drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

# drawBezelWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the border of the button using the current bezel style.

## Declaration

```objectivec
- (void) drawBezelWithFrame:(NSRect) frame inView:(NSView *) controlView;
```

## Parameters

- `frame`: The bounding rectangle of the button.
- `controlView`: The control being drawn.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

## See Also

### Related Documentation

- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.

### Drawing the Button Content

- [drawImage:withFrame:inView:](drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.
- [drawTitle:withFrame:inView:](drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

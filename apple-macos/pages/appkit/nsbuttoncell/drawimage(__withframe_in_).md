> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/drawimage(_:withframe:in:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/drawimage(_:withframe:in:))

# drawImage(\_:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image associated with the button’s current state.

## Declaration

```swift
func drawImage(_ image: NSImage, withFrame frame: NSRect, in controlView: NSView)
```

## Parameters

- `image`: The image associated with the button’s current state.
- `frame`: The bounding rectangle of the button.
- `controlView`: The control being drawn.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

You specify the primary and alternate images for the button using Interface Builder.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The image the button displays in its alternate state.

### Drawing the Button Content

- [drawBezel(withFrame:in:)](drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawTitle(\_:withFrame:in:)](drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

# drawImage:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the image associated with the button’s current state.

## Declaration

```objectivec
- (void) drawImage:(NSImage *) image withFrame:(NSRect) frame inView:(NSView *) controlView;
```

## Parameters

- `image`: The image associated with the button’s current state.
- `frame`: The bounding rectangle of the button.
- `controlView`: The control being drawn.

<a id="Discussion"></a>

## Discussion

This method is called automatically when the button is redrawn; you should not call it directly.

You specify the primary and alternate images for the button using Interface Builder.

## See Also

### Related Documentation

- [alternateImage](alternateimage.md): The image the button displays in its alternate state.

### Drawing the Button Content

- [drawBezelWithFrame:inView:](drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawTitle:withFrame:inView:](drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

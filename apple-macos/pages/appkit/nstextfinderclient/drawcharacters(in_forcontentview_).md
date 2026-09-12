> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/drawcharacters(in:forcontentview:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/drawcharacters(in:forcontentview:))

# drawCharacters(in:forContentView:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draw the glyphs for the requested character range as they are drawn in the given content view.

## Declaration

```swift
optional func drawCharacters(in range: NSRange, forContentView view: NSView)
```

## Parameters

- `range`: The character range.
- `view`: The content view.

<a id="Discussion"></a>

## Discussion

If the character range partially intersects a glyph range, then the full glyph is drawn to avoid additional layout.

The given range is guaranteed to be completely contained by the given view. When this method is called, a drawing context effectively identical to the one provided to the view’s [draw(\_:)](../nsview/draw%28__%29.md) method is configured. This method is mainly used to draw find indicator contents, so implementations should check -the view property [isDrawingFindIndicator](../nsview/isdrawingfindindicator.md) to ensure that the text will be easily readable against the background of the find indicator when it returns [true](https://developer.apple.com/documentation/swift/true). If this method is not implemented, then the find indicator will be drawn using the content view’s [draw(\_:)](../nsview/draw%28__%29.md) method instead.

# drawCharactersInRange:forContentView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draw the glyphs for the requested character range as they are drawn in the given content view.

## Declaration

```objectivec
- (void) drawCharactersInRange:(NSRange) range forContentView:(NSView *) view;
```

## Parameters

- `range`: The character range.
- `view`: The content view.

<a id="Discussion"></a>

## Discussion

If the character range partially intersects a glyph range, then the full glyph is drawn to avoid additional layout.

The given range is guaranteed to be completely contained by the given view. When this method is called, a drawing context effectively identical to the one provided to the view’s [drawRect:](../nsview/draw%28__%29.md) method is configured. This method is mainly used to draw find indicator contents, so implementations should check -the view property [drawingFindIndicator](../nsview/isdrawingfindindicator.md) to ensure that the text will be easily readable against the background of the find indicator when it returns [true](https://developer.apple.com/documentation/swift/true). If this method is not implemented, then the find indicator will be drawn using the content view’s [drawRect:](../nsview/draw%28__%29.md) method instead.

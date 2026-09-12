> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/drawknob()](https://developer.apple.com/documentation/appkit/nsslidercell/drawknob())

# drawKnob() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.

## Declaration

```swift
func drawKnob()
```

<a id="Discussion"></a>

## Discussion

Before this message is sent, a `lockFocus` method must be sent to the cell’s control view.

You might call this method if you override one of the display methods belonging to `NSControl` or `NSCell`.

<a id="Special-Considerations"></a>

### Special Considerations

If you create a subclass of `NSSliderCell`, don’t override this method. Override [drawKnob(\_:)](drawknob%28__%29.md) instead.

## See Also

### Displaying the Cell

- [barRect(flipped:)](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks()](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRect(flipped:)](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBar(inside:flipped:)](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob(\_:)](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

# drawKnob (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.

## Declaration

```objectivec
- (void) drawKnob;
```

<a id="Discussion"></a>

## Discussion

Before this message is sent, a `lockFocus` method must be sent to the cell’s control view.

You might call this method if you override one of the display methods belonging to `NSControl` or `NSCell`.

<a id="Special-Considerations"></a>

### Special Considerations

If you create a subclass of `NSSliderCell`, don’t override this method. Override [drawKnob:](drawknob%28__%29.md) instead.

## See Also

### Displaying the Cell

- [barRectFlipped:](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRectFlipped:](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBarInside:flipped:](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob:](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

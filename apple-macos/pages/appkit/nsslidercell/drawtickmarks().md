> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/drawtickmarks()](https://developer.apple.com/documentation/appkit/nsslidercell/drawtickmarks())

# drawTickMarks() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Draws the slider’s tick marks.

## Declaration

```swift
func drawTickMarks()
```

<a id="Discussion"></a>

## Discussion

You should not call this method explicitly. It’s included so you can override it in a subclass and draw custom tick marks.

## See Also

### Displaying the Cell

- [barRect(flipped:)](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [knobRect(flipped:)](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBar(inside:flipped:)](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob()](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob(\_:)](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

# drawTickMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Draws the slider’s tick marks.

## Declaration

```objectivec
- (void) drawTickMarks;
```

<a id="Discussion"></a>

## Discussion

You should not call this method explicitly. It’s included so you can override it in a subclass and draw custom tick marks.

## See Also

### Displaying the Cell

- [barRectFlipped:](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [knobRectFlipped:](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBarInside:flipped:](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob:](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

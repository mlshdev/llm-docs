> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/drawknob(_:)](https://developer.apple.com/documentation/appkit/nsslidercell/drawknob(_:))

# drawKnob(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the slider knob in the given rectangle.

## Declaration

```swift
func drawKnob(_ knobRect: NSRect)
```

## Parameters

- `knobRect`: The rectangle in which to draw the slider knob.

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

Before this message is sent, a [lockFocus()](../nsview/lockfocus%28%29.md) message must be sent to the cell’s control view.

You should not call this method explicitly. It’s included so you can override it in a subclass.

## See Also

### Displaying the Cell

- [barRect(flipped:)](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks()](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRect(flipped:)](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBar(inside:flipped:)](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob()](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.

# drawKnob: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the slider knob in the given rectangle.

## Declaration

```objectivec
- (void) drawKnob:(NSRect) knobRect;
```

## Parameters

- `knobRect`: The rectangle in which to draw the slider knob.

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

Before this message is sent, a [lockFocus](../nsview/lockfocus%28%29.md) message must be sent to the cell’s control view.

You should not call this method explicitly. It’s included so you can override it in a subclass.

## See Also

### Displaying the Cell

- [barRectFlipped:](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRectFlipped:](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBarInside:flipped:](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.

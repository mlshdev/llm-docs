> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/drawbar(inside:flipped:)](https://developer.apple.com/documentation/appkit/nsslidercell/drawbar(inside:flipped:))

# drawBar(inside:flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.

## Declaration

```swift
func drawBar(inside rect: NSRect, flipped: Bool)
```

## Parameters

- `rect`: The bounds of the slider’s bar, not of its interior rectangle.
- `flipped`: A Boolean value that indicates whether the cell’s control view—that is, the `NSSlider` or `NSMatrix` associated with the `NSSliderCell`—has a flipped coordinate system.

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

You should not call this method explicitly. It’s included so you can override it in a subclass.

## See Also

### Displaying the Cell

- [barRect(flipped:)](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks()](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRect(flipped:)](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawKnob()](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob(\_:)](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

# drawBarInside:flipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.

## Declaration

```objectivec
- (void) drawBarInside:(NSRect) rect flipped:(BOOL) flipped;
```

## Parameters

- `rect`: The bounds of the slider’s bar, not of its interior rectangle.
- `flipped`: A Boolean value that indicates whether the cell’s control view—that is, the `NSSlider` or `NSMatrix` associated with the `NSSliderCell`—has a flipped coordinate system.

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](../updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="Discussion"></a>

## Discussion

You should not call this method explicitly. It’s included so you can override it in a subclass.

## See Also

### Displaying the Cell

- [barRectFlipped:](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRectFlipped:](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawKnob](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob:](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/barrect(flipped:)](https://developer.apple.com/documentation/appkit/nsslidercell/barrect(flipped:))

# barRect(flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the rectangle in which the bar is drawn.

## Declaration

```swift
func barRect(flipped: Bool) -> NSRect
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the coordinate system of the associated `NSSlider` or `NSMatrix` is flipped; otherwise [false](https://developer.apple.com/documentation/swift/false). You can determine whether this is the case by sending the `NSView` message [isFlipped](../nsview/isflipped.md) message to the `NSMatrix` or `NSSlider`.

<a id="return-value"></a>

## Return Value

The rectangle in which the bar is drawn, specified in the coordinate system of the `NSSlider` or `NSMatrix` with which the receiver is associated. The bar doesn’t include the slider’s bezel or knob.

<a id="Discussion"></a>

## Discussion

You can override this method if custom bar artwork requires specific dimensions.

## See Also

### Displaying the Cell

- [drawTickMarks()](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRect(flipped:)](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBar(inside:flipped:)](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob()](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob(\_:)](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

# barRectFlipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the rectangle in which the bar is drawn.

## Declaration

```objectivec
- (NSRect) barRectFlipped:(BOOL) flipped;
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the coordinate system of the associated `NSSlider` or `NSMatrix` is flipped; otherwise [false](https://developer.apple.com/documentation/swift/false). You can determine whether this is the case by sending the `NSView` message [flipped](../nsview/isflipped.md) message to the `NSMatrix` or `NSSlider`.

<a id="return-value"></a>

## Return Value

The rectangle in which the bar is drawn, specified in the coordinate system of the `NSSlider` or `NSMatrix` with which the receiver is associated. The bar doesn’t include the slider’s bezel or knob.

<a id="Discussion"></a>

## Discussion

You can override this method if custom bar artwork requires specific dimensions.

## See Also

### Displaying the Cell

- [drawTickMarks](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRectFlipped:](knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBarInside:flipped:](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob:](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

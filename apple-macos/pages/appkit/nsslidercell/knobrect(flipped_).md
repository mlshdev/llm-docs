> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/knobrect(flipped:)](https://developer.apple.com/documentation/appkit/nsslidercell/knobrect(flipped:))

# knobRect(flipped:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the slider knob is drawn.

## Declaration

```swift
func knobRect(flipped: Bool) -> NSRect
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the coordinate system of the associated `NSSlider` or `NSMatrix` is flipped; otherwise [false](https://developer.apple.com/documentation/swift/false). You can determine whether this is the case by sending the `NSView` message [isFlipped](../nsview/isflipped.md) message to the `NSMatrix` or `NSSlider`.

<a id="return-value"></a>

## Return Value

The rectangle in which the knob is drawn, specified in the coordinate system of the `NSSlider` or `NSMatrix` with which the receiver is associated.

<a id="discussion"></a>

## Discussion

The knob rectangle depends on where in the slider the knob belongs—that is, it depends on the receiver’s minimum and maximum values and on the value the position of the knob will represent.

## See Also

### Displaying the Cell

- [barRect(flipped:)](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks()](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [drawBar(inside:flipped:)](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob()](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob(\_:)](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

# knobRectFlipped: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle in which the slider knob is drawn.

## Declaration

```objectivec
- (NSRect) knobRectFlipped:(BOOL) flipped;
```

## Parameters

- `flipped`: [true](https://developer.apple.com/documentation/swift/true) if the coordinate system of the associated `NSSlider` or `NSMatrix` is flipped; otherwise [false](https://developer.apple.com/documentation/swift/false). You can determine whether this is the case by sending the `NSView` message [flipped](../nsview/isflipped.md) message to the `NSMatrix` or `NSSlider`.

<a id="return-value"></a>

## Return Value

The rectangle in which the knob is drawn, specified in the coordinate system of the `NSSlider` or `NSMatrix` with which the receiver is associated.

<a id="discussion"></a>

## Discussion

The knob rectangle depends on where in the slider the knob belongs—that is, it depends on the receiver’s minimum and maximum values and on the value the position of the knob will represent.

## See Also

### Displaying the Cell

- [barRectFlipped:](barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks](drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [drawBarInside:flipped:](drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob](drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](drawknob%28__%29.md) to actually draw the knob.
- [drawKnob:](drawknob%28__%29.md): Draws the slider knob in the given rectangle.

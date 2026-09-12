> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/allowstickmarkvaluesonly](https://developer.apple.com/documentation/appkit/nsslider/allowstickmarkvaluesonly)

# allowsTickMarkValuesOnly (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.

## Declaration

```swift
var allowsTickMarkValuesOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the slider fixes its values to the values represented by its tick marks; otherwise it’s [false](https://developer.apple.com/documentation/swift/false). For example, if a slider has a minimum value of `0`, a maximum value of `100`, and five markers, the allowable values are `0`, `25`, `50`, `75`, and `100`. When users move the slider’s knob, it jumps to the tick mark nearest the cursor when the mouse button is released. This method has no effect if the slider has no tick marks. In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSSlider.TickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

# allowsTickMarkValuesOnly (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.

## Declaration

```objectivec
@property BOOL allowsTickMarkValuesOnly;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the slider fixes its values to the values represented by its tick marks; otherwise it’s [false](https://developer.apple.com/documentation/swift/false). For example, if a slider has a minimum value of `0`, a maximum value of `100`, and five markers, the allowable values are `0`, `25`, `50`, `75`, and `100`. When users move the slider’s knob, it jumps to the tick mark nearest the cursor when the mouse button is released. This method has no effect if the slider has no tick marks. In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSTickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/tickmarkposition-swift.property](https://developer.apple.com/documentation/appkit/nsslider/tickmarkposition-swift.property)

# tickMarkPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Determines where the slider’s tick marks are displayed.

## Declaration

```swift
var tickMarkPosition: NSSlider.TickMarkPosition { get set }
```

<a id="Discussion"></a>

## Discussion

For horizontal sliders, use [NSSlider.TickMarkPosition.below](tickmarkposition-swift.enum/below.md) and [NSSlider.TickMarkPosition.above](tickmarkposition-swift.enum/above.md). For vertical sliders, use [leading](tickmarkposition-swift.enum/leading.md), and [trailing](tickmarkposition-swift.enum/trailing.md). The default positions are `below` for horizontal and `leading` for vertical. This property has no effect if [numberOfTickMarks](numberoftickmarks.md) is `0`, or if the slider is circular. In its implementation of this property, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [NSSlider.TickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

# tickMarkPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Determines where the slider’s tick marks are displayed.

## Declaration

```objectivec
@property NSTickMarkPosition tickMarkPosition;
```

<a id="Discussion"></a>

## Discussion

For horizontal sliders, use [NSTickMarkPositionBelow](tickmarkposition-swift.enum/below.md) and [NSTickMarkPositionAbove](tickmarkposition-swift.enum/above.md). For vertical sliders, use [NSTickMarkPositionLeading](tickmarkposition-swift.enum/leading.md), and [NSTickMarkPositionTrailing](tickmarkposition-swift.enum/trailing.md). The default positions are `below` for horizontal and `leading` for vertical. This property has no effect if [numberOfTickMarks](numberoftickmarks.md) is `0`, or if the slider is circular. In its implementation of this property, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [NSTickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

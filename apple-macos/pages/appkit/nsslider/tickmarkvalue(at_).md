> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/tickmarkvalue(at:)](https://developer.apple.com/documentation/appkit/nsslider/tickmarkvalue(at:))

# tickMarkValue(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the slider’s value represented by the tick mark at the specified index.

## Declaration

```swift
func tickMarkValue(at index: Int) -> Double
```

## Parameters

- `index`: The index of the tick mark for which to return the value. The minimum-value tick mark has an index of `0`.

<a id="return-value"></a>

## Return Value

The value of the specified tick mark.

<a id="Discussion"></a>

## Discussion

In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSSlider.TickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).

# tickMarkValueAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the slider’s value represented by the tick mark at the specified index.

## Declaration

```objectivec
- (double) tickMarkValueAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the tick mark for which to return the value. The minimum-value tick mark has an index of `0`.

<a id="return-value"></a>

## Return Value

The value of the specified tick mark.

<a id="Discussion"></a>

## Discussion

In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSTickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).

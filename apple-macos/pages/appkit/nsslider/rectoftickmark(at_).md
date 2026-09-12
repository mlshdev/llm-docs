> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/rectoftickmark(at:)](https://developer.apple.com/documentation/appkit/nsslider/rectoftickmark(at:))

# rectOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark at the given index.

## Declaration

```swift
func rectOfTickMark(at index: Int) -> NSRect
```

## Parameters

- `index`: The index of the tick mark for which to retrieve the bounds.  The minimum-value tick mark is at index `0`.

<a id="return-value"></a>

## Return Value

The bounding rectangle of the specified tick mark.

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises `NSRangeException`. In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its [NSSliderCell](../nsslidercell.md) instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSSlider.TickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

# rectOfTickMarkAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark at the given index.

## Declaration

```objectivec
- (NSRect) rectOfTickMarkAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the tick mark for which to retrieve the bounds.  The minimum-value tick mark is at index `0`.

<a id="return-value"></a>

## Return Value

The bounding rectangle of the specified tick mark.

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises `NSRangeException`. In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its [NSSliderCell](../nsslidercell.md) instance.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSTickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

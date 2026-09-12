> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/indexoftickmark(at:)](https://developer.apple.com/documentation/appkit/nsslider/indexoftickmark(at:))

# indexOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the tick mark closest to the location of the slider represented by the given point.

## Declaration

```swift
func indexOfTickMark(at point: NSPoint) -> Int
```

## Parameters

- `point`: The point representing the location for which to retrieve the tick mark.

<a id="return-value"></a>

## Return Value

The index of the tick mark closest to the location specified by `point`. If `point` is not within the bounding rectangle (plus an extra pixel of space) of any tick mark, the method returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance. This method invokes [rectOfTickMark(at:)](rectoftickmark%28at_%29.md) for each tick mark on the slider until it finds a tick mark containing the point.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSSlider.TickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

# indexOfTickMarkAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the tick mark closest to the location of the slider represented by the given point.

## Declaration

```objectivec
- (NSInteger) indexOfTickMarkAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point representing the location for which to retrieve the tick mark.

<a id="return-value"></a>

## Return Value

The index of the tick mark closest to the location specified by `point`. If `point` is not within the bounding rectangle (plus an extra pixel of space) of any tick mark, the method returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

In its implementation of this method, the receiving `NSSlider` instance invokes the method of the same name of its `NSSliderCell` instance. This method invokes [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md) for each tick mark on the slider until it finds a tick mark containing the point.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSTickMarkPosition](tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

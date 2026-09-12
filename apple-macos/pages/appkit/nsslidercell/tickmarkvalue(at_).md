> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/tickmarkvalue(at:)](https://developer.apple.com/documentation/appkit/nsslidercell/tickmarkvalue(at:))

# tickMarkValue(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s value represented by the tick mark at the specified index.

## Declaration

```swift
func tickMarkValue(at index: Int) -> Double
```

## Parameters

- `index`: The index of the tick mark for which to retrieve the value.  The minimum-value tick mark has an index of 0.

<a id="return-value"></a>

## Return Value

The value represented by the specified tick mark.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.

# tickMarkValueAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s value represented by the tick mark at the specified index.

## Declaration

```objectivec
- (double) tickMarkValueAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the tick mark for which to retrieve the value.  The minimum-value tick mark has an index of 0.

<a id="return-value"></a>

## Return Value

The value represented by the specified tick mark.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.

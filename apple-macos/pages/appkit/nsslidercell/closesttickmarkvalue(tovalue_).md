> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/closesttickmarkvalue(tovalue:)](https://developer.apple.com/documentation/appkit/nsslidercell/closesttickmarkvalue(tovalue:))

# closestTickMarkValue(toValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value of the tick mark closest to the specified value.

## Declaration

```swift
func closestTickMarkValue(toValue value: Double) -> Double
```

## Parameters

- `value`: The value for which to obtain the closest tick mark.

<a id="return-value"></a>

## Return Value

The value of the closest tick mark.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# closestTickMarkValueToValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value of the tick mark closest to the specified value.

## Declaration

```objectivec
- (double) closestTickMarkValueToValue:(double) value;
```

## Parameters

- `value`: The value for which to obtain the closest tick mark.

<a id="return-value"></a>

## Return Value

The value of the closest tick mark.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

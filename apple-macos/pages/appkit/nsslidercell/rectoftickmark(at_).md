> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/rectoftickmark(at:)](https://developer.apple.com/documentation/appkit/nsslidercell/rectoftickmark(at:))

# rectOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark at the specified index.

## Declaration

```swift
func rectOfTickMark(at index: Int) -> NSRect
```

## Parameters

- `index`: The index of the tick mark for which to return the bounding rectangle. The minimum-value tick mark is at index 0.

<a id="return-value"></a>

## Return Value

The bounding rectangle of the specified tick mark.

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises `NSRangeException`.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# rectOfTickMarkAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark at the specified index.

## Declaration

```objectivec
- (NSRect) rectOfTickMarkAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the tick mark for which to return the bounding rectangle. The minimum-value tick mark is at index 0.

<a id="return-value"></a>

## Return Value

The bounding rectangle of the specified tick mark.

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises `NSRangeException`.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

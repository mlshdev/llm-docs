> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/indexoftickmark(at:)](https://developer.apple.com/documentation/appkit/nsslidercell/indexoftickmark(at:))

# indexOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the tick mark closest to the location of the slider represented by the specified point.

## Declaration

```swift
func indexOfTickMark(at point: NSPoint) -> Int
```

## Parameters

- `point`: The point representing the slider location.

<a id="return-value"></a>

## Return Value

The index of the tick mark closest to the specified location.

<a id="Discussion"></a>

## Discussion

If `point` is not within the bounding rectangle (plus an extra pixel of space) of any tick mark, the method returns `NSNotFound`. This method calls [rectOfTickMark(at:)](rectoftickmark%28at_%29.md) for each tick mark on the slider until it finds a tick mark containing `point`.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# indexOfTickMarkAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the tick mark closest to the location of the slider represented by the specified point.

## Declaration

```objectivec
- (NSInteger) indexOfTickMarkAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The point representing the slider location.

<a id="return-value"></a>

## Return Value

The index of the tick mark closest to the specified location.

<a id="Discussion"></a>

## Discussion

If `point` is not within the bounding rectangle (plus an extra pixel of space) of any tick mark, the method returns `NSNotFound`. This method calls [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md) for each tick mark on the slider until it finds a tick mark containing `point`.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

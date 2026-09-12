> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/numberoftickmarks](https://developer.apple.com/documentation/appkit/nsslidercell/numberoftickmarks)

# numberOfTickMarks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.

## Declaration

```swift
var numberOfTickMarks: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is 0, and no tick marks appear. The number of tick marks assigned to a slider, along with the slider’s minimum and maximum values, determines the values associated with the tick marks.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# numberOfTickMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.

## Declaration

```objectivec
@property NSInteger numberOfTickMarks;
```

<a id="Discussion"></a>

## Discussion

By default, this value is 0, and no tick marks appear. The number of tick marks assigned to a slider, along with the slider’s minimum and maximum values, determines the values associated with the tick marks.

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

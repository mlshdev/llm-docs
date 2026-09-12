> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/tickmarkposition](https://developer.apple.com/documentation/appkit/nsslidercell/tickmarkposition)

# tickMarkPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the tick marks relative to the receiver.

## Declaration

```swift
var tickMarkPosition: NSSlider.TickMarkPosition { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant indicating the position of the tick marks. Possible values  are described in [NSSlider.TickMarkPosition](../nsslider/tickmarkposition-swift.enum.md). The default alignments are `NSTickMarkBelow` and `NSTickMarkLeft`. Setting this property has no effect if no tick marks have been assigned (that is, if [numberOfTickMarks](numberoftickmarks.md) is 0).

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# tickMarkPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the tick marks relative to the receiver.

## Declaration

```objectivec
@property NSTickMarkPosition tickMarkPosition;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant indicating the position of the tick marks. Possible values  are described in [NSTickMarkPosition](../nsslider/tickmarkposition-swift.enum.md). The default alignments are `NSTickMarkBelow` and `NSTickMarkLeft`. Setting this property has no effect if no tick marks have been assigned (that is, if [numberOfTickMarks](numberoftickmarks.md) is 0).

## See Also

### Managing Tick Marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

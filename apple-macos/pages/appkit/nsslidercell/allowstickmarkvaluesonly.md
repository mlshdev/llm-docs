> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/allowstickmarkvaluesonly](https://developer.apple.com/documentation/appkit/nsslidercell/allowstickmarkvaluesonly)

# allowsTickMarkValuesOnly (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.

## Declaration

```swift
var allowsTickMarkValuesOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the slider’s values are limited to those values represented by tick marks; otherwise, [false](https://developer.apple.com/documentation/swift/false). For example, if you specify [true](https://developer.apple.com/documentation/swift/true) for a slider that has a minimum value of 0, a maximum value of 100, and five markers, the allowable values are 0, 25, 50, 75, and 100. When users move the slider’s knob, it jumps to the tick mark nearest the pointer when the mouse button is released. Setting this property has no effect if the slider has no tick marks.

## See Also

### Managing Tick Marks

- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

# allowsTickMarkValuesOnly (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.

## Declaration

```objectivec
@property BOOL allowsTickMarkValuesOnly;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the slider’s values are limited to those values represented by tick marks; otherwise, [false](https://developer.apple.com/documentation/swift/false). For example, if you specify [true](https://developer.apple.com/documentation/swift/true) for a slider that has a minimum value of 0, a maximum value of 100, and five markers, the allowable values are 0, 25, 50, 75, and 100. When users move the slider’s knob, it jumps to the tick mark nearest the pointer when the mouse button is released. Setting this property has no effect if the slider has no tick marks.

## See Also

### Managing Tick Marks

- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

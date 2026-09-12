> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicatorcell/tickmarkposition](https://developer.apple.com/documentation/appkit/nslevelindicatorcell/tickmarkposition)

# tickMarkPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placement of tick marks on the level indicator control.

## Declaration

```swift
var tickMarkPosition: NSSlider.TickMarkPosition { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the position where the control draws tick marks. Regardless of the value in this property, tick marks are not drawn if the value in the [numberOfTickMarks](numberoftickmarks.md) property is `0`.

The default value of this property is [NSTickMarkBelow](../nstickmarkbelow.md), which also corresponds to the value [NSTickMarkLeft](../nstickmarkleft.md) for vertically oriented level indicators.

## See Also

### Managing Tick Marks

- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

# tickMarkPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The placement of tick marks on the level indicator control.

## Declaration

```objectivec
@property NSTickMarkPosition tickMarkPosition;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the position where the control draws tick marks. Regardless of the value in this property, tick marks are not drawn if the value in the [numberOfTickMarks](numberoftickmarks.md) property is `0`.

The default value of this property is [NSTickMarkBelow](../nstickmarkbelow.md), which also corresponds to the value [NSTickMarkLeft](../nstickmarkleft.md) for vertically oriented level indicators.

## See Also

### Managing Tick Marks

- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

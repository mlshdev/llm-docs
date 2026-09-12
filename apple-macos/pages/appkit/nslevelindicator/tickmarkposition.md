> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/tickmarkposition](https://developer.apple.com/documentation/appkit/nslevelindicator/tickmarkposition)

# tickMarkPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Determines how the receiver’s tick marks are aligned with it.

## Declaration

```swift
var tickMarkPosition: NSSlider.TickMarkPosition { get set }
```

<a id="Discussion"></a>

## Discussion

The default alignments are `NSTickMarkBelow` and `NSTickMarkLeft`. This property has no effect if no tick marks have been assigned (that is, [numberOfTickMarks](numberoftickmarks.md) returns 0).

## See Also

### Managing Tick Marks and Style

- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](style.md): Constants that specify a level indicator’s appearance.

# tickMarkPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Determines how the receiver’s tick marks are aligned with it.

## Declaration

```objectivec
@property NSTickMarkPosition tickMarkPosition;
```

<a id="Discussion"></a>

## Discussion

The default alignments are `NSTickMarkBelow` and `NSTickMarkLeft`. This property has no effect if no tick marks have been assigned (that is, [numberOfTickMarks](numberoftickmarks.md) returns 0).

## See Also

### Managing Tick Marks and Style

- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](style.md): Constants that specify a level indicator’s appearance.

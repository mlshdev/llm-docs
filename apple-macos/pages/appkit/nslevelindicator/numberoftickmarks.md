> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/numberoftickmarks](https://developer.apple.com/documentation/appkit/nslevelindicator/numberoftickmarks)

# numberOfTickMarks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of tick marks associated with the receiver.

## Declaration

```swift
var numberOfTickMarks: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is 0, and no tick marks appear. The number of tick marks assigned to a slider, along with the slider’s minimum and maximum values, determines the values associated with the tick marks.

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](style.md): Constants that specify a level indicator’s appearance.

# numberOfTickMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of tick marks associated with the receiver.

## Declaration

```objectivec
@property NSInteger numberOfTickMarks;
```

<a id="Discussion"></a>

## Discussion

By default, this value is 0, and no tick marks appear. The number of tick marks assigned to a slider, along with the slider’s minimum and maximum values, determines the values associated with the tick marks.

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](style.md): Constants that specify a level indicator’s appearance.

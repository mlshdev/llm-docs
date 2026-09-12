> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/numberofmajortickmarks](https://developer.apple.com/documentation/appkit/nslevelindicator/numberofmajortickmarks)

# numberOfMajorTickMarks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of major tick marks associated with the receiver.

## Declaration

```swift
var numberOfMajorTickMarks: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The number of major tick marks must be less than or equal to the number of tick marks returned by [numberOfTickMarks](numberoftickmarks.md). For example, if the number of tick marks is 11 and you specify 3 major tick marks, the resulting level indicator will display 3 major tick marks alternating with 8 minor tick marks, as in the example shown in [NSLevelIndicator](../nslevelindicator.md).

![Major and minor tick marks in a level indicator](https://developer.apple.com/images/com.apple.appkit/media-1965752.gif)

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](style.md): Constants that specify a level indicator’s appearance.

# numberOfMajorTickMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of major tick marks associated with the receiver.

## Declaration

```objectivec
@property NSInteger numberOfMajorTickMarks;
```

<a id="Discussion"></a>

## Discussion

The number of major tick marks must be less than or equal to the number of tick marks returned by [numberOfTickMarks](numberoftickmarks.md). For example, if the number of tick marks is 11 and you specify 3 major tick marks, the resulting level indicator will display 3 major tick marks alternating with 8 minor tick marks, as in the example shown in [NSLevelIndicator](../nslevelindicator.md).

![Major and minor tick marks in a level indicator](https://developer.apple.com/images/com.apple.appkit/media-1965752.gif)

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](style.md): Constants that specify a level indicator’s appearance.

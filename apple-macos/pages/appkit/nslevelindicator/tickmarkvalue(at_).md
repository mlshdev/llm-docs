> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/tickmarkvalue(at:)](https://developer.apple.com/documentation/appkit/nslevelindicator/tickmarkvalue(at:))

# tickMarkValue(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).

## Declaration

```swift
func tickMarkValue(at index: Int) -> Double
```

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](style.md): Constants that specify a level indicator’s appearance.

# tickMarkValueAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).

## Declaration

```objectivec
- (double) tickMarkValueAtIndex:(NSInteger) index;
```

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](style.md): Constants that specify a level indicator’s appearance.

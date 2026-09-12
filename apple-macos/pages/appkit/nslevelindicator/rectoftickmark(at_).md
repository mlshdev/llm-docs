> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/rectoftickmark(at:)](https://developer.apple.com/documentation/appkit/nslevelindicator/rectoftickmark(at:))

# rectOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).

## Declaration

```swift
func rectOfTickMark(at index: Int) -> NSRect
```

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises an `NSRangeException`.

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicator.Style](style.md): Constants that specify a level indicator’s appearance.

# rectOfTickMarkAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).

## Declaration

```objectivec
- (NSRect) rectOfTickMarkAtIndex:(NSInteger) index;
```

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises an `NSRangeException`.

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.
- [NSLevelIndicatorStyle](style.md): Constants that specify a level indicator’s appearance.

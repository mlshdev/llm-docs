> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicatorcell/rectoftickmark(at:)](https://developer.apple.com/documentation/appkit/nslevelindicatorcell/rectoftickmark(at:))

# rectOfTickMark(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

## Declaration

```swift
func rectOfTickMark(at index: Int) -> NSRect
```

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises a `NSRangeException`.

## See Also

### Managing Tick Marks

- [tickMarkPosition](tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).

# rectOfTickMarkAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

## Declaration

```objectivec
- (NSRect) rectOfTickMarkAtIndex:(NSInteger) index;
```

<a id="Discussion"></a>

## Discussion

If no tick mark is associated with `index`, the method raises a `NSRangeException`.

## See Also

### Managing Tick Marks

- [tickMarkPosition](tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).

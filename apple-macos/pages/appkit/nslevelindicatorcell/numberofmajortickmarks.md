> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicatorcell/numberofmajortickmarks](https://developer.apple.com/documentation/appkit/nslevelindicatorcell/numberofmajortickmarks)

# numberOfMajorTickMarks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of major tick marks displayed by the control.

## Declaration

```swift
var numberOfMajorTickMarks: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value in this property must be less than or equal to the value in the [numberOfTickMarks](numberoftickmarks.md) property.

## See Also

### Managing Tick Marks

- [tickMarkPosition](tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

# numberOfMajorTickMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of major tick marks displayed by the control.

## Declaration

```objectivec
@property NSInteger numberOfMajorTickMarks;
```

<a id="Discussion"></a>

## Discussion

The value in this property must be less than or equal to the value in the [numberOfTickMarks](numberoftickmarks.md) property.

## See Also

### Managing Tick Marks

- [tickMarkPosition](tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks displayed by the control.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

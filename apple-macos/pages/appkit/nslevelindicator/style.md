> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicator/style](https://developer.apple.com/documentation/appkit/nslevelindicator/style)

# NSLevelIndicator.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify a level indicator’s appearance.

## Declaration

```swift
enum Style
```

## Topics

### Level Indicator Styles

- [NSLevelIndicator.Style.relevancy](style/relevancy.md): A style that indicates the relevancy of an item, such as a search result.
- [NSLevelIndicator.Style.continuousCapacity](style/continuouscapacity.md): A style that indicates the capacity of something, such as how much data is on a hard disk.
- [NSLevelIndicator.Style.discreteCapacity](style/discretecapacity.md): A style that displays discrete segments that indicate the capacity of something, such as an audio level.
- [NSLevelIndicator.Style.rating](style/rating.md): A style that indicates a rank, such as a star ranking display.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.

# NSLevelIndicatorStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify a level indicator’s appearance.

## Declaration

```objectivec
enum NSLevelIndicatorStyle : NSUInteger;
```

## Topics

### Level Indicator Styles

- [NSLevelIndicatorStyleRelevancy](style/relevancy.md): A style that indicates the relevancy of an item, such as a search result.
- [NSLevelIndicatorStyleContinuousCapacity](style/continuouscapacity.md): A style that indicates the capacity of something, such as how much data is on a hard disk.
- [NSLevelIndicatorStyleDiscreteCapacity](style/discretecapacity.md): A style that displays discrete segments that indicate the capacity of something, such as an audio level.
- [NSLevelIndicatorStyleRating](style/rating.md): A style that indicates a rank, such as a star ranking display.

### Deprecated Style Constants

- [NSRelevancyLevelIndicatorStyle](../nsrelevancylevelindicatorstyle.md): Deprecated. A style that indicates the relevancy of an item, such as a search result.
- [NSRatingLevelIndicatorStyle](../nsratinglevelindicatorstyle.md): Deprecated. A style that indicates a rank, such as a star ranking display.
- [NSDiscreteCapacityLevelIndicatorStyle](../nsdiscretecapacitylevelindicatorstyle.md): Deprecated. A style that displays discrete segments that indicate the capacity of something, such as an audio level.
- [NSContinuousCapacityLevelIndicatorStyle](../nscontinuouscapacitylevelindicatorstyle.md): Deprecated. A style that indicates the capacity of something, such as how much data is on a hard disk.

## See Also

### Managing Tick Marks and Style

- [tickMarkPosition](tickmarkposition.md): Determines how the receiver’s tick marks are aligned with it.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the receiver.
- [numberOfMajorTickMarks](numberofmajortickmarks.md): The number of major tick marks associated with the receiver.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by the specified index (the minimum-value tick mark is at index 0).
- [levelIndicatorStyle](levelindicatorstyle.md): The appearance of the indicator.

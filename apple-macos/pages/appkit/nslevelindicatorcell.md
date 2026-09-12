> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslevelindicatorcell](https://developer.apple.com/documentation/appkit/nslevelindicatorcell)

# NSLevelIndicatorCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

`NSLevelIndicatorCell` is a subclass of [NSActionCell](nsactioncell.md) that provides several level indicator display styles including: capacity, ranking and relevancy. The capacity style provides both continuous and discrete modes.

## Declaration

```swift
class NSLevelIndicatorCell
```

## Topics

### Initializing NSLevelIndicatorCell Objects

- [init(levelIndicatorStyle:)](nslevelindicatorcell/init%28levelindicatorstyle_%29.md): Initializes the receiver with the style specified by `levelIndicatorStyle`.

### Configuring the Range of Values

- [minValue](nslevelindicatorcell/minvalue.md): The minimum value of the control.
- [maxValue](nslevelindicatorcell/maxvalue.md): The maximum value of the control.
- [levelIndicatorStyle](nslevelindicatorcell/levelindicatorstyle.md): The style of the level indicator control.
- [warningValue](nslevelindicatorcell/warningvalue.md): The warning value of the level indicator control.
- [criticalValue](nslevelindicatorcell/criticalvalue.md): The critical value of the level indicator control.

### Managing Tick Marks

- [tickMarkPosition](nslevelindicatorcell/tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](nslevelindicatorcell/numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](nslevelindicatorcell/numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValue(at:)](nslevelindicatorcell/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMark(at:)](nslevelindicatorcell/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

### Constants

- [NSLevelIndicator.Style](nslevelindicator/style.md): Constants that specify a level indicator’s appearance.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSLevelIndicatorCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

`NSLevelIndicatorCell` is a subclass of [NSActionCell](nsactioncell.md) that provides several level indicator display styles including: capacity, ranking and relevancy. The capacity style provides both continuous and discrete modes.

## Declaration

```objectivec
@interface NSLevelIndicatorCell : NSActionCell
```

## Topics

### Initializing NSLevelIndicatorCell Objects

- [initWithLevelIndicatorStyle:](nslevelindicatorcell/init%28levelindicatorstyle_%29.md): Initializes the receiver with the style specified by `levelIndicatorStyle`.

### Configuring the Range of Values

- [minValue](nslevelindicatorcell/minvalue.md): The minimum value of the control.
- [maxValue](nslevelindicatorcell/maxvalue.md): The maximum value of the control.
- [levelIndicatorStyle](nslevelindicatorcell/levelindicatorstyle.md): The style of the level indicator control.
- [warningValue](nslevelindicatorcell/warningvalue.md): The warning value of the level indicator control.
- [criticalValue](nslevelindicatorcell/criticalvalue.md): The critical value of the level indicator control.

### Managing Tick Marks

- [tickMarkPosition](nslevelindicatorcell/tickmarkposition.md): The placement of tick marks on the level indicator control.
- [numberOfTickMarks](nslevelindicatorcell/numberoftickmarks.md): The number of tick marks displayed by the control.
- [numberOfMajorTickMarks](nslevelindicatorcell/numberofmajortickmarks.md): The number of major tick marks displayed by the control.
- [tickMarkValueAtIndex:](nslevelindicatorcell/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at index (the minimum-value tick mark has an index of 0).
- [rectOfTickMarkAtIndex:](nslevelindicatorcell/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark identified by `index` (the minimum-value tick mark is at index 0).

### Constants

- [NSLevelIndicatorStyle](nslevelindicator/style.md): Constants that specify a level indicator’s appearance.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

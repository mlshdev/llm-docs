> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/direction](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/direction)

# UIAccessibilityCustomRotor.Direction (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the search direction.

## Declaration

```swift
enum Direction
```

## Topics

### Constants

- [UIAccessibilityCustomRotor.Direction.previous](direction/previous.md): The previous search item.
- [UIAccessibilityCustomRotor.Direction.next](direction/next.md): The next search item.

### Initializers

- [init(rawValue:)](direction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Navigating to the next item

- [itemSearchBlock](itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotor.Search](search.md): The block type for retrieving the next or previous rotor.

# UIAccessibilityCustomRotorDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that indicate the search direction.

## Declaration

```objectivec
enum UIAccessibilityCustomRotorDirection : NSInteger;
```

## Topics

### Constants

- [UIAccessibilityCustomRotorDirectionPrevious](direction/previous.md): The previous search item.
- [UIAccessibilityCustomRotorDirectionNext](direction/next.md): The next search item.

## See Also

### Navigating to the next item

- [itemSearchBlock](itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotorSearch](search.md): The block type for retrieving the next or previous rotor.

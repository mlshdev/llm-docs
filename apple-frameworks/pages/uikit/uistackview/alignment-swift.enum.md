> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/alignment-swift.enum](https://developer.apple.com/documentation/uikit/uistackview/alignment-swift.enum)

# UIStackView.Alignment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout of arranged views perpendicular to the stack view’s axis.

## Declaration

```swift
enum Alignment
```

## Topics

### Constants

- [UIStackView.Alignment.fill](alignment-swift.enum/fill.md): A layout where the stack view resizes its arranged views so that they fill the available space perpendicular to the stack view’s axis.
- [UIStackView.Alignment.center](alignment-swift.enum/center.md): A layout where the stack view aligns the center of its arranged views with its center along its axis.
- [UIStackView.Alignment.leading](alignment-swift.enum/leading.md): A layout for vertical stacks where the stack view aligns the leading edge of its arranged views along its leading edge.
- [UIStackView.Alignment.trailing](alignment-swift.enum/trailing.md): A layout for vertical stacks where the stack view aligns the trailing edge of its arranged views along its trailing edge.
- [top](alignment-swift.enum/top.md): A layout for horizontal stacks where the stack view aligns the top edge of its arranged views along its top edge.
- [bottom](alignment-swift.enum/bottom.md): A layout for horizontal stacks where the stack view aligns the bottom edge of its arranged views along its bottom edge.
- [UIStackView.Alignment.firstBaseline](alignment-swift.enum/firstbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their first baseline.
- [UIStackView.Alignment.lastBaseline](alignment-swift.enum/lastbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their last baseline.

### Initializers

- [init(rawValue:)](alignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIStackView.Distribution](distribution-swift.enum.md): The layout that defines the size and position of the arranged views along the stack view’s axis.

# UIStackViewAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout of arranged views perpendicular to the stack view’s axis.

## Declaration

```objectivec
enum UIStackViewAlignment : NSInteger;
```

## Topics

### Constants

- [UIStackViewAlignmentFill](alignment-swift.enum/fill.md): A layout where the stack view resizes its arranged views so that they fill the available space perpendicular to the stack view’s axis.
- [UIStackViewAlignmentCenter](alignment-swift.enum/center.md): A layout where the stack view aligns the center of its arranged views with its center along its axis.
- [UIStackViewAlignmentLeading](alignment-swift.enum/leading.md): A layout for vertical stacks where the stack view aligns the leading edge of its arranged views along its leading edge.
- [UIStackViewAlignmentTrailing](alignment-swift.enum/trailing.md): A layout for vertical stacks where the stack view aligns the trailing edge of its arranged views along its trailing edge.
- [UIStackViewAlignmentTop](alignment-swift.enum/top.md): A layout for horizontal stacks where the stack view aligns the top edge of its arranged views along its top edge.
- [UIStackViewAlignmentBottom](alignment-swift.enum/bottom.md): A layout for horizontal stacks where the stack view aligns the bottom edge of its arranged views along its bottom edge.
- [UIStackViewAlignmentFirstBaseline](alignment-swift.enum/firstbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their first baseline.
- [UIStackViewAlignmentLastBaseline](alignment-swift.enum/lastbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their last baseline.

## See Also

### Constants

- [UIStackViewDistribution](distribution-swift.enum.md): The layout that defines the size and position of the arranged views along the stack view’s axis.

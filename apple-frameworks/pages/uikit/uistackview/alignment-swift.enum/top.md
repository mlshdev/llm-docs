> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/alignment-swift.enum/top](https://developer.apple.com/documentation/uikit/uistackview/alignment-swift.enum/top)

# top (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout for horizontal stacks where the stack view aligns the top edge of its arranged views along its top edge.

## Declaration

```swift
static var top: UIStackView.Alignment { get }
```

<a id="Discussion"></a>

## Discussion

This value is equivalent to the [UIStackView.Alignment.leading](leading.md) alignment for vertical stacks.

The following image shows an example of a horizontal stack view that uses the [top](top.md) alignment.

![A horizontal stack view with four arranged subviews. The stack view aligns the subviews to its top edge.](https://developer.apple.com/images/com.apple.uikit/media-2557465@2x.png)

## See Also

### Constants

- [UIStackView.Alignment.fill](fill.md): A layout where the stack view resizes its arranged views so that they fill the available space perpendicular to the stack view’s axis.
- [UIStackView.Alignment.center](center.md): A layout where the stack view aligns the center of its arranged views with its center along its axis.
- [UIStackView.Alignment.leading](leading.md): A layout for vertical stacks where the stack view aligns the leading edge of its arranged views along its leading edge.
- [UIStackView.Alignment.trailing](trailing.md): A layout for vertical stacks where the stack view aligns the trailing edge of its arranged views along its trailing edge.
- [bottom](bottom.md): A layout for horizontal stacks where the stack view aligns the bottom edge of its arranged views along its bottom edge.
- [UIStackView.Alignment.firstBaseline](firstbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their first baseline.
- [UIStackView.Alignment.lastBaseline](lastbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their last baseline.

# UIStackViewAlignmentTop (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout for horizontal stacks where the stack view aligns the top edge of its arranged views along its top edge.

## Declaration

```objectivec
UIStackViewAlignmentTop
```

<a id="Discussion"></a>

## Discussion

This value is equivalent to the [UIStackViewAlignmentLeading](leading.md) alignment for vertical stacks.

The following image shows an example of a horizontal stack view that uses the [UIStackViewAlignmentTop](top.md) alignment.

![A horizontal stack view with four arranged subviews. The stack view aligns the subviews to its top edge.](https://developer.apple.com/images/com.apple.uikit/media-2557465@2x.png)

## See Also

### Constants

- [UIStackViewAlignmentFill](fill.md): A layout where the stack view resizes its arranged views so that they fill the available space perpendicular to the stack view’s axis.
- [UIStackViewAlignmentCenter](center.md): A layout where the stack view aligns the center of its arranged views with its center along its axis.
- [UIStackViewAlignmentLeading](leading.md): A layout for vertical stacks where the stack view aligns the leading edge of its arranged views along its leading edge.
- [UIStackViewAlignmentTrailing](trailing.md): A layout for vertical stacks where the stack view aligns the trailing edge of its arranged views along its trailing edge.
- [UIStackViewAlignmentBottom](bottom.md): A layout for horizontal stacks where the stack view aligns the bottom edge of its arranged views along its bottom edge.
- [UIStackViewAlignmentFirstBaseline](firstbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their first baseline.
- [UIStackViewAlignmentLastBaseline](lastbaseline.md): A layout for horizontal stacks where the stack view aligns its arranged views based on their last baseline.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/gravity](https://developer.apple.com/documentation/appkit/nsstackview/gravity)

# NSStackView.Gravity (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

The gravity areas available in a stack view.

## Declaration

```swift
enum Gravity
```

<a id="overview"></a>

## Overview

The layout of a stack view is partitioned into three distinct areas in which you can place views. These are known as *gravity areas*. You can use these constants to configure a stack view by way of the [insertView(\_:at:in:)](insertview%28__at_in_%29.md) and [setViews(\_:in:)](setviews%28__in_%29.md) methods.

In a horizontally oriented stack view, the three gravity areas are [leading](gravity/leading.md), [NSStackView.Gravity.center](gravity/center.md), and [trailing](gravity/trailing.md). The ordering of these areas depends on the user interface language, unless you’ve explicitly specified the stack view’s user interface layout direction by calling the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) method. For a [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property value of [NSUserInterfaceLayoutDirection.leftToRight](../nsuserinterfacelayoutdirection/lefttoright.md), the leading gravity area is on the left.

In a vertically oriented stack view, the three gravity areas are always [NSStackView.Gravity.top](gravity/top.md), [NSStackView.Gravity.center](gravity/center.md), and [NSStackView.Gravity.bottom](gravity/bottom.md).

The center gravity area is constrained to remain geometrically centered with an Auto Layout priority of [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). For information about geometric spacing between gravity areas, see the description of the [spacing](spacing.md) property.

## Topics

### Constants

- [NSStackView.Gravity.top](gravity/top.md): The topmost gravity area in a vertically oriented stack view.
- [leading](gravity/leading.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.
- [NSStackView.Gravity.center](gravity/center.md): The center gravity area, regardless of stack view layout direction or user interface language.
- [NSStackView.Gravity.bottom](gravity/bottom.md): The bottommost gravity area in a vertically oriented stack view.
- [trailing](gravity/trailing.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.

### Initializers

- [init(rawValue:)](gravity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Views in Gravity Areas

- [addView(\_:in:)](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView(\_:at:in:)](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews(\_:in:)](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView(\_:)](removeview%28__%29.md): Removes a specified view from the stack view.

# NSStackViewGravity (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

The gravity areas available in a stack view.

## Declaration

```objectivec
enum NSStackViewGravity : NSInteger;
```

<a id="overview"></a>

## Overview

The layout of a stack view is partitioned into three distinct areas in which you can place views. These are known as *gravity areas*. You can use these constants to configure a stack view by way of the [insertView:atIndex:inGravity:](insertview%28__at_in_%29.md) and [setViews:inGravity:](setviews%28__in_%29.md) methods.

In a horizontally oriented stack view, the three gravity areas are [NSStackViewGravityLeading](gravity/leading.md), [NSStackViewGravityCenter](gravity/center.md), and [NSStackViewGravityTrailing](gravity/trailing.md). The ordering of these areas depends on the user interface language, unless you’ve explicitly specified the stack view’s user interface layout direction by calling the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) method. For a [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property value of [NSUserInterfaceLayoutDirectionLeftToRight](../nsuserinterfacelayoutdirection/lefttoright.md), the leading gravity area is on the left.

In a vertically oriented stack view, the three gravity areas are always [NSStackViewGravityTop](gravity/top.md), [NSStackViewGravityCenter](gravity/center.md), and [NSStackViewGravityBottom](gravity/bottom.md).

The center gravity area is constrained to remain geometrically centered with an Auto Layout priority of [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). For information about geometric spacing between gravity areas, see the description of the [spacing](spacing.md) property.

## Topics

### Constants

- [NSStackViewGravityTop](gravity/top.md): The topmost gravity area in a vertically oriented stack view.
- [NSStackViewGravityLeading](gravity/leading.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.
- [NSStackViewGravityCenter](gravity/center.md): The center gravity area, regardless of stack view layout direction or user interface language.
- [NSStackViewGravityBottom](gravity/bottom.md): The bottommost gravity area in a vertically oriented stack view.
- [NSStackViewGravityTrailing](gravity/trailing.md): The leftmost or rightmost gravity area in a horizontally oriented stack view, based on the user interface language or the explicitly set user interface layout direction.

## See Also

### Managing Views in Gravity Areas

- [addView:inGravity:](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView:atIndex:inGravity:](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews:inGravity:](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [removeView:](removeview%28__%29.md): Removes a specified view from the stack view.

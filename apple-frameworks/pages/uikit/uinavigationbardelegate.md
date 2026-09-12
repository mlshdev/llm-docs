> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbardelegate](https://developer.apple.com/documentation/uikit/uinavigationbardelegate)

# UINavigationBarDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods that a navigation bar calls before and after it modifies its stack of navigation items.

## Declaration

```swift
@MainActor protocol UINavigationBarDelegate : UIBarPositioningDelegate
```

<a id="overview"></a>

## Overview

The [UINavigationBarDelegate](uinavigationbardelegate.md) protocol defines optional methods that a [UINavigationBar](uinavigationbar.md) [delegate](uinavigationbar/delegate.md) implements to update its views when items push or pop from the stack. The navigation bar represents only the bar at the top of the screen, not the view below. It’s the application’s responsibility to implement the behavior when the top item changes.

You can control whether a navigation bar pushes an item on or pops an item from the stack by implementing the [navigationBar(\_:shouldPush:)](uinavigationbardelegate/navigationbar%28__shouldpush_%29.md) and [navigationBar(\_:shouldPop:)](uinavigationbardelegate/navigationbar%28__shouldpop_%29.md) methods. These methods return [true](https://developer.apple.com/documentation/swift/true) if the action is allowed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

The screen always reflects the top item on the navigation bar. You implement the [navigationBar(\_:didPush:)](uinavigationbardelegate/navigationbar%28__didpush_%29.md) method to update the view below the navigation bar to reflect the new item. Similarly, you implement the [navigationBar(\_:didPop:)](uinavigationbardelegate/navigationbar%28__didpop_%29.md) method to replace the view below the navigation bar.

## Topics

### Pushing items

- [navigationBar(\_:shouldPush:)](uinavigationbardelegate/navigationbar%28__shouldpush_%29.md): Returns a Boolean value indicating whether the navigation bar should push an item.
- [navigationBar(\_:didPush:)](uinavigationbardelegate/navigationbar%28__didpush_%29.md): Tells the delegate that an item was pushed onto the navigation bar.

### Popping items

- [navigationBar(\_:shouldPop:)](uinavigationbardelegate/navigationbar%28__shouldpop_%29.md): Returns a Boolean value indicating whether the navigation bar should pop an item.
- [navigationBar(\_:didPop:)](uinavigationbardelegate/navigationbar%28__didpop_%29.md): Tells the delegate that an item was popped from the navigation bar.

### Building with Mac Catalyst

- [navigationBarNSToolbarSection(\_:)](uinavigationbardelegate/navigationbarnstoolbarsection%28__%29.md): Asks the delegate which section of the toolbar to host the navigation bar in.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Responding to navigation bar changes

- [delegate](uinavigationbar/delegate.md): The navigation bar’s delegate object.

# UINavigationBarDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Methods that a navigation bar calls before and after it modifies its stack of navigation items.

## Declaration

```objectivec
@protocol UINavigationBarDelegate <UIBarPositioningDelegate>
```

<a id="overview"></a>

## Overview

The [UINavigationBarDelegate](uinavigationbardelegate.md) protocol defines optional methods that a [UINavigationBar](uinavigationbar.md) [delegate](uinavigationbar/delegate.md) implements to update its views when items push or pop from the stack. The navigation bar represents only the bar at the top of the screen, not the view below. It’s the application’s responsibility to implement the behavior when the top item changes.

You can control whether a navigation bar pushes an item on or pops an item from the stack by implementing the [navigationBar:shouldPushItem:](uinavigationbardelegate/navigationbar%28__shouldpush_%29.md) and [navigationBar:shouldPopItem:](uinavigationbardelegate/navigationbar%28__shouldpop_%29.md) methods. These methods return [true](https://developer.apple.com/documentation/swift/true) if the action is allowed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

The screen always reflects the top item on the navigation bar. You implement the [navigationBar:didPushItem:](uinavigationbardelegate/navigationbar%28__didpush_%29.md) method to update the view below the navigation bar to reflect the new item. Similarly, you implement the [navigationBar:didPopItem:](uinavigationbardelegate/navigationbar%28__didpop_%29.md) method to replace the view below the navigation bar.

## Topics

### Pushing items

- [navigationBar:shouldPushItem:](uinavigationbardelegate/navigationbar%28__shouldpush_%29.md): Returns a Boolean value indicating whether the navigation bar should push an item.
- [navigationBar:didPushItem:](uinavigationbardelegate/navigationbar%28__didpush_%29.md): Tells the delegate that an item was pushed onto the navigation bar.

### Popping items

- [navigationBar:shouldPopItem:](uinavigationbardelegate/navigationbar%28__shouldpop_%29.md): Returns a Boolean value indicating whether the navigation bar should pop an item.
- [navigationBar:didPopItem:](uinavigationbardelegate/navigationbar%28__didpop_%29.md): Tells the delegate that an item was popped from the navigation bar.

### Building with Mac Catalyst

- [navigationBarNSToolbarSection:](uinavigationbardelegate/navigationbarnstoolbarsection%28__%29.md): Asks the delegate which section of the toolbar to host the navigation bar in.

## Relationships

### Inherits From

- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Responding to navigation bar changes

- [delegate](uinavigationbar/delegate.md): The navigation bar’s delegate object.

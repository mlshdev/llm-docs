> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusgrouppriority](https://developer.apple.com/documentation/uikit/uifocusgrouppriority)

# UIFocusGroupPriority (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The importance of an item within a focus group, used by the focus system to determine the group’s primary item.

## Declaration

```swift
struct UIFocusGroupPriority
```

## Topics

### Constants

- [ignored](uifocusgrouppriority/ignored.md): The lowest focus group priority, assigned by default.
- [previouslyFocused](uifocusgrouppriority/previouslyfocused.md): The focus group priority of a previously focused item.
- [prioritized](uifocusgrouppriority/prioritized.md): The focus group priority that indicates an item is more important than others.
- [currentlyFocused](uifocusgrouppriority/currentlyfocused.md): The focus group priority of the currently focused item, the highest possible priority.

### Initializing a focus group priority

- [init(\_:)](uifocusgrouppriority/init%28__%29.md): Creates a focus group priority with the specified value.
- [init(rawValue:)](uifocusgrouppriority/init%28rawvalue_%29.md): Creates a focus group priority with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.

# UIFocusGroupPriority (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The importance of an item within a focus group, used by the focus system to determine the group’s primary item.

## Declaration

```objectivec
typedef NSInteger UIFocusGroupPriority;
```

## Topics

### Constants

- [UIFocusGroupPriorityIgnored](uifocusgrouppriority/ignored.md): The lowest focus group priority, assigned by default.
- [UIFocusGroupPriorityPreviouslyFocused](uifocusgrouppriority/previouslyfocused.md): The focus group priority of a previously focused item.
- [UIFocusGroupPriorityPrioritized](uifocusgrouppriority/prioritized.md): The focus group priority that indicates an item is more important than others.
- [UIFocusGroupPriorityCurrentlyFocused](uifocusgrouppriority/currentlyfocused.md): The focus group priority of the currently focused item, the highest possible priority.

## See Also

### Focus interactions

- [Navigating an app’s user interface using a keyboard](navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
- [About focus interactions for Apple TV](about-focus-interactions-for-apple-tv.md): Design and implement intuitive control schemes for menus and interactive user interface layouts.
- [Adding user-focusable elements to a tvOS app](adding-user-focusable-elements-to-a-tvos-app.md): Create intuitive and easily manipulated user-interactive controls for your tvOS app.
- [UIFocusEnvironment](uifocusenvironment.md): A set of methods that define the focus behavior for a branch of the view hierarchy.
- [UIFocusSystem](uifocussystem.md): Queries and reevaluates the currently focused item.
- [UIFocusUpdateContext](uifocusupdatecontext.md): An object that provides information relevant to a specific focus update from one view to another.
- [UIFocusItem](uifocusitem.md): An object that can become focused.
- [UIFocusMovementHint](uifocusmovementhint.md): Provides movement hint information for the focused item.
- [UIFocusItemContainer](uifocusitemcontainer.md): The container responsible for providing geometric context to focus items within a given focus environment.
- [UIFocusItemScrollableContainer](uifocusitemscrollablecontainer.md): A type of focus item container that supports automatic scrolling of focusable content.

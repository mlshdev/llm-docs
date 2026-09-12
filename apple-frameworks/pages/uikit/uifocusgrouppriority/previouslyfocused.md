> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusgrouppriority/previouslyfocused](https://developer.apple.com/documentation/uikit/uifocusgrouppriority/previouslyfocused)

# previouslyFocused (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The focus group priority of a previously focused item.

## Declaration

```swift
static var previouslyFocused: UIFocusGroupPriority { get }
```

## See Also

### Constants

- [ignored](ignored.md): The lowest focus group priority, assigned by default.
- [prioritized](prioritized.md): The focus group priority that indicates an item is more important than others.
- [currentlyFocused](currentlyfocused.md): The focus group priority of the currently focused item, the highest possible priority.

# UIFocusGroupPriorityPreviouslyFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The focus group priority of a previously focused item.

## Declaration

```objectivec
static const UIFocusGroupPriority UIFocusGroupPriorityPreviouslyFocused;
```

## See Also

### Constants

- [UIFocusGroupPriorityIgnored](ignored.md): The lowest focus group priority, assigned by default.
- [UIFocusGroupPriorityPrioritized](prioritized.md): The focus group priority that indicates an item is more important than others.
- [UIFocusGroupPriorityCurrentlyFocused](currentlyfocused.md): The focus group priority of the currently focused item, the highest possible priority.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusgrouppriority/currentlyfocused](https://developer.apple.com/documentation/uikit/uifocusgrouppriority/currentlyfocused)

# currentlyFocused (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The focus group priority of the currently focused item, the highest possible priority.

## Declaration

```swift
static var currentlyFocused: UIFocusGroupPriority { get }
```

## See Also

### Constants

- [ignored](ignored.md): The lowest focus group priority, assigned by default.
- [previouslyFocused](previouslyfocused.md): The focus group priority of a previously focused item.
- [prioritized](prioritized.md): The focus group priority that indicates an item is more important than others.

# UIFocusGroupPriorityCurrentlyFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The focus group priority of the currently focused item, the highest possible priority.

## Declaration

```objectivec
static const UIFocusGroupPriority UIFocusGroupPriorityCurrentlyFocused;
```

## See Also

### Constants

- [UIFocusGroupPriorityIgnored](ignored.md): The lowest focus group priority, assigned by default.
- [UIFocusGroupPriorityPreviouslyFocused](previouslyfocused.md): The focus group priority of a previously focused item.
- [UIFocusGroupPriorityPrioritized](prioritized.md): The focus group priority that indicates an item is more important than others.

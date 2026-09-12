> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/visibilitypriority/detachonlyifnecessary](https://developer.apple.com/documentation/appkit/nsstackview/visibilitypriority/detachonlyifnecessary)

# detachOnlyIfNecessary (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.

## Declaration

```swift
static var detachOnlyIfNecessary: NSStackView.VisibilityPriority { get }
```

## See Also

### Priorities

- [mustHold](musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [notVisible](notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

# NSStackViewVisibilityPriorityDetachOnlyIfNecessary (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.

## Declaration

```objectivec
static const NSStackViewVisibilityPriority NSStackViewVisibilityPriorityDetachOnlyIfNecessary;
```

## See Also

### Priorities

- [NSStackViewVisibilityPriorityMustHold](musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [NSStackViewVisibilityPriorityNotVisible](notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/visibilitypriority/notvisible](https://developer.apple.com/documentation/appkit/nsstackview/visibilitypriority/notvisible)

# notVisible (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

The minimum Auto Layout priority that forces a view to detach from the stack view.

## Declaration

```swift
static var notVisible: NSStackView.VisibilityPriority { get }
```

## See Also

### Priorities

- [mustHold](musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [detachOnlyIfNecessary](detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.

# NSStackViewVisibilityPriorityNotVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

The minimum Auto Layout priority that forces a view to detach from the stack view.

## Declaration

```objectivec
static const NSStackViewVisibilityPriority NSStackViewVisibilityPriorityNotVisible;
```

## See Also

### Priorities

- [NSStackViewVisibilityPriorityMustHold](musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [NSStackViewVisibilityPriorityDetachOnlyIfNecessary](detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/visibilitypriority/musthold](https://developer.apple.com/documentation/appkit/nsstackview/visibilitypriority/musthold)

# mustHold (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.

## Declaration

```swift
static var mustHold: NSStackView.VisibilityPriority { get }
```

## See Also

### Priorities

- [detachOnlyIfNecessary](detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.
- [notVisible](notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

# NSStackViewVisibilityPriorityMustHold (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.

## Declaration

```objectivec
static const NSStackViewVisibilityPriority NSStackViewVisibilityPriorityMustHold;
```

## See Also

### Priorities

- [NSStackViewVisibilityPriorityDetachOnlyIfNecessary](detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.
- [NSStackViewVisibilityPriorityNotVisible](notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

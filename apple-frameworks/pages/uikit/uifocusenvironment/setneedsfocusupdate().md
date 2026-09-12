> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/setneedsfocusupdate()](https://developer.apple.com/documentation/uikit/uifocusenvironment/setneedsfocusupdate())

# setNeedsFocusUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Submits a request to the focus engine for a focus update in this environment.

## Declaration

```swift
func setNeedsFocusUpdate()
```

<a id="Discussion"></a>

## Discussion

If this environment does not currently contain the focused view, calling this method has no effect. Otherwise, and if the focus update is accepted by the focus engine, focus is reset to the preferred focused view on the run loop cycle. If a parent of this environment is also requesting focus, the parent’s request takes priority.

## See Also

### Requesting focus update

- [updateFocusIfNeeded()](updatefocusifneeded%28%29.md): Tells the focus engine to force a focus update immediately.

# setNeedsFocusUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Submits a request to the focus engine for a focus update in this environment.

## Declaration

```objectivec
- (void) setNeedsFocusUpdate;
```

<a id="Discussion"></a>

## Discussion

If this environment does not currently contain the focused view, calling this method has no effect. Otherwise, and if the focus update is accepted by the focus engine, focus is reset to the preferred focused view on the run loop cycle. If a parent of this environment is also requesting focus, the parent’s request takes priority.

## See Also

### Requesting focus update

- [updateFocusIfNeeded](updatefocusifneeded%28%29.md): Tells the focus engine to force a focus update immediately.

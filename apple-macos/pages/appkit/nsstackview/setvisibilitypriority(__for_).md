> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/setvisibilitypriority(_:for:)](https://developer.apple.com/documentation/appkit/nsstackview/setvisibilitypriority(_:for:))

# setVisibilityPriority(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.

## Declaration

```swift
func setVisibilityPriority(_ priority: NSStackView.VisibilityPriority, for view: NSView)
```

## Parameters

- `priority`: The visibility priority for a specified view. Valid values are those in the [NSStackView.VisibilityPriority](visibilitypriority.md) enumeration.
- `view`: The view whose visibility priority you are setting.

  > **Important**

  >  If you attempt to set visibility priority for a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

When Auto Layout reduces the stack view’s size (such as when a user reduces the size of the window containing the stack view), causing one or more views to no longer fit, the stack view detaches views in order of increasing *visibility priority*. A view with lower visibility priority detaches before a view with higher visibility priority. A set of views with identical, detachable visibility priority are all detached or reattached together. A view with the highest possible visibility priority never detaches.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

The default visibility priority for a view is [mustHold](visibilitypriority/musthold.md), resulting in the view never detaching.

To allow a view to detach as needed by the stack view, set a visibility priority of [detachOnlyIfNecessary](visibilitypriority/detachonlyifnecessary.md). To force a view to detach regardless of the enclosing view’s size, set a visibility priority of [notVisible](visibilitypriority/notvisible.md). To explicitly reattach a view to a stack view, set a visibility priority of [mustHold](visibilitypriority/musthold.md).

## See Also

### Configuring Views in a Stack View

- [customSpacing(after:)](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriority(for:)](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [NSStackView.VisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [useDefaultSpacing](usedefaultspacing.md)

# setVisibilityPriority:forView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.

## Declaration

```objectivec
- (void) setVisibilityPriority:(NSStackViewVisibilityPriority) priority forView:(NSView *) view;
```

## Parameters

- `priority`: The visibility priority for a specified view. Valid values are those in the [NSStackViewVisibilityPriority](visibilitypriority.md) enumeration.
- `view`: The view whose visibility priority you are setting.

  > **Important**

  >  If you attempt to set visibility priority for a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

When Auto Layout reduces the stack view’s size (such as when a user reduces the size of the window containing the stack view), causing one or more views to no longer fit, the stack view detaches views in order of increasing *visibility priority*. A view with lower visibility priority detaches before a view with higher visibility priority. A set of views with identical, detachable visibility priority are all detached or reattached together. A view with the highest possible visibility priority never detaches.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

The default visibility priority for a view is [NSStackViewVisibilityPriorityMustHold](visibilitypriority/musthold.md), resulting in the view never detaching.

To allow a view to detach as needed by the stack view, set a visibility priority of [NSStackViewVisibilityPriorityDetachOnlyIfNecessary](visibilitypriority/detachonlyifnecessary.md). To force a view to detach regardless of the enclosing view’s size, set a visibility priority of [NSStackViewVisibilityPriorityNotVisible](visibilitypriority/notvisible.md). To explicitly reattach a view to a stack view, set a visibility priority of [NSStackViewVisibilityPriorityMustHold](visibilitypriority/musthold.md).

## See Also

### Configuring Views in a Stack View

- [customSpacingAfterView:](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriorityForView:](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [NSStackViewVisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)

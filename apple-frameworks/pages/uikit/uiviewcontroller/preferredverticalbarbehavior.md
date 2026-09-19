> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredverticalbarbehavior

# preferredVerticalBarBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The vertical bar behavior that this view controller prefers.

## Declaration

```swift
var preferredVerticalBarBehavior: UIVerticalBarBehavior { get }
```

<a id="discussion"></a>

## Discussion

Override this property to opt out of the vertical bar. Return `UIVerticalBarBehaviorDisabled` to hide the vertical bar. Defaults to `UIVerticalBarBehaviorAutomatic`.

Disable the vertical bar only for UIs that are better served by horizontal bars, such as a fullscreen video player with toolbar controls or a non-scrolling layout like a calculator. Treat it as a stable choice: avoid changing it frequently as the user navigates, and don’t toggle it for a single view controller as a function of that view’s state. To hide the bars and status bar on a given screen rather than change the layout, use the visibility APIs instead.

When the resolved configuration changes, the system animates the transition: content reflows to or from the horizontal bars while the status bar changes axis and the leading or trailing safe area inset for the vertical bar is added or removed.

## See Also

### Configuring bars on the vertical axis

- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [childForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md): Beta. Which child view controller, if any, should control the vertical bar behavior.
- [setNeedsUpdateOfVerticalBarConfiguration()](setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

# preferredVerticalBarBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The vertical bar behavior that this view controller prefers.

## Declaration

```objectivec
@property (nonatomic, readonly) UIVerticalBarBehavior preferredVerticalBarBehavior;
```

<a id="discussion"></a>

## Discussion

Override this property to opt out of the vertical bar. Return `UIVerticalBarBehaviorDisabled` to hide the vertical bar. Defaults to `UIVerticalBarBehaviorAutomatic`.

Disable the vertical bar only for UIs that are better served by horizontal bars, such as a fullscreen video player with toolbar controls or a non-scrolling layout like a calculator. Treat it as a stable choice: avoid changing it frequently as the user navigates, and don’t toggle it for a single view controller as a function of that view’s state. To hide the bars and status bar on a given screen rather than change the layout, use the visibility APIs instead.

When the resolved configuration changes, the system animates the transition: content reflows to or from the horizontal bars while the status bar changes axis and the leading or trailing safe area inset for the vertical bar is added or removed.

## See Also

### Configuring bars on the vertical axis

- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [childViewControllerForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md): Beta. Which child view controller, if any, should control the vertical bar behavior.
- [setNeedsUpdateOfVerticalBarConfiguration](setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

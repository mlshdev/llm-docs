> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/childforpreferredverticalbarbehavior

# childForPreferredVerticalBarBehavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Which child view controller, if any, should control the vertical bar behavior.

## Declaration

```swift
var childForPreferredVerticalBarBehavior: UIViewController? { get }
```

<a id="discussion"></a>

## Discussion

Return a child to defer the configuration to it, or `nil` to use the configuration provided by this view controller. The system container view controllers forward to their active content by default — `UINavigationController` to its top view controller, `UITabBarController` to its selected view controller — so a content view controller’s preference flows up to the window of the app or the nearest presentation.

## See Also

### Configuring bars on the vertical axis

- [preferredVerticalBarBehavior](preferredverticalbarbehavior.md): Beta. The vertical bar behavior that this view controller prefers.
- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [setNeedsUpdateOfVerticalBarConfiguration()](setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

# childViewControllerForPreferredVerticalBarBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Which child view controller, if any, should control the vertical bar behavior.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForPreferredVerticalBarBehavior;
```

<a id="discussion"></a>

## Discussion

Return a child to defer the configuration to it, or `nil` to use the configuration provided by this view controller. The system container view controllers forward to their active content by default — `UINavigationController` to its top view controller, `UITabBarController` to its selected view controller — so a content view controller’s preference flows up to the window of the app or the nearest presentation.

## See Also

### Configuring bars on the vertical axis

- [preferredVerticalBarBehavior](preferredverticalbarbehavior.md): Beta. The vertical bar behavior that this view controller prefers.
- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [setNeedsUpdateOfVerticalBarConfiguration](setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

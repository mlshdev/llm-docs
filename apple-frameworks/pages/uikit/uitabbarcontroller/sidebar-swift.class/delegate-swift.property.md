> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.property](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.property)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The object managing the delegate of the sidebar.

## Declaration

```swift
weak var delegate: (any UITabBarController.Sidebar.Delegate)? { get set }
```

## See Also

### Setting the sidebar delegate

- [UITabBarController.Sidebar.Delegate](delegate-swift.protocol.md)

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The object managing the delegate of the sidebar.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITabBarControllerSidebarDelegate> delegate;
```

## See Also

### Setting the sidebar delegate

- [UITabBarControllerSidebarDelegate](delegate-swift.protocol.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbardelegate/tabbar(_:didselect:)](https://developer.apple.com/documentation/uikit/uitabbardelegate/tabbar(_:didselect:))

# tabBar(\_:didSelect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sent to the delegate when the user selects a tab bar item.

## Declaration

```swift
optional func tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem)
```

## Parameters

- `tabBar`: The tab bar that is being customized.
- `item`: The tab bar item that was selected.

## See Also

### Customizing tab bars

- [tabBar(\_:willBeginCustomizing:)](tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar(\_:didBeginCustomizing:)](tabbar%28__didbegincustomizing_%29.md): Sent to the delegate after the customizing modal view is displayed.
- [tabBar(\_:willEndCustomizing:changed:)](tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar(\_:didEndCustomizing:changed:)](tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.

# tabBar:didSelectItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Sent to the delegate when the user selects a tab bar item.

## Declaration

```objectivec
- (void) tabBar:(UITabBar *) tabBar didSelectItem:(UITabBarItem *) item;
```

## Parameters

- `tabBar`: The tab bar that is being customized.
- `item`: The tab bar item that was selected.

## See Also

### Customizing tab bars

- [tabBar:willBeginCustomizingItems:](tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar:didBeginCustomizingItems:](tabbar%28__didbegincustomizing_%29.md): Sent to the delegate after the customizing modal view is displayed.
- [tabBar:willEndCustomizingItems:changed:](tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar:didEndCustomizingItems:changed:](tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbardelegate/tabbar(_:didbegincustomizing:)](https://developer.apple.com/documentation/uikit/uitabbardelegate/tabbar(_:didbegincustomizing:))

# tabBar(\_:didBeginCustomizing:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Sent to the delegate after the customizing modal view is displayed.

## Declaration

```swift
optional func tabBar(_ tabBar: UITabBar, didBeginCustomizing items: [UITabBarItem])
```

## Parameters

- `tabBar`: The tab bar that is being customized.
- `items`: The items on the customizing modal view.

## See Also

### Customizing tab bars

- [tabBar(\_:willBeginCustomizing:)](tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar(\_:willEndCustomizing:changed:)](tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar(\_:didEndCustomizing:changed:)](tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.
- [tabBar(\_:didSelect:)](tabbar%28__didselect_%29.md): Sent to the delegate when the user selects a tab bar item.

# tabBar:didBeginCustomizingItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst

Sent to the delegate after the customizing modal view is displayed.

## Declaration

```objectivec
- (void) tabBar:(UITabBar *) tabBar didBeginCustomizingItems:(NSArray<UITabBarItem *> *) items;
```

## Parameters

- `tabBar`: The tab bar that is being customized.
- `items`: The items on the customizing modal view.

## See Also

### Customizing tab bars

- [tabBar:willBeginCustomizingItems:](tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar:willEndCustomizingItems:changed:](tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar:didEndCustomizingItems:changed:](tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.
- [tabBar:didSelectItem:](tabbar%28__didselect_%29.md): Sent to the delegate when the user selects a tab bar item.

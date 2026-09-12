> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbardelegate](https://developer.apple.com/documentation/uikit/uitabbardelegate)

# UITabBarDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [UITabBarDelegate](uitabbardelegate.md) protocol defines optional methods for a delegate of a [UITabBar](uitabbar.md) object. The [UITabBar](uitabbar.md) class provides the ability for the user to reorder, remove, and add items to the tab bar; this process is referred to as customizing the tab bar. The tab bar delegate receives messages when customizing occurs.

## Declaration

```swift
@MainActor protocol UITabBarDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Send [beginCustomizingItems(\_:)](uitabbar/begincustomizingitems%28__%29.md) to a [UITabBar](uitabbar.md) object to begin customizing. Implement the methods in Customizing tab bars to intervene while a user is customizing a tab bar. The customizing modal view is dismissed when the user taps the Done button on the modal view.

## Topics

### Customizing tab bars

- [tabBar(\_:willBeginCustomizing:)](uitabbardelegate/tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar(\_:didBeginCustomizing:)](uitabbardelegate/tabbar%28__didbegincustomizing_%29.md): Sent to the delegate after the customizing modal view is displayed.
- [tabBar(\_:willEndCustomizing:changed:)](uitabbardelegate/tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar(\_:didEndCustomizing:changed:)](uitabbardelegate/tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.
- [tabBar(\_:didSelect:)](uitabbardelegate/tabbar%28__didselect_%29.md): Sent to the delegate when the user selects a tab bar item.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITabBarController](uitabbarcontroller.md)

## See Also

### Customizing the tab bar behavior

- [delegate](uitabbar/delegate.md): The tab bar’s delegate object.

# UITabBarDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [UITabBarDelegate](uitabbardelegate.md) protocol defines optional methods for a delegate of a [UITabBar](uitabbar.md) object. The [UITabBar](uitabbar.md) class provides the ability for the user to reorder, remove, and add items to the tab bar; this process is referred to as customizing the tab bar. The tab bar delegate receives messages when customizing occurs.

## Declaration

```objectivec
@protocol UITabBarDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Send [beginCustomizingItems:](uitabbar/begincustomizingitems%28__%29.md) to a [UITabBar](uitabbar.md) object to begin customizing. Implement the methods in Customizing tab bars to intervene while a user is customizing a tab bar. The customizing modal view is dismissed when the user taps the Done button on the modal view.

## Topics

### Customizing tab bars

- [tabBar:willBeginCustomizingItems:](uitabbardelegate/tabbar%28__willbegincustomizing_%29.md): Sent to the delegate before the customizing modal view is displayed.
- [tabBar:didBeginCustomizingItems:](uitabbardelegate/tabbar%28__didbegincustomizing_%29.md): Sent to the delegate after the customizing modal view is displayed.
- [tabBar:willEndCustomizingItems:changed:](uitabbardelegate/tabbar%28__willendcustomizing_changed_%29.md): Sent to the delegate before the customizing modal view is dismissed.
- [tabBar:didEndCustomizingItems:changed:](uitabbardelegate/tabbar%28__didendcustomizing_changed_%29.md): Sent to the delegate after the customizing modal view is dismissed.
- [tabBar:didSelectItem:](uitabbardelegate/tabbar%28__didselect_%29.md): Sent to the delegate when the user selects a tab bar item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITabBarController](uitabbarcontroller.md)

## See Also

### Customizing the tab bar behavior

- [delegate](uitabbar/delegate.md): The tab bar’s delegate object.

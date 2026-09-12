> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/delegate](https://developer.apple.com/documentation/uikit/uitabbar/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar’s delegate object.

## Declaration

```swift
weak var delegate: (any UITabBarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate to track the selection of tab bar items and to respond to the user customization of the tab bar. The default value of this property is `nil`.

For more information on how to implement the methods of this protocol, see [UITabBarDelegate](../uitabbardelegate.md).

## See Also

### Customizing the tab bar behavior

- [UITabBarDelegate](../uitabbardelegate.md): The [UITabBarDelegate](../uitabbardelegate.md) protocol defines optional methods for a delegate of a [UITabBar](../uitabbar.md) object. The [UITabBar](../uitabbar.md) class provides the ability for the user to reorder, remove, and add items to the tab bar; this process is referred to as customizing the tab bar. The tab bar delegate receives messages when customizing occurs.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tab bar’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITabBarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate to track the selection of tab bar items and to respond to the user customization of the tab bar. The default value of this property is `nil`.

For more information on how to implement the methods of this protocol, see [UITabBarDelegate](../uitabbardelegate.md).

## See Also

### Customizing the tab bar behavior

- [UITabBarDelegate](../uitabbardelegate.md): The [UITabBarDelegate](../uitabbardelegate.md) protocol defines optional methods for a delegate of a [UITabBar](../uitabbar.md) object. The [UITabBar](../uitabbar.md) class provides the ability for the user to reorder, remove, and add items to the tab bar; this process is referred to as customizing the tab bar. The tab bar delegate receives messages when customizing occurs.

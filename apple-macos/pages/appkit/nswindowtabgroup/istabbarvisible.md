> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtabgroup/istabbarvisible](https://developer.apple.com/documentation/appkit/nswindowtabgroup/istabbarvisible)

# isTabBarVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value indicating whether the tabbed window group currently displays a tab bar.

## Declaration

```swift
var isTabBarVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Typically, a tabbed window displays a tab bar if there is more than one window in the tabbing group. The tab bar can also be manually toggled using the [toggleTabBar(\_:)](../nswindow/toggletabbar%28__%29.md) method.

## See Also

### Configuring the Tab User Interface

- [isOverviewVisible](isoverviewvisible.md): A Boolean value indicating if the tab overview is currently displayed.

# tabBarVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value indicating whether the tabbed window group currently displays a tab bar.

## Declaration

```objectivec
@property (readonly, getter=isTabBarVisible) BOOL tabBarVisible;
```

<a id="Discussion"></a>

## Discussion

Typically, a tabbed window displays a tab bar if there is more than one window in the tabbing group. The tab bar can also be manually toggled using the [toggleTabBar:](../nswindow/toggletabbar%28__%29.md) method.

## See Also

### Configuring the Tab User Interface

- [overviewVisible](isoverviewvisible.md): A Boolean value indicating if the tab overview is currently displayed.

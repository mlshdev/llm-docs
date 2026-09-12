> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/tabs](https://developer.apple.com/documentation/uikit/uitabbarcontroller/tabs)

# tabs (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An array of tabs that the tab bar displays.

## Declaration

```swift
var tabs: [UITab] { get set }
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

To set the tab bar’s content, assign an array of [UITab](../uitab.md) objects to this property. For more information, see [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Assigning tabs

- [setTabs(\_:animated:)](settabs%28__animated_%29.md): Sets the root tabs of the tab bar controller, with an option to animate the change.
- [performBatchUpdates(\_:)](performbatchupdates%28__%29.md): Animates multiple tab changes as a single update.

# tabs (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An array of tabs that the tab bar displays.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<__kindof UITab *> * tabs;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

To set the tab bar’s content, assign an array of [UITab](../uitab.md) objects to this property. For more information, see [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Assigning tabs

- [setTabs:animated:](settabs%28__animated_%29.md): Sets the root tabs of the tab bar controller, with an option to animate the change.
- [performBatchUpdates:](performbatchupdates%28__%29.md): Animates multiple tab changes as a single update.

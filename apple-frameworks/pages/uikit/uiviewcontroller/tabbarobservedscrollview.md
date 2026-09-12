> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/tabbarobservedscrollview](https://developer.apple.com/documentation/uikit/uiviewcontroller/tabbarobservedscrollview)

# tabBarObservedScrollView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 27.0)

The full-screen scroll view to synchronize with a scrolling tab bar.

> Use [setContentScrollView(\_:for:)](setcontentscrollview%28__for_%29.md) instead.

## Declaration

```swift
var tabBarObservedScrollView: UIScrollView? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, the position of the tab bar remains fixed while content scrolls underneath it. Use this property in your tvOS apps to create an interface where the tab bar scrolls with the rest of your content. When you set the value of this property to a scroll view, UIKit synchronizes the position of the tab bar with the current scroll position of that scroll view. The default value of this property is `nil`.

## See Also

### Configuring tab bar content

- [tab](tab.md): The `UITab` instance that was used to create the receiver, and represents the view controller. Default is nil.
- [tabBarItem](tabbaritem.md): The tab bar item that represents the view controller when added to a tab bar controller.

# tabBarObservedScrollView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 27.0)

The full-screen scroll view to synchronize with a scrolling tab bar.

> Use [setContentScrollView:forEdge:](setcontentscrollview%28__for_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIScrollView * tabBarObservedScrollView;
```

<a id="Discussion"></a>

## Discussion

Typically, the position of the tab bar remains fixed while content scrolls underneath it. Use this property in your tvOS apps to create an interface where the tab bar scrolls with the rest of your content. When you set the value of this property to a scroll view, UIKit synchronizes the position of the tab bar with the current scroll position of that scroll view. The default value of this property is `nil`.

## See Also

### Configuring tab bar content

- [tab](tab.md): The `UITab` instance that was used to create the receiver, and represents the view controller. Default is nil.
- [tabBarItem](tabbaritem.md): The tab bar item that represents the view controller when added to a tab bar controller.

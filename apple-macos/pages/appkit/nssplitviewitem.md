> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem](https://developer.apple.com/documentation/appkit/nssplitviewitem)

# NSSplitViewItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An item in a split view controller.

## Declaration

```swift
class NSSplitViewItem
```

<a id="overview"></a>

## Overview

A split view item represents a single pane in a split view controller ([NSSplitViewController](nssplitviewcontroller.md)). Each split view item contains information about a child view controller in the split view controller, like its preferred thickness, holding priority, and collapsed state.

To add one or more accessory views to the top or bottom of a split view item, such as a search field above a list, use the [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md) and [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md) properties to specify  [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md) types.

## Topics

### Creating a split view item

- [init(sidebarWithViewController:)](nssplitviewitem/init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [init(contentListWithViewController:)](nssplitviewitem/init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [init(viewController:)](nssplitviewitem/init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [init(inspectorWithViewController:)](nssplitviewitem/init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.

### Managing the item thickness

- [automaticMaximumThickness](nssplitviewitem/automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](nssplitviewitem/preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](nssplitviewitem/minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](nssplitviewitem/maximumthickness.md): The maximum thickness of the split view item.
- [unspecifiedDimension](nssplitviewitem/unspecifieddimension.md): A constant that resets a dimension’s value.

### Getting Auto Layout behaviors

- [holdingPriority](nssplitviewitem/holdingpriority.md): The priority for a split view item to hold its size.
- [automaticallyAdjustsSafeAreaInsets](nssplitviewitem/automaticallyadjustssafeareainsets.md): When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.

### Getting the item behavior

- [behavior](nssplitviewitem/behavior-swift.property.md): The standard behavior type of the split view item.
- [NSSplitViewItem.Behavior](nssplitviewitem/behavior-swift.enum.md): Constants that describe the behavior of the split view item.

### Collapsing and expanding the item

- [isCollapsed](nssplitviewitem/iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](nssplitviewitem/cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](nssplitviewitem/collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItem.CollapseBehavior](nssplitviewitem/collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [isSpringLoaded](nssplitviewitem/isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](nssplitviewitem/cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

### Customizing appearance

- [allowsFullHeightLayout](nssplitviewitem/allowsfullheightlayout.md): A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.
- [titlebarSeparatorStyle](nssplitviewitem/titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.

### Configuring accessory views

- [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md): The following methods allow you to add accessory views to the top/bottom of this splitViewItem. See `NSSplitViewItemAccessoryViewController` for more details.
- [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md)
- [addTopAlignedAccessoryViewController(\_:)](nssplitviewitem/addtopalignedaccessoryviewcontroller%28__%29.md)
- [insertTopAlignedAccessoryViewController(\_:at:)](nssplitviewitem/inserttopalignedaccessoryviewcontroller%28__at_%29.md)
- [removeTopAlignedAccessoryViewController(at:)](nssplitviewitem/removetopalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [addBottomAlignedAccessoryViewController(\_:)](nssplitviewitem/addbottomalignedaccessoryviewcontroller%28__%29.md)
- [insertBottomAlignedAccessoryViewController(\_:at:)](nssplitviewitem/insertbottomalignedaccessoryviewcontroller%28__at_%29.md)
- [removeBottomAlignedAccessoryViewController(at:)](nssplitviewitem/removebottomalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)

### Getting the View Controller

- [viewController](nssplitviewitem/viewcontroller.md): The view controller that the split view item represents.

### Initializers

- [init(coder:)](nssplitviewitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Split View Interface

- [NSSplitViewController](nssplitviewcontroller.md): An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.
- [NSSplitView](nssplitview.md): A view that arranges two or more views in a linear stack running horizontally or vertically.

# NSSplitViewItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An item in a split view controller.

## Declaration

```objectivec
@interface NSSplitViewItem : NSObject
```

<a id="overview"></a>

## Overview

A split view item represents a single pane in a split view controller ([NSSplitViewController](nssplitviewcontroller.md)). Each split view item contains information about a child view controller in the split view controller, like its preferred thickness, holding priority, and collapsed state.

To add one or more accessory views to the top or bottom of a split view item, such as a search field above a list, use the [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md) and [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md) properties to specify  [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md) types.

## Topics

### Creating a split view item

- [sidebarWithViewController:](nssplitviewitem/init%28sidebarwithviewcontroller_%29.md): Creates a split view item that represents a sidebar for the specified view controller.
- [contentListWithViewController:](nssplitviewitem/init%28contentlistwithviewcontroller_%29.md): Creates a split view item that represents a content list for the specified view controller.
- [splitViewItemWithViewController:](nssplitviewitem/init%28viewcontroller_%29.md): Creates a split view item that represents the specified view controller.
- [inspectorWithViewController:](nssplitviewitem/init%28inspectorwithviewcontroller_%29.md): Creates a split view item that represents an inspector for the specified view controller.

### Managing the item thickness

- [automaticMaximumThickness](nssplitviewitem/automaticmaximumthickness.md): The maximum thickness of the split view item when it resizes due to automatic sizing.
- [preferredThicknessFraction](nssplitviewitem/preferredthicknessfraction.md): The preferred thickness of the split view item relative to the split view.
- [minimumThickness](nssplitviewitem/minimumthickness.md): The minimum thickness of the split view item.
- [maximumThickness](nssplitviewitem/maximumthickness.md): The maximum thickness of the split view item.
- [NSSplitViewItemUnspecifiedDimension](nssplitviewitem/unspecifieddimension.md): A constant that resets a dimension’s value.

### Getting Auto Layout behaviors

- [holdingPriority](nssplitviewitem/holdingpriority.md): The priority for a split view item to hold its size.
- [automaticallyAdjustsSafeAreaInsets](nssplitviewitem/automaticallyadjustssafeareainsets.md): When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.

### Getting the item behavior

- [behavior](nssplitviewitem/behavior-swift.property.md): The standard behavior type of the split view item.
- [NSSplitViewItemBehavior](nssplitviewitem/behavior-swift.enum.md): Constants that describe the behavior of the split view item.

### Collapsing and expanding the item

- [collapsed](nssplitviewitem/iscollapsed.md): A Boolean value that determines whether the child view controller that corresponds to the split view item is in a collapsed state in the split view controller.
- [canCollapse](nssplitviewitem/cancollapse.md): A Boolean value that determines whether a user interaction can collapse the child view controller that corresponds to the split view item.
- [collapseBehavior](nssplitviewitem/collapsebehavior-swift.property.md): The resizing behavior when the split view item toggles its collapsed state.
- [NSSplitViewItemCollapseBehavior](nssplitviewitem/collapsebehavior-swift.enum.md): Constants that describe the split view item’s collapsing behavior.
- [springLoaded](nssplitviewitem/isspringloaded.md): A Boolean value that determines whether the split view item can temporarily expand during a drag.
- [canCollapseFromWindowResize](nssplitviewitem/cancollapsefromwindowresize.md): A Boolean value that determines whether a window resize can collapse the child view controller that corresponds to the split view item.

### Customizing appearance

- [allowsFullHeightLayout](nssplitviewitem/allowsfullheightlayout.md): A Boolean value that indicates whether full-height sidebars appear in the window after you set a style mask.
- [titlebarSeparatorStyle](nssplitviewitem/titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.

### Configuring accessory views

- [topAlignedAccessoryViewControllers](nssplitviewitem/topalignedaccessoryviewcontrollers.md): The following methods allow you to add accessory views to the top/bottom of this splitViewItem. See `NSSplitViewItemAccessoryViewController` for more details.
- [bottomAlignedAccessoryViewControllers](nssplitviewitem/bottomalignedaccessoryviewcontrollers.md)
- [addTopAlignedAccessoryViewController:](nssplitviewitem/addtopalignedaccessoryviewcontroller%28__%29.md)
- [insertTopAlignedAccessoryViewController:atIndex:](nssplitviewitem/inserttopalignedaccessoryviewcontroller%28__at_%29.md)
- [removeTopAlignedAccessoryViewControllerAtIndex:](nssplitviewitem/removetopalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [addBottomAlignedAccessoryViewController:](nssplitviewitem/addbottomalignedaccessoryviewcontroller%28__%29.md)
- [insertBottomAlignedAccessoryViewController:atIndex:](nssplitviewitem/insertbottomalignedaccessoryviewcontroller%28__at_%29.md)
- [removeBottomAlignedAccessoryViewControllerAtIndex:](nssplitviewitem/removebottomalignedaccessoryviewcontroller%28at_%29.md): NOTE: you can use this method, or `-removeFromParentViewController:`, whichever is easier.
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)

### Getting the View Controller

- [viewController](nssplitviewitem/viewcontroller.md): The view controller that the split view item represents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Split View Interface

- [NSSplitViewController](nssplitviewcontroller.md): An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.
- [NSSplitView](nssplitview.md): A view that arranges two or more views in a linear stack running horizontally or vertically.

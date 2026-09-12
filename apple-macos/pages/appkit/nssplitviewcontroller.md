> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller](https://developer.apple.com/documentation/appkit/nssplitviewcontroller)

# NSSplitViewController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.

## Declaration

```swift
class NSSplitViewController
```

<a id="overview"></a>

## Overview

A split view controller manages a set of child views that it displays next to each other in a side-by-side or top-to-bottom arrangement.

A split view controller owns an array of split view items ([NSSplitViewItem](nssplitviewitem.md)), each of which has a view controller ([NSViewController](nsviewcontroller.md)) and corresponding view. The split view controller’s [splitView](nssplitviewcontroller/splitview.md) object manages those child views and the dividers between them.

By default, a split view arranges its child views vertically from top to bottom. To specify a horizontal (side-by-side) arrangement, implement the [isVertical](nssplitview/isvertical.md) property of the [splitView](nssplitviewcontroller/splitview.md) object to return [true](https://developer.apple.com/documentation/swift/true).

The split view controller serves as the delegate of its [splitView](nssplitviewcontroller/splitview.md) object. If you override a split view delegate method, your override must call `super`.

To use a split view controller, you must use Auto Layout for the child views and to support animations that collapse and reveal child views. For example, if you design a layout that contains two views, a content area and an optional sidebar, you employ Auto Layout constraints to specify whether the content area shrinks or remains the same size when the sidebar becomes visible.

A split view controller employs lazy loading of its views. For example, adding a collapsed split view item as a new child doesn’t load the associated view until it shows.

For more information about using [NSSplitViewController](nssplitviewcontroller.md) in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

## Topics

### Configuring and Managing a Split View Controller

- [splitView](nssplitviewcontroller/splitview.md): The split view that the split view controller manages.
- [splitViewItem(for:)](nssplitviewcontroller/splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [splitViewItems](nssplitviewcontroller/splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.

### Modifying a Split View Controller

- [addSplitViewItem(\_:)](nssplitviewcontroller/addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [insertSplitViewItem(\_:at:)](nssplitviewcontroller/insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.
- [removeSplitViewItem(\_:)](nssplitviewcontroller/removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.

### Managing Sidebars

- [toggleSidebar(\_:)](nssplitviewcontroller/togglesidebar%28__%29.md): Collapses or expands the first sidebar in the split view controller using an animation.
- [minimumThicknessForInlineSidebars](nssplitviewcontroller/minimumthicknessforinlinesidebars.md): The minimum thickness for a sidebar before it automatically collapses.
- [automaticDimension](nssplitviewcontroller/automaticdimension.md): The default value to apply to a dimension.

### Managing Inspectors

- [toggleInspector(\_:)](nssplitviewcontroller/toggleinspector%28__%29.md): Collapses or expands the first inspector in the split view controller using an animation.

### Responding to View Events

- [viewDidLoad()](nssplitviewcontroller/viewdidload%28%29.md): Configures the split view controller after its view loads into memory.

### Supporting Protocol Requirements

- [Protocol Implementations](nssplitviewcontroller-protocol-implementations.md): Access the split view controller’s implementations of protocol methods.

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](nssegueperforming.md)
- [NSSplitViewDelegate](nssplitviewdelegate.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Split View Interface

- [NSSplitView](nssplitview.md): A view that arranges two or more views in a linear stack running horizontally or vertically.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.

# NSSplitViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that manages an array of adjacent child views, and has a split view object for managing dividers between those views.

## Declaration

```objectivec
@interface NSSplitViewController : NSViewController
```

<a id="overview"></a>

## Overview

A split view controller manages a set of child views that it displays next to each other in a side-by-side or top-to-bottom arrangement.

A split view controller owns an array of split view items ([NSSplitViewItem](nssplitviewitem.md)), each of which has a view controller ([NSViewController](nsviewcontroller.md)) and corresponding view. The split view controller’s [splitView](nssplitviewcontroller/splitview.md) object manages those child views and the dividers between them.

By default, a split view arranges its child views vertically from top to bottom. To specify a horizontal (side-by-side) arrangement, implement the [vertical](nssplitview/isvertical.md) property of the [splitView](nssplitviewcontroller/splitview.md) object to return [true](https://developer.apple.com/documentation/swift/true).

The split view controller serves as the delegate of its [splitView](nssplitviewcontroller/splitview.md) object. If you override a split view delegate method, your override must call `super`.

To use a split view controller, you must use Auto Layout for the child views and to support animations that collapse and reveal child views. For example, if you design a layout that contains two views, a content area and an optional sidebar, you employ Auto Layout constraints to specify whether the content area shrinks or remains the same size when the sidebar becomes visible.

A split view controller employs lazy loading of its views. For example, adding a collapsed split view item as a new child doesn’t load the associated view until it shows.

For more information about using [NSSplitViewController](nssplitviewcontroller.md) in your app, see [Navigating Hierarchical Data Using Outline and Split Views](navigating-hierarchical-data-using-outline-and-split-views.md).

## Topics

### Configuring and Managing a Split View Controller

- [splitView](nssplitviewcontroller/splitview.md): The split view that the split view controller manages.
- [splitViewItemForViewController:](nssplitviewcontroller/splitviewitem%28for_%29.md): Returns the corresponding split view item for the specified child view controller of the split view controller.
- [splitViewItems](nssplitviewcontroller/splitviewitems.md): The array of split view items that correspond to the split view controller’s child view controllers.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.

### Modifying a Split View Controller

- [addSplitViewItem:](nssplitviewcontroller/addsplitviewitem%28__%29.md): Adds a split view item to the end of the array of split view items.
- [insertSplitViewItem:atIndex:](nssplitviewcontroller/insertsplitviewitem%28__at_%29.md): Adds a split view item to the array of split view items at the specified index position.
- [removeSplitViewItem:](nssplitviewcontroller/removesplitviewitem%28__%29.md): Removes a specified split view item from the split view controller.

### Managing Sidebars

- [toggleSidebar:](nssplitviewcontroller/togglesidebar%28__%29.md): Collapses or expands the first sidebar in the split view controller using an animation.
- [minimumThicknessForInlineSidebars](nssplitviewcontroller/minimumthicknessforinlinesidebars.md): The minimum thickness for a sidebar before it automatically collapses.
- [NSSplitViewControllerAutomaticDimension](nssplitviewcontroller/automaticdimension.md): The default value to apply to a dimension.

### Managing Inspectors

- [toggleInspector:](nssplitviewcontroller/toggleinspector%28__%29.md): Collapses or expands the first inspector in the split view controller using an animation.

### Responding to View Events

- [viewDidLoad](nssplitviewcontroller/viewdidload%28%29.md): Configures the split view controller after its view loads into memory.

### Supporting Protocol Requirements

- [Protocol Implementations](nssplitviewcontroller-protocol-implementations.md): Access the split view controller’s implementations of protocol methods.

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [NSSplitViewDelegate](nssplitviewdelegate.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Split View Interface

- [NSSplitView](nssplitview.md): A view that arranges two or more views in a linear stack running horizontally or vertically.
- [NSSplitViewItem](nssplitviewitem.md): An item in a split view controller.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller](https://developer.apple.com/documentation/appkit/nstabviewcontroller)

# NSTabViewController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.

## Declaration

```swift
class NSTabViewController
```

<a id="overview"></a>

## Overview

Each page of content is managed by a separate child view controller. Navigation between child view controllers is accomplished with the help of an [NSTabView](nstabview.md) object, which the tab view controller manages. When the user selects a new tab, the tab view controller displays the content associated with the associated child view controller, replacing the previous content.

Each tab is represented by an [NSTabViewItem](nstabviewitem.md) object, which contains the name of the tab and stores a pointer to the child view controller that manages the tab’s content. Normally, you configure the tab view items at design time using Interface Builder, but you can also add them programmatically using the methods of this class. Always assign a child view controller to new tab view items before adding those items to the tab view interface.

Another way to add tabs programmatically is to add child view controllers directly to the tab view controller. When you call the [addChild(\_:)](nsviewcontroller/addchild%28__%29.md) or [insertChild(\_:at:)](nsviewcontroller/insertchild%28__at_%29.md) method of this class, the tab view controller automatically creates a default [NSTabViewItem](nstabviewitem.md) object for the specified view controller. You can fetch the newly created item using the [tabViewItem(for:)](nstabviewcontroller/tabviewitem%28for_%29.md) method and configure it. Removing a child view controller with the [removeChild(at:)](nsviewcontroller/removechild%28at_%29.md) method similarly removes the corresponding tab view item.

The tab view controller lazily loads the views associated with each child view controller, creating them only after the corresponding tab is selected. When the tab view controller’s view is first displayed, only the view for the initially selected tab is loaded.

The [tabStyle](nstabviewcontroller/tabstyle-swift.property.md) property determines the appearance of the tab controls. A tab view controller can display a segmented control or display tabs in the window’s toolbar. You can also provide your own control for displaying tabs. The tab view controller automatically coordinates interactions between designated control and the corresponding [tabView](nstabviewcontroller/tabview.md) object.

## Topics

### Configuring the Tab View

- [tabStyle](nstabviewcontroller/tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](nstabviewcontroller/tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](nstabviewcontroller/transitionoptions.md): The animation options to use when switching between tabs.
- [canPropagateSelectedChildViewControllerTitle](nstabviewcontroller/canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

### Managing Tab View Items

- [tabViewItems](nstabviewcontroller/tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItem(for:)](nstabviewcontroller/tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem(\_:)](nstabviewcontroller/addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem(\_:at:)](nstabviewcontroller/inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem(\_:)](nstabviewcontroller/removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](nstabviewcontroller/selectedtabviewitemindex.md): The index of the selected tab.

### Responding to Tab View Events

- [viewDidLoad()](nstabviewcontroller/viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView(\_:shouldSelect:)](nstabviewcontroller/tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView(\_:willSelect:)](nstabviewcontroller/tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView(\_:didSelect:)](nstabviewcontroller/tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.

### Responding to Toolbar Events

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](nstabviewcontroller/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers(\_:)](nstabviewcontroller/toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers(\_:)](nstabviewcontroller/toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers(\_:)](nstabviewcontroller/toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items

### Constants

- [NSTabViewController.TabStyle](nstabviewcontroller/tabstyle-swift.enum.md): Tab control style options for a tab view controller.

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
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTabViewDelegate](nstabviewdelegate.md)
- [NSToolbarDelegate](nstoolbardelegate.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tab View Interface

- [NSTabView](nstabview.md): A multipage interface that displays one page at a time.
- [NSTabViewItem](nstabviewitem.md): An item in a tab view.

# NSTabViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.

## Declaration

```objectivec
@interface NSTabViewController : NSViewController
```

<a id="overview"></a>

## Overview

Each page of content is managed by a separate child view controller. Navigation between child view controllers is accomplished with the help of an [NSTabView](nstabview.md) object, which the tab view controller manages. When the user selects a new tab, the tab view controller displays the content associated with the associated child view controller, replacing the previous content.

Each tab is represented by an [NSTabViewItem](nstabviewitem.md) object, which contains the name of the tab and stores a pointer to the child view controller that manages the tab’s content. Normally, you configure the tab view items at design time using Interface Builder, but you can also add them programmatically using the methods of this class. Always assign a child view controller to new tab view items before adding those items to the tab view interface.

Another way to add tabs programmatically is to add child view controllers directly to the tab view controller. When you call the [addChildViewController:](nsviewcontroller/addchild%28__%29.md) or [insertChildViewController:atIndex:](nsviewcontroller/insertchild%28__at_%29.md) method of this class, the tab view controller automatically creates a default [NSTabViewItem](nstabviewitem.md) object for the specified view controller. You can fetch the newly created item using the [tabViewItemForViewController:](nstabviewcontroller/tabviewitem%28for_%29.md) method and configure it. Removing a child view controller with the [removeChildViewControllerAtIndex:](nsviewcontroller/removechild%28at_%29.md) method similarly removes the corresponding tab view item.

The tab view controller lazily loads the views associated with each child view controller, creating them only after the corresponding tab is selected. When the tab view controller’s view is first displayed, only the view for the initially selected tab is loaded.

The [tabStyle](nstabviewcontroller/tabstyle-swift.property.md) property determines the appearance of the tab controls. A tab view controller can display a segmented control or display tabs in the window’s toolbar. You can also provide your own control for displaying tabs. The tab view controller automatically coordinates interactions between designated control and the corresponding [tabView](nstabviewcontroller/tabview.md) object.

## Topics

### Configuring the Tab View

- [tabStyle](nstabviewcontroller/tabstyle-swift.property.md): The style used to display the tabs.
- [tabView](nstabviewcontroller/tabview.md): The tab view that manages the views of the interface.
- [transitionOptions](nstabviewcontroller/transitionoptions.md): The animation options to use when switching between tabs.
- [canPropagateSelectedChildViewControllerTitle](nstabviewcontroller/canpropagateselectedchildviewcontrollertitle.md): A Boolean value indicating whether the tab view controller gets its title from the selected child view controller.

### Managing Tab View Items

- [tabViewItems](nstabviewcontroller/tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItemForViewController:](nstabviewcontroller/tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem:](nstabviewcontroller/addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem:atIndex:](nstabviewcontroller/inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem:](nstabviewcontroller/removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](nstabviewcontroller/selectedtabviewitemindex.md): The index of the selected tab.

### Responding to Tab View Events

- [viewDidLoad](nstabviewcontroller/viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView:shouldSelectTabViewItem:](nstabviewcontroller/tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView:willSelectTabViewItem:](nstabviewcontroller/tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView:didSelectTabViewItem:](nstabviewcontroller/tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.

### Responding to Toolbar Events

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](nstabviewcontroller/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers:](nstabviewcontroller/toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers:](nstabviewcontroller/toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers:](nstabviewcontroller/toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items

### Constants

- [NSTabViewControllerTabStyle](nstabviewcontroller/tabstyle-swift.enum.md): Tab control style options for a tab view controller.

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [NSTabViewDelegate](nstabviewdelegate.md)
- [NSToolbarDelegate](nstoolbardelegate.md)

## See Also

### Tab View Interface

- [NSTabView](nstabview.md): A multipage interface that displays one page at a time.
- [NSTabViewItem](nstabviewitem.md): An item in a tab view.

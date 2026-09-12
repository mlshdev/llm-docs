> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview](https://developer.apple.com/documentation/appkit/nstabview)

# NSTabView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A multipage interface that displays one page at a time.

## Declaration

```swift
class NSTabView
```

<a id="overview"></a>

## Overview

A tab view contains a row of tabs that give the appearance of folder tabs, as shown in the [Figure 1](nstabview.md#2555818). The user selects the desired page by clicking the appropriate tab or using the arrow keys to move between pages. Each page displays a view hierarchy provided by your app.

![](https://developer.apple.com/images/com.apple.appkit/media-2555818@2x.png)

## Topics

### Handling the Selection of Tabs

- [delegate](nstabview/delegate.md): The tab view’s delegate.
- [NSTabViewDelegate](nstabviewdelegate.md): The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.

### Adding and Removing Tabs

- [addTabViewItem(\_:)](nstabview/addtabviewitem%28__%29.md): Adds the specified tab item.
- [insertTabViewItem(\_:at:)](nstabview/inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.
- [removeTabViewItem(\_:)](nstabview/removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.

### Accessing Tabs

- [indexOfTabViewItem(\_:)](nstabview/indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItem(withIdentifier:)](nstabview/indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](nstabview/numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItem(at:)](nstabview/tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](nstabview/tabviewitems.md): The tab view’s array of tab view items.

### Configuring the Tab Attributes

- [tabViewType](nstabview/tabviewtype.md): The tab type to display the tabs.
- [NSTabView.TabType](nstabview/tabtype.md): These constants specify the tab view’s type as used by the [tabViewType](nstabview/tabviewtype.md) property.
- [tabPosition](nstabview/tabposition-swift.property.md)
- [NSTabView.TabPosition](nstabview/tabposition-swift.enum.md)
- [tabViewBorderType](nstabview/tabviewbordertype-swift.property.md)
- [NSTabView.TabViewBorderType](nstabview/tabviewbordertype-swift.enum.md)

### Selecting a Tab

- [selectFirstTabViewItem(\_:)](nstabview/selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem(\_:)](nstabview/selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem(\_:)](nstabview/selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem(\_:)](nstabview/selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem(\_:)](nstabview/selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItem(at:)](nstabview/selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItem(withIdentifier:)](nstabview/selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](nstabview/selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender(\_:)](nstabview/takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.

### Modifying the Font

- [font](nstabview/font.md): The font used for the tab view’s label text.

### Modifying Controls Tint

- [controlTint](nstabview/controltint.md): Deprecated. The tab view’s control tint.

### Manipulating the Background

- [drawsBackground](nstabview/drawsbackground.md): A Boolean value that indicates if the tab view draws a background color when its type is `NSNoTabsNoBorder`.

### Determining the Size

- [minimumSize](nstabview/minimumsize.md): The minimum size necessary for the tab view to display tabs in a useful way.
- [contentRect](nstabview/contentrect.md): The rectangle describing the content area of the tab view.
- [controlSize](nstabview/controlsize.md): The size of the tab view.

### Truncating Tab Labels

- [allowsTruncatedLabels](nstabview/allowstruncatedlabels.md): A Boolean value that indicates if the tab view allows truncating for labels that don’t fit on a tab.

### Event Handling

- [tabViewItem(at:)](nstabview/tabviewitem%28at_%29-8gnqw.md): Returns the tab view item at the specified point.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tab View Interface

- [NSTabViewController](nstabviewcontroller.md): A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.
- [NSTabViewItem](nstabviewitem.md): An item in a tab view.

# NSTabView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A multipage interface that displays one page at a time.

## Declaration

```objectivec
@interface NSTabView : NSView
```

<a id="overview"></a>

## Overview

A tab view contains a row of tabs that give the appearance of folder tabs, as shown in the [Figure 1](nstabview.md#2555818). The user selects the desired page by clicking the appropriate tab or using the arrow keys to move between pages. Each page displays a view hierarchy provided by your app.

![](https://developer.apple.com/images/com.apple.appkit/media-2555818@2x.png)

## Topics

### Handling the Selection of Tabs

- [delegate](nstabview/delegate.md): The tab view’s delegate.
- [NSTabViewDelegate](nstabviewdelegate.md): The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.

### Adding and Removing Tabs

- [addTabViewItem:](nstabview/addtabviewitem%28__%29.md): Adds the specified tab item.
- [insertTabViewItem:atIndex:](nstabview/inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.
- [removeTabViewItem:](nstabview/removetabviewitem%28__%29.md): Removes the specified item from the tab view’s array of tab view items.

### Accessing Tabs

- [indexOfTabViewItem:](nstabview/indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItemWithIdentifier:](nstabview/indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](nstabview/numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItemAtIndex:](nstabview/tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](nstabview/tabviewitems.md): The tab view’s array of tab view items.

### Configuring the Tab Attributes

- [tabViewType](nstabview/tabviewtype.md): The tab type to display the tabs.
- [NSTabViewType](nstabview/tabtype.md): These constants specify the tab view’s type as used by the [tabViewType](nstabview/tabviewtype.md) property.
- [tabPosition](nstabview/tabposition-swift.property.md)
- [NSTabPosition](nstabview/tabposition-swift.enum.md)
- [tabViewBorderType](nstabview/tabviewbordertype-swift.property.md)
- [NSTabViewBorderType](nstabview/tabviewbordertype-swift.enum.md)

### Selecting a Tab

- [selectFirstTabViewItem:](nstabview/selectfirsttabviewitem%28__%29.md): This action method selects the first tab view item.
- [selectLastTabViewItem:](nstabview/selectlasttabviewitem%28__%29.md): This action method selects the last tab view item.
- [selectNextTabViewItem:](nstabview/selectnexttabviewitem%28__%29.md): This action method selects the next tab view item in the sequence.
- [selectPreviousTabViewItem:](nstabview/selectprevioustabviewitem%28__%29.md): This action method selects the previous tab view item in the sequence.
- [selectTabViewItem:](nstabview/selecttabviewitem%28__%29.md): Selects the specified tab view item.
- [selectTabViewItemAtIndex:](nstabview/selecttabviewitem%28at_%29.md): Selects the tab view item specified by `index`.
- [selectTabViewItemWithIdentifier:](nstabview/selecttabviewitem%28withidentifier_%29.md): Selects the tab view item specified by `identifier`.
- [selectedTabViewItem](nstabview/selectedtabviewitem.md): The tab view item for the currently selected tab.
- [takeSelectedTabViewItemFromSender:](nstabview/takeselectedtabviewitemfromsender%28__%29.md): Sets the selected tab view item to the selected item obtained from the sender.

### Modifying the Font

- [font](nstabview/font.md): The font used for the tab view’s label text.

### Modifying Controls Tint

- [controlTint](nstabview/controltint.md): Deprecated. The tab view’s control tint.

### Manipulating the Background

- [drawsBackground](nstabview/drawsbackground.md): A Boolean value that indicates if the tab view draws a background color when its type is `NSNoTabsNoBorder`.

### Determining the Size

- [minimumSize](nstabview/minimumsize.md): The minimum size necessary for the tab view to display tabs in a useful way.
- [contentRect](nstabview/contentrect.md): The rectangle describing the content area of the tab view.
- [controlSize](nstabview/controlsize.md): The size of the tab view.

### Truncating Tab Labels

- [allowsTruncatedLabels](nstabview/allowstruncatedlabels.md): A Boolean value that indicates if the tab view allows truncating for labels that don’t fit on a tab.

### Event Handling

- [tabViewItemAtPoint:](nstabview/tabviewitem%28at_%29-8gnqw.md): Returns the tab view item at the specified point.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Tab View Interface

- [NSTabViewController](nstabviewcontroller.md): A container view controller that manages a tab view interface, which organizes multiple pages of content but displays only one page at a time.
- [NSTabViewItem](nstabviewitem.md): An item in a tab view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller)

# NCWidgetListViewController (Swift)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An object that provides a list view for displaying content in a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
class NCWidgetListViewController
```

<a id="overview"></a>

## Overview

The `NCWidgetListViewController` class provides a list view for displaying content in a Today widget. A list view controller works together with its delegate to display content and support user interaction with the list. To learn about the list view controller delegate methods, see [NCWidgetListViewDelegate](ncwidgetlistviewdelegate.md).

You store the contents of a widget as an array of objects in the list view controller’s [contents](ncwidgetlistviewcontroller/contents.md) property. To display the objects, you use a [delegate](ncwidgetlistviewcontroller/delegate.md) object, which provides a custom view controller for each object in `contents`. A list view controller also provides properties that make it easy to specify aspects of the list’s appearance and behavior, such as the number of rows to display, the presence of divider lines, and the ability to edit the list.

## Topics

### Displaying and Editing List Content

- [delegate](ncwidgetlistviewcontroller/delegate.md): Deprecated. The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.
- [NCWidgetListViewDelegate](ncwidgetlistviewdelegate.md): Deprecated. The interface for handling content display and editing in the list view of a macOS Today widget.

### Accessing Content

- [contents](ncwidgetlistviewcontroller/contents.md): Deprecated. An array of objects to display in the list view.
- [row(for:)](ncwidgetlistviewcontroller/row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.
- [viewController(atRow:makeIfNecessary:)](ncwidgetlistviewcontroller/viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.

### Customizing the List Appearance

- [minimumVisibleRowCount](ncwidgetlistviewcontroller/minimumvisiblerowcount.md): Deprecated. The minimum number of visible rows to display.
- [hasDividerLines](ncwidgetlistviewcontroller/hasdividerlines.md): Deprecated. A Boolean value that indicates whether list displays divider lines between rows.

### Supporting Editing

- [editing](ncwidgetlistviewcontroller/editing.md): Deprecated. A Boolean value that indicates whether the list is in editing mode.
- [showsAddButtonWhenEditing](ncwidgetlistviewcontroller/showsaddbuttonwhenediting.md): Deprecated. A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

# NCWidgetListViewController (Objective-C)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An object that provides a list view for displaying content in a macOS Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@interface NCWidgetListViewController : NSViewController
```

<a id="overview"></a>

## Overview

The `NCWidgetListViewController` class provides a list view for displaying content in a Today widget. A list view controller works together with its delegate to display content and support user interaction with the list. To learn about the list view controller delegate methods, see [NCWidgetListViewDelegate](ncwidgetlistviewdelegate.md).

You store the contents of a widget as an array of objects in the list view controller’s [contents](ncwidgetlistviewcontroller/contents.md) property. To display the objects, you use a [delegate](ncwidgetlistviewcontroller/delegate.md) object, which provides a custom view controller for each object in `contents`. A list view controller also provides properties that make it easy to specify aspects of the list’s appearance and behavior, such as the number of rows to display, the presence of divider lines, and the ability to edit the list.

## Topics

### Displaying and Editing List Content

- [delegate](ncwidgetlistviewcontroller/delegate.md): Deprecated. The list view controller’s delegate or `nil` if the receiver doesn’t have a delegate.
- [NCWidgetListViewDelegate](ncwidgetlistviewdelegate.md): Deprecated. The interface for handling content display and editing in the list view of a macOS Today widget.

### Accessing Content

- [contents](ncwidgetlistviewcontroller/contents.md): Deprecated. An array of objects to display in the list view.
- [rowForViewController:](ncwidgetlistviewcontroller/row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.
- [viewControllerAtRow:makeIfNecessary:](ncwidgetlistviewcontroller/viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.

### Customizing the List Appearance

- [minimumVisibleRowCount](ncwidgetlistviewcontroller/minimumvisiblerowcount.md): Deprecated. The minimum number of visible rows to display.
- [hasDividerLines](ncwidgetlistviewcontroller/hasdividerlines.md): Deprecated. A Boolean value that indicates whether list displays divider lines between rows.

### Supporting Editing

- [editing](ncwidgetlistviewcontroller/editing.md): Deprecated. A Boolean value that indicates whether the list is in editing mode.
- [showsAddButtonWhenEditing](ncwidgetlistviewcontroller/showsaddbuttonwhenediting.md): Deprecated. A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)

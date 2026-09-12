> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsuiviewtoolbaritem](https://developer.apple.com/documentation/uikit/nsuiviewtoolbaritem)

# NSUIViewToolbarItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+

An item in a window’s toolbar that hosts a custom UIKit view.

## Declaration

```swift
class NSUIViewToolbarItem
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

The [NSUIViewToolbarItem](nsuiviewtoolbaritem.md) class lets you display a [UIView](uiview.md) in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar). Use this class if you have a custom UIKit view you want to appear as a control in a toolbar when you build your app with Mac Catalyst.

For UIKit controls that support behavioral styles, set [preferredBehavioralStyle](uibutton/preferredbehavioralstyle.md) to [UIBehavioralStyle.mac](uibehavioralstyle/mac.md) if you want them to appear in the toolbar with the appearance and behavior of AppKit controls.

## Topics

### Creating a toolbar item

- [init(itemIdentifier:uiView:)](nsuiviewtoolbaritem/init%28itemidentifier_uiview_%29.md): Creates a toolbar item with the identifier and underlying UIKit view you specify.

### Managing the view

- [uiView](nsuiviewtoolbaritem/uiview.md): The UIKit view to host in an AppKit toolbar.

## Relationships

### Inherits From

- [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)

## See Also

### Items

- [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup): A group of subitems in a toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/controlrepresentation-swift.enum)
- [NSToolbarItemGroup.SelectionMode](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/selectionmode-swift.enum): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](https://developer.apple.com/documentation/appkit/nsmenutoolbaritem): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](https://developer.apple.com/documentation/appkit/nstrackingseparatortoolbaritem): A toolbar separator that aligns with the vertical split view in the same window.

# NSUIViewToolbarItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+

An item in a window’s toolbar that hosts a custom UIKit view.

## Declaration

```objectivec
@interface NSUIViewToolbarItem : NSToolbarItem
```

## Mentioned In

- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

The [NSUIViewToolbarItem](nsuiviewtoolbaritem.md) class lets you display a [UIView](uiview.md) in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar). Use this class if you have a custom UIKit view you want to appear as a control in a toolbar when you build your app with Mac Catalyst.

For UIKit controls that support behavioral styles, set [preferredBehavioralStyle](uibutton/preferredbehavioralstyle.md) to [UIBehavioralStyleMac](uibehavioralstyle/mac.md) if you want them to appear in the toolbar with the appearance and behavior of AppKit controls.

## Topics

### Creating a toolbar item

- [initWithItemIdentifier:uiView:](nsuiviewtoolbaritem/init%28itemidentifier_uiview_%29.md): Creates a toolbar item with the identifier and underlying UIKit view you specify.

### Managing the view

- [uiView](nsuiviewtoolbaritem/uiview.md): The UIKit view to host in an AppKit toolbar.

## Relationships

### Inherits From

- [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem)

## See Also

### Items

- [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem): A single item that appears in a window’s toolbar.
- [NSToolbarItemIdentifier](nstoolbaritemidentifier.md): UIKit-specific constants for the standard toolbar items that the system provides.
- [NSToolbarItemGroup](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup): A group of subitems in a toolbar item.
- [NSToolbarItemGroupControlRepresentation](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/controlrepresentation-swift.enum)
- [NSToolbarItemGroupSelectionMode](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/selectionmode-swift.enum): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](https://developer.apple.com/documentation/appkit/nsmenutoolbaritem): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](https://developer.apple.com/documentation/appkit/nstrackingseparatortoolbaritem): A toolbar separator that aligns with the vertical split view in the same window.

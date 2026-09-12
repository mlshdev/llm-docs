> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel)

# IKFilterBrowserPanel (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

Presents a user interface for browsing filters.

## Declaration

```swift
class IKFilterBrowserPanel
```

<a id="overview"></a>

## Overview

The `IKFilterBrowserPanel` class provides a user interface that allows users to browse Core Image filters ([CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class)), to preview a filter, and to get additional information about the filter, such as its description.

An `IKFilterBrowserPanel` object can be displayed as:

- a separate panel, that is, a utility window that floats on top of document windows
- a modal dialog
- a sheet, that is, a dialog that is attached to its parent window and must be dismissed by the user
- a view that an application can insert into a custom user  interface

An `IKFilterBrowserPanel` object can be configured through a style mask to use either the default or brushed metal look for windows. The size and number of visible controls are specified through an options dictionary. An `IKFilterBrowserPanel` object communicates selection changes through notifications.

The `IKFilterBrowserPanel` class allows the user to create filter collections that are stored with the `filterCollections` key in the `com.apple.CoreImageKit.plist` property list located in `~/Library/Preferences/`.

## Topics

### Getting a Filter Name

- [filterName()](ikfilterbrowserpanel/filtername%28%29.md): Returns the name of the filter that is currently selected in the filter browser.

### Displaying and Running the Panel

- [filterBrowserView(options:)](ikfilterbrowserpanel/filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [begin(options:modelessDelegate:didEnd:contextInfo:)](ikfilterbrowserpanel/begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheet(options:modalFor:modalDelegate:didEnd:contextInfo:)](ikfilterbrowserpanel/beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModal(options:)](ikfilterbrowserpanel/runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish(\_:)](ikfilterbrowserpanel/finish%28__%29.md): Closes a filter browser view.

### Creating a Filter Browser Panel

- [filterBrowserPanel(withStyleMask:)](ikfilterbrowserpanel/filterbrowserpanel%28withstylemask_%29.md): Creates a shared instance of the `IKFilterBrowserPanel` class.

### Constants

- [Filter Browser Option Keys](filter-browser-option-keys.md): Keys for filter browser options.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](../appkit/nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](../appkit/nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKFilterBrowserPanel (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

Presents a user interface for browsing filters.

## Declaration

```objectivec
@interface IKFilterBrowserPanel : NSPanel
```

<a id="overview"></a>

## Overview

The `IKFilterBrowserPanel` class provides a user interface that allows users to browse Core Image filters ([CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class)), to preview a filter, and to get additional information about the filter, such as its description.

An `IKFilterBrowserPanel` object can be displayed as:

- a separate panel, that is, a utility window that floats on top of document windows
- a modal dialog
- a sheet, that is, a dialog that is attached to its parent window and must be dismissed by the user
- a view that an application can insert into a custom user  interface

An `IKFilterBrowserPanel` object can be configured through a style mask to use either the default or brushed metal look for windows. The size and number of visible controls are specified through an options dictionary. An `IKFilterBrowserPanel` object communicates selection changes through notifications.

The `IKFilterBrowserPanel` class allows the user to create filter collections that are stored with the `filterCollections` key in the `com.apple.CoreImageKit.plist` property list located in `~/Library/Preferences/`.

## Topics

### Getting a Filter Name

- [filterName](ikfilterbrowserpanel/filtername%28%29.md): Returns the name of the filter that is currently selected in the filter browser.

### Displaying and Running the Panel

- [filterBrowserViewWithOptions:](ikfilterbrowserpanel/filterbrowserview%28options_%29.md): Returns a view that contains a filter browser.
- [beginWithOptions:modelessDelegate:didEndSelector:contextInfo:](ikfilterbrowserpanel/begin%28options_modelessdelegate_didend_contextinfo_%29.md): Displays the filter browser in a new utility window, unless the filter browser is already open.
- [beginSheetWithOptions:modalForWindow:modalDelegate:didEndSelector:contextInfo:](ikfilterbrowserpanel/beginsheet%28options_modalfor_modaldelegate_didend_contextinfo_%29.md): Displays the filter browser in a sheet—that is, a dialog that is attached to its parent window and must be dismissed by the user.
- [runModalWithOptions:](ikfilterbrowserpanel/runmodal%28options_%29.md): Displays the filter browser in a modal dialog that must be dismissed by the user but that is not attached to a window.
- [finish:](ikfilterbrowserpanel/finish%28__%29.md): Closes a filter browser view.

### Creating a Filter Browser Panel

- [filterBrowserPanelWithStyleMask:](ikfilterbrowserpanel/filterbrowserpanel%28withstylemask_%29.md): Creates a shared instance of the `IKFilterBrowserPanel` class.

### Constants

- [Filter Browser Option Keys](filter-browser-option-keys.md): Keys for filter browser options.

### Notifications

- [IKFilterBrowserWillPreviewFilterNotification](ikfilterbrowserwillpreviewfilternotification.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [IKFilterBrowserFilterSelectedNotification](ikfilterbrowserfilterselectednotification.md): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserFilterDoubleClickNotification](ikfilterbrowserfilterdoubleclicknotification.md): Posted when the user double-clicks a filter in the filter browser.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceview](https://developer.apple.com/documentation/quartz/ikscannerdeviceview)

# IKScannerDeviceView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.

## Declaration

```swift
class IKScannerDeviceView
```

## Topics

### Setting the Scanner Device

- [scannerDevice](ikscannerdeviceview/scannerdevice.md): The device used for scanning

### Setting the Device View’s Display Mode

- [mode](ikscannerdeviceview/mode.md): The display mode used by the device view.
- [hasDisplayModeAdvanced](ikscannerdeviceview/hasdisplaymodeadvanced.md): The property that determines whether the scanner view uses the advanced display mode.
- [hasDisplayModeSimple](ikscannerdeviceview/hasdisplaymodesimple.md): The property that determines whether the scanner view uses the simple display mode.

### Configuring Downloading

- [displaysDownloadsDirectoryControl](ikscannerdeviceview/displaysdownloadsdirectorycontrol.md): Determines whether the downloads directory control is displayed.
- [downloadsDirectory](ikscannerdeviceview/downloadsdirectory.md): The directory where scans are saved.
- [transferMode](ikscannerdeviceview/transfermode.md): Determines how the scanned content is provided to the delegate.
- [documentName](ikscannerdeviceview/documentname.md): Returns the document name.

### Specifying a Post Processing Application

- [displaysPostProcessApplicationControl](ikscannerdeviceview/displayspostprocessapplicationcontrol.md): Specifies whether the post processing application control is displayed.
- [postProcessApplication](ikscannerdeviceview/postprocessapplication.md): The URL of the application to use for post processing of the scan.

### Getting and Setting the Delegate

- [delegate](ikscannerdeviceview/delegate.md): The scanner device delegate

### Customizing Button Labels

- [overviewControlLabel](ikscannerdeviceview/overviewcontrollabel.md): Allows customization of the “Overview” label.
- [scanControlLabel](ikscannerdeviceview/scancontrollabel.md): Allows customization of the “Scan” label.

### Constants

- [IKScannerDeviceViewTransferMode](ikscannerdeviceviewtransfermode.md): These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.
- [IKScannerDeviceViewDisplayMode](ikscannerdeviceviewdisplaymode.md): These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

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
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKScannerDeviceView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.

## Declaration

```objectivec
@interface IKScannerDeviceView : NSView
```

## Topics

### Setting the Scanner Device

- [scannerDevice](ikscannerdeviceview/scannerdevice.md): The device used for scanning

### Setting the Device View’s Display Mode

- [mode](ikscannerdeviceview/mode.md): The display mode used by the device view.
- [hasDisplayModeAdvanced](ikscannerdeviceview/hasdisplaymodeadvanced.md): The property that determines whether the scanner view uses the advanced display mode.
- [hasDisplayModeSimple](ikscannerdeviceview/hasdisplaymodesimple.md): The property that determines whether the scanner view uses the simple display mode.

### Configuring Downloading

- [displaysDownloadsDirectoryControl](ikscannerdeviceview/displaysdownloadsdirectorycontrol.md): Determines whether the downloads directory control is displayed.
- [downloadsDirectory](ikscannerdeviceview/downloadsdirectory.md): The directory where scans are saved.
- [transferMode](ikscannerdeviceview/transfermode.md): Determines how the scanned content is provided to the delegate.
- [documentName](ikscannerdeviceview/documentname.md): Returns the document name.

### Specifying a Post Processing Application

- [displaysPostProcessApplicationControl](ikscannerdeviceview/displayspostprocessapplicationcontrol.md): Specifies whether the post processing application control is displayed.
- [postProcessApplication](ikscannerdeviceview/postprocessapplication.md): The URL of the application to use for post processing of the scan.

### Getting and Setting the Delegate

- [delegate](ikscannerdeviceview/delegate.md): The scanner device delegate

### Customizing Button Labels

- [overviewControlLabel](ikscannerdeviceview/overviewcontrollabel.md): Allows customization of the “Overview” label.
- [scanControlLabel](ikscannerdeviceview/scancontrollabel.md): Allows customization of the “Scan” label.

### Constants

- [IKScannerDeviceViewTransferMode](ikscannerdeviceviewtransfermode.md): These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.
- [IKScannerDeviceViewDisplayMode](ikscannerdeviceviewdisplaymode.md): These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

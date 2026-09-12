> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikdevicebrowserview](https://developer.apple.com/documentation/quartz/ikdevicebrowserview)

# IKDeviceBrowserView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.

## Declaration

```swift
class IKDeviceBrowserView
```

<a id="overview"></a>

## Overview

The [IKDeviceBrowserView](ikdevicebrowserview.md) delegate must conform to the [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md) protocol. The delegate provides methods to inform you of selection changes in the browser as well as errors encountered when creating the browser list.

## Topics

### Getting the Selected Device

- [selectedDevice](ikdevicebrowserview/selecteddevice.md): Returns the selected device.

### Specifying the Device Types to Display

- [displaysLocalCameras](ikdevicebrowserview/displayslocalcameras.md): Specifies whether local cameras are displayed by the browser.
- [displaysNetworkCameras](ikdevicebrowserview/displaysnetworkcameras.md): Specifies whether network cameras are displayed by the browser.
- [displaysLocalScanners](ikdevicebrowserview/displayslocalscanners.md): Specifies whether local scanners are displayed by the browser.
- [displaysNetworkScanners](ikdevicebrowserview/displaysnetworkscanners.md): Specifies whether network scanners are displayed by the browser.

### Specifying the Display Mode

- [mode](ikdevicebrowserview/mode.md): Specifies the browser display mode.

### Getting and Setting the Delegate

- [delegate](ikdevicebrowserview/delegate.md): Specifies the delegate object.

### Constants

- [IKDeviceBrowserViewDisplayMode](ikdevicebrowserviewdisplaymode.md): These constants specify the display mode of the device browser.

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
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKDeviceBrowserView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.

## Declaration

```objectivec
@interface IKDeviceBrowserView : NSView
```

<a id="overview"></a>

## Overview

The [IKDeviceBrowserView](ikdevicebrowserview.md) delegate must conform to the [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md) protocol. The delegate provides methods to inform you of selection changes in the browser as well as errors encountered when creating the browser list.

## Topics

### Getting the Selected Device

- [selectedDevice](ikdevicebrowserview/selecteddevice.md): Returns the selected device.

### Specifying the Device Types to Display

- [displaysLocalCameras](ikdevicebrowserview/displayslocalcameras.md): Specifies whether local cameras are displayed by the browser.
- [displaysNetworkCameras](ikdevicebrowserview/displaysnetworkcameras.md): Specifies whether network cameras are displayed by the browser.
- [displaysLocalScanners](ikdevicebrowserview/displayslocalscanners.md): Specifies whether local scanners are displayed by the browser.
- [displaysNetworkScanners](ikdevicebrowserview/displaysnetworkscanners.md): Specifies whether network scanners are displayed by the browser.

### Specifying the Display Mode

- [mode](ikdevicebrowserview/mode.md): Specifies the browser display mode.

### Getting and Setting the Delegate

- [delegate](ikdevicebrowserview/delegate.md): Specifies the delegate object.

### Constants

- [IKDeviceBrowserViewDisplayMode](ikdevicebrowserviewdisplaymode.md): These constants specify the display mode of the device browser.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

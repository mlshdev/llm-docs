> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilteruiview](https://developer.apple.com/documentation/quartz/ikfilteruiview)

# IKFilterUIView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

Input parameters for filtering core image filters.

## Declaration

```swift
class IKFilterUIView
```

<a id="overview"></a>

## Overview

The `IKFilterUIView` class provides a view that contains input parameter controls for a Core Image filter ([CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class)). You need to use this class when providing a user interface for a custom filter. The class creates a view that has an object controller for the given filter. It also retains the filter.

## Topics

### Creating and Initializing a Filter UI View

- [view(withFrame:filter:)](ikfilteruiview/view%28withframe_filter_%29.md): Creates a view that contains controls for the input parameters of a filter.
- [init(frame:filter:)](ikfilteruiview/init%28frame_filter_%29.md): Initializes a view that contains controls for the input parameters of a filter.

### Getting Data from the Filter View

- [filter()](ikfilteruiview/filter%28%29.md): Returns the Core Image filter associated with the view.
- [objectController()](ikfilteruiview/objectcontroller%28%29.md): Returns the object controller for the bindings between the filter and its view.

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
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKFilterUIView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

Input parameters for filtering core image filters.

## Declaration

```objectivec
@interface IKFilterUIView : NSView
```

<a id="overview"></a>

## Overview

The `IKFilterUIView` class provides a view that contains input parameter controls for a Core Image filter ([CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class)). You need to use this class when providing a user interface for a custom filter. The class creates a view that has an object controller for the given filter. It also retains the filter.

## Topics

### Creating and Initializing a Filter UI View

- [viewWithFrame:filter:](ikfilteruiview/view%28withframe_filter_%29.md): Creates a view that contains controls for the input parameters of a filter.
- [initWithFrame:filter:](ikfilteruiview/init%28frame_filter_%29.md): Initializes a view that contains controls for the input parameters of a filter.

### Getting Data from the Filter View

- [filter](ikfilteruiview/filter%28%29.md): Returns the Core Image filter associated with the view.
- [objectController](ikfilteruiview/objectcontroller%28%29.md): Returns the object controller for the bindings between the filter and its view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

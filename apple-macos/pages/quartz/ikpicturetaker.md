> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker](https://developer.apple.com/documentation/quartz/ikpicturetaker)

# IKPictureTaker (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.

## Declaration

```swift
class IKPictureTaker
```

## Topics

### Creating And Displaying The Picture Taker

- [pictureTaker()](ikpicturetaker/picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginSheet(for:withDelegate:didEnd:contextInfo:)](ikpicturetaker/beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [begin(withDelegate:didEnd:contextInfo:)](ikpicturetaker/begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:)](ikpicturetaker/popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal()](ikpicturetaker/runmodal%28%29.md): Opens a modal picture taker dialog.

### Getting and Setting Images

- [setInputImage(\_:)](ikpicturetaker/setinputimage%28__%29.md): Set the image input for the picture taker.
- [inputImage()](ikpicturetaker/inputimage%28%29.md): Returns the input image associated with the picture taker.
- [outputImage()](ikpicturetaker/outputimage%28%29.md): Returns the edited image.

### Getting and Setting Mirroring

- [setMirroring(\_:)](ikpicturetaker/setmirroring%28__%29.md): Controls whether the receiver enables video mirroring during snapshots.
- [mirroring()](ikpicturetaker/mirroring%28%29.md): Returns whether video mirroring is enabled during snapshots.

### Constants

- [Picture Taker Keys](picture-taker-keys.md): Keys for customizing the picture taker appearance and behavior. These values are set by sending the picture taker instance `setValue:forKey`.

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
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKPictureTaker (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.

## Declaration

```objectivec
@interface IKPictureTaker : NSPanel
```

## Topics

### Creating And Displaying The Picture Taker

- [pictureTaker](ikpicturetaker/picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:](ikpicturetaker/beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [beginPictureTakerWithDelegate:didEndSelector:contextInfo:](ikpicturetaker/begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:](ikpicturetaker/popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal](ikpicturetaker/runmodal%28%29.md): Opens a modal picture taker dialog.

### Getting and Setting Images

- [setInputImage:](ikpicturetaker/setinputimage%28__%29.md): Set the image input for the picture taker.
- [inputImage](ikpicturetaker/inputimage%28%29.md): Returns the input image associated with the picture taker.
- [outputImage](ikpicturetaker/outputimage%28%29.md): Returns the edited image.

### Getting and Setting Mirroring

- [setMirroring:](ikpicturetaker/setmirroring%28__%29.md): Controls whether the receiver enables video mirroring during snapshots.
- [mirroring](ikpicturetaker/mirroring%28%29.md): Returns whether video mirroring is enabled during snapshots.

### Constants

- [Picture Taker Keys](picture-taker-keys.md): Keys for customizing the picture taker appearance and behavior. These values are set by sending the picture taker instance `setValue:forKey`.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

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
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

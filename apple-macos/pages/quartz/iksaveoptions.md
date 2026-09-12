> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/iksaveoptions](https://developer.apple.com/documentation/quartz/iksaveoptions)

# IKSaveOptions (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.

## Declaration

```swift
class IKSaveOptions
```

## Topics

### Creating A Save Options Accessory View

- [init(imageProperties:imageUTType:)](iksaveoptions/init%28imageproperties_imageuttype_%29.md): Initializes a save options accessory pane for the provided image properties and uniform type identifier.
- [addAccessoryView(to:)](iksaveoptions/addaccessoryview%28to_%29.md): Adds `IKSaveOptions` accessory view to a `NSSavePanel`.

### Retrieving User Responses

- [imageProperties](iksaveoptions/imageproperties.md): Returns a dictionary of updated image properties that reflects the user’s selection.
- [imageUTType](iksaveoptions/imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.
- [userSelection](iksaveoptions/userselection.md): Returns a dictionary that contains the save options selected by the user.

### Getting and Setting the delegate

- [delegate](iksaveoptions/delegate.md): Specifies the delegate object.

### File Type Filtering

- [saveOptions(\_:shouldShowUTType:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/saveoptions%28_:shouldshowuttype:%29): Called to determine if the specified uniform type identifier should be shown in the save panel.

### Instance Properties

- [rememberLastSetting](iksaveoptions/rememberlastsetting.md)

### Instance Methods

- [add(to:)](iksaveoptions/add%28to_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

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
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKSaveOptions (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+

The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.

## Declaration

```objectivec
@interface IKSaveOptions : NSObject
```

## Topics

### Creating A Save Options Accessory View

- [initWithImageProperties:imageUTType:](iksaveoptions/init%28imageproperties_imageuttype_%29.md): Initializes a save options accessory pane for the provided image properties and uniform type identifier.
- [addSaveOptionsAccessoryViewToSavePanel:](iksaveoptions/addaccessoryview%28to_%29.md): Adds `IKSaveOptions` accessory view to a `NSSavePanel`.

### Retrieving User Responses

- [imageProperties](iksaveoptions/imageproperties.md): Returns a dictionary of updated image properties that reflects the user’s selection.
- [imageUTType](iksaveoptions/imageuttype.md): Returns the uniform type identifier that reflects the user’s selection.
- [userSelection](iksaveoptions/userselection.md): Returns a dictionary that contains the save options selected by the user.

### Getting and Setting the delegate

- [delegate](iksaveoptions/delegate.md): Specifies the delegate object.

### File Type Filtering

- [saveOptions:shouldShowUTType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/saveoptions%28_:shouldshowuttype:%29): Called to determine if the specified uniform type identifier should be shown in the save panel.

### Instance Properties

- [rememberLastSetting](iksaveoptions/rememberlastsetting.md)

### Instance Methods

- [addSaveOptionsToView:](iksaveoptions/add%28to_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

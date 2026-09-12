> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceview](https://developer.apple.com/documentation/quartz/ikcameradeviceview)

# IKCameraDeviceView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKCameraDeviceView` class displays the contents of the selected camera.

## Declaration

```swift
class IKCameraDeviceView
```

## Topics

### Getting and Setting the Camera Device

- [cameraDevice](ikcameradeviceview/cameradevice.md): The current camera device.

### View Display Mode

- [iconSize](ikcameradeviceview/iconsize.md): Specifies the icon size.
- [mode](ikcameradeviceview/mode.md): Specifies the display mode of the camera device view.
- [hasDisplayModeIcon](ikcameradeviceview/hasdisplaymodeicon.md): Returns whether the device view is being displayed in icon mode.
- [hasDisplayModeTable](ikcameradeviceview/hasdisplaymodetable.md): Returns whether the device view is being displayed in table mode.

### Selecting the File Transfer Mode

- [transferMode](ikcameradeviceview/transfermode.md): Determines how the contents are saved by the delegate.

### Configuring Download Interface and Downloading Files

- [canDownloadSelectedItems](ikcameradeviceview/candownloadselecteditems.md): Returns whether the selected items can be downloaded
- [downloadsDirectory](ikcameradeviceview/downloadsdirectory.md): Specifies the directory where files are downloaded
- [downloadSelectedItems(\_:)](ikcameradeviceview/downloadselecteditems%28__%29.md): Deletes the selected items from the camera.
- [downloadAllItems(\_:)](ikcameradeviceview/downloadallitems%28__%29.md): Downloads all the items.
- [downloadSelectedControlLabel](ikcameradeviceview/downloadselectedcontrollabel.md): Allows the “Download Selected” control to be renamed.
- [downloadAllControlLabel](ikcameradeviceview/downloadallcontrollabel.md): Allows the “Download All” control to be renamed.
- [displaysDownloadsDirectoryControl](ikcameradeviceview/displaysdownloadsdirectorycontrol.md): Specifies whether the downloads directory control should be displayed.

### Getting and Setting the Post Processing Application

- [displaysPostProcessApplicationControl](ikcameradeviceview/displayspostprocessapplicationcontrol.md): Displays whether the post process application control should be displayed.
- [postProcessApplication](ikcameradeviceview/postprocessapplication.md): The URL of the application used to post process the image.

### Deleting Selected Items

- [canDeleteSelectedItems](ikcameradeviceview/candeleteselecteditems.md): Returns whether the selected items can be deleted.
- [deleteSelectedItems(\_:)](ikcameradeviceview/deleteselecteditems%28__%29.md): Deletes the currently selected items.

### Selection Management

- [select(\_:byExtendingSelection:)](ikcameradeviceview/select%28__byextendingselection_%29.md): Invoked to select the specified files, extending the selection if specified.
- [selectedIndexes()](ikcameradeviceview/selectedindexes%28%29.md): The selected indexes of the camera files.

### Getting and Setting the Delegate

- [delegate](ikcameradeviceview/delegate.md): The camera device view delegate.

### Selected Item Rotation

- [canRotateSelectedItemsLeft](ikcameradeviceview/canrotateselecteditemsleft.md): Returns whether the selected items can be rotated left.
- [canRotateSelectedItemsRight](ikcameradeviceview/canrotateselecteditemsright.md): Returns whether the selected items can be rotated right.
- [rotateLeft(\_:)](ikcameradeviceview/rotateleft%28__%29.md): Rotates the selected image to the left.
- [rotateRight(\_:)](ikcameradeviceview/rotateright%28__%29.md): Rotates the selected image to the right.

### Constants

- [IKCameraDeviceViewDisplayMode](ikcameradeviceviewdisplaymode.md): These constants specify the display mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).
- [IKCameraDeviceViewTransferMode](ikcameradeviceviewtransfermode.md): These constants specify the transfer mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).

### Instance Methods

- [setCustomActionControl(\_:)](ikcameradeviceview/setcustomactioncontrol%28__%29.md)
- [setCustomDelete(\_:)](ikcameradeviceview/setcustomdelete%28__%29.md)
- [setCustomIconSizeSlider(\_:)](ikcameradeviceview/setcustomiconsizeslider%28__%29.md)
- [setCustomModeControl(\_:)](ikcameradeviceview/setcustommodecontrol%28__%29.md)
- [setCustomRotateControl(\_:)](ikcameradeviceview/setcustomrotatecontrol%28__%29.md)
- [setShowStatusInfoAsWindowSubtitle(\_:)](ikcameradeviceview/setshowstatusinfoaswindowsubtitle%28__%29.md)

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

- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
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

# IKCameraDeviceView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.6+

The `IKCameraDeviceView` class displays the contents of the selected camera.

## Declaration

```objectivec
@interface IKCameraDeviceView : NSView
```

## Topics

### Getting and Setting the Camera Device

- [cameraDevice](ikcameradeviceview/cameradevice.md): The current camera device.

### View Display Mode

- [iconSize](ikcameradeviceview/iconsize.md): Specifies the icon size.
- [mode](ikcameradeviceview/mode.md): Specifies the display mode of the camera device view.
- [hasDisplayModeIcon](ikcameradeviceview/hasdisplaymodeicon.md): Returns whether the device view is being displayed in icon mode.
- [hasDisplayModeTable](ikcameradeviceview/hasdisplaymodetable.md): Returns whether the device view is being displayed in table mode.

### Selecting the File Transfer Mode

- [transferMode](ikcameradeviceview/transfermode.md): Determines how the contents are saved by the delegate.

### Configuring Download Interface and Downloading Files

- [canDownloadSelectedItems](ikcameradeviceview/candownloadselecteditems.md): Returns whether the selected items can be downloaded
- [downloadsDirectory](ikcameradeviceview/downloadsdirectory.md): Specifies the directory where files are downloaded
- [downloadSelectedItems:](ikcameradeviceview/downloadselecteditems%28__%29.md): Deletes the selected items from the camera.
- [downloadAllItems:](ikcameradeviceview/downloadallitems%28__%29.md): Downloads all the items.
- [downloadSelectedControlLabel](ikcameradeviceview/downloadselectedcontrollabel.md): Allows the “Download Selected” control to be renamed.
- [downloadAllControlLabel](ikcameradeviceview/downloadallcontrollabel.md): Allows the “Download All” control to be renamed.
- [displaysDownloadsDirectoryControl](ikcameradeviceview/displaysdownloadsdirectorycontrol.md): Specifies whether the downloads directory control should be displayed.

### Getting and Setting the Post Processing Application

- [displaysPostProcessApplicationControl](ikcameradeviceview/displayspostprocessapplicationcontrol.md): Displays whether the post process application control should be displayed.
- [postProcessApplication](ikcameradeviceview/postprocessapplication.md): The URL of the application used to post process the image.

### Deleting Selected Items

- [canDeleteSelectedItems](ikcameradeviceview/candeleteselecteditems.md): Returns whether the selected items can be deleted.
- [deleteSelectedItems:](ikcameradeviceview/deleteselecteditems%28__%29.md): Deletes the currently selected items.

### Selection Management

- [selectIndexes:byExtendingSelection:](ikcameradeviceview/select%28__byextendingselection_%29.md): Invoked to select the specified files, extending the selection if specified.
- [selectedIndexes](ikcameradeviceview/selectedindexes%28%29.md): The selected indexes of the camera files.

### Getting and Setting the Delegate

- [delegate](ikcameradeviceview/delegate.md): The camera device view delegate.

### Selected Item Rotation

- [canRotateSelectedItemsLeft](ikcameradeviceview/canrotateselecteditemsleft.md): Returns whether the selected items can be rotated left.
- [canRotateSelectedItemsRight](ikcameradeviceview/canrotateselecteditemsright.md): Returns whether the selected items can be rotated right.
- [rotateLeft:](ikcameradeviceview/rotateleft%28__%29.md): Rotates the selected image to the left.
- [rotateRight:](ikcameradeviceview/rotateright%28__%29.md): Rotates the selected image to the right.

### Constants

- [IKCameraDeviceViewDisplayMode](ikcameradeviceviewdisplaymode.md): These constants specify the display mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).
- [IKCameraDeviceViewTransferMode](ikcameradeviceviewtransfermode.md): These constants specify the transfer mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).

### Instance Methods

- [setCustomActionControl:](ikcameradeviceview/setcustomactioncontrol%28__%29.md)
- [setCustomDeleteControl:](ikcameradeviceview/setcustomdelete%28__%29.md)
- [setCustomIconSizeSlider:](ikcameradeviceview/setcustomiconsizeslider%28__%29.md)
- [setCustomModeControl:](ikcameradeviceview/setcustommodecontrol%28__%29.md)
- [setCustomRotateControl:](ikcameradeviceview/setcustomrotatecontrol%28__%29.md)
- [setShowStatusInfoAsWindowSubtitle:](ikcameradeviceview/setshowstatusinfoaswindowsubtitle%28__%29.md)

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
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

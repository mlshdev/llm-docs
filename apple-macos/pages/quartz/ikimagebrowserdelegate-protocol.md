> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserdelegate-protocol](https://developer.apple.com/documentation/quartz/ikimagebrowserdelegate-protocol)

# IKImageBrowserDelegate Protocol (Swift)

**Framework:** Quartz

The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.

## Topics

### Performing Custom Tasks in Response to User Events

- [imageBrowser(\_:backgroundWasRightClickedWith:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:backgroundwasrightclickedwith:%29): Performs custom tasks when the user right-clicks the image browser view background.
- [imageBrowser(\_:cellWasRightClickedAt:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:cellwasrightclickedat:with:%29): Performs custom tasks when the user right-clicks an item in the image browser view.
- [imageBrowser(\_:cellWasDoubleClickedAt:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:cellwasdoubleclickedat:%29): Performs custom tasks when the user double-clicks an item in the image browser view.
- [imageBrowserSelectionDidChange(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowserselectiondidchange%28_:%29): Performs custom tasks when the selection changes.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

# IKImageBrowserDelegate Protocol (Objective-C)

**Framework:** Quartz

The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.

## Topics

### Performing Custom Tasks in Response to User Events

- [imageBrowser:backgroundWasRightClickedWithEvent:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:backgroundwasrightclickedwith:%29): Performs custom tasks when the user right-clicks the image browser view background.
- [imageBrowser:cellWasRightClickedAtIndex:withEvent:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:cellwasrightclickedat:with:%29): Performs custom tasks when the user right-clicks an item in the image browser view.
- [imageBrowser:cellWasDoubleClickedAtIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:cellwasdoubleclickedat:%29): Performs custom tasks when the user double-clicks an item in the image browser view.
- [imageBrowserSelectionDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowserselectiondidchange%28_:%29): Performs custom tasks when the selection changes.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

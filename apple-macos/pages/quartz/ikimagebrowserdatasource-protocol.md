> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserdatasource-protocol](https://developer.apple.com/documentation/quartz/ikimagebrowserdatasource-protocol)

# IKImageBrowserDataSource Protocol (Swift)

**Framework:** Quartz

The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md)  class uses to access the contents of its data source object.

## Topics

### Providing Information About Items (Required)

- [numberOfItems(inImageBrowser:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofitems%28inimagebrowser:%29): Returns the number of records managed by the data source object.
- [imageBrowser(\_:itemAt:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:itemat:%29): Returns an object for the item in an image browser view that corresponds to the specified index.

### Supporting Item Editing (Optional)

- [imageBrowser(\_:removeItemsAt:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:removeitemsat:%29): Signals that a remove operation should be applied to the specified items.
- [imageBrowser(\_:moveItemsAt:to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:moveitemsat:to:%29): Signals that the specified items should be moved to the specified destination.
- [imageBrowser(\_:writeItemsAt:to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:writeitemsat:to:%29): Signals that a drag should begin.

### Providing Information About Groups (Optional)

- [numberOfGroups(inImageBrowser:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofgroups%28inimagebrowser:%29): Returns the number of groups in an image browser view.
- [imageBrowser(\_:groupAt:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:groupat:%29): Returns the group at the specified index.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

# IKImageBrowserDataSource Protocol (Objective-C)

**Framework:** Quartz

The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md)  class uses to access the contents of its data source object.

## Topics

### Providing Information About Items (Required)

- [numberOfItemsInImageBrowser:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofitems%28inimagebrowser:%29): Returns the number of records managed by the data source object.
- [imageBrowser:itemAtIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:itemat:%29): Returns an object for the item in an image browser view that corresponds to the specified index.

### Supporting Item Editing (Optional)

- [imageBrowser:removeItemsAtIndexes:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:removeitemsat:%29): Signals that a remove operation should be applied to the specified items.
- [imageBrowser:moveItemsAtIndexes:toIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:moveitemsat:to:%29): Signals that the specified items should be moved to the specified destination.
- [imageBrowser:writeItemsAtIndexes:toPasteboard:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:writeitemsat:to:%29): Signals that a drag should begin.

### Providing Information About Groups (Optional)

- [numberOfGroupsInImageBrowser:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofgroups%28inimagebrowser:%29): Returns the number of groups in an image browser view.
- [imageBrowser:groupAtIndex:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser%28_:groupat:%29): Returns the group at the specified index.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

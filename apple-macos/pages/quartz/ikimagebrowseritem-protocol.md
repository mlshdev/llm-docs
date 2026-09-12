> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowseritem-protocol](https://developer.apple.com/documentation/quartz/ikimagebrowseritem-protocol)

# IKImageBrowserItem Protocol (Swift)

**Framework:** Quartz

The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.

## Topics

### Providing Required Information for an Image

- [imageUID()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageuid%28%29): Returns a unique string that identifies the data source item.
- [imageRepresentationType()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentationtype%28%29): Returns the representation type of the image to display.
- [imageRepresentation()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentation%28%29): Returns the image to display.

### Providing Optional Information for an Image

- [imageVersion()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageversion%28%29): Returns the version of the item.
- [imageTitle()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagetitle%28%29): Returns the display title of the image.
- [imageSubtitle()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagesubtitle%28%29): Returns the display subtitle of the image.

### Constants

- [Image Representation Types](image-representation-types.md): Representation types for images.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

# IKImageBrowserItem Protocol (Objective-C)

**Framework:** Quartz

The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.

## Topics

### Providing Required Information for an Image

- [imageUID](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageuid%28%29): Returns a unique string that identifies the data source item.
- [imageRepresentationType](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentationtype%28%29): Returns the representation type of the image to display.
- [imageRepresentation](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentation%28%29): Returns the image to display.

### Providing Optional Information for an Image

- [imageVersion](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageversion%28%29): Returns the version of the item.
- [imageTitle](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagetitle%28%29): Returns the display title of the image.
- [imageSubtitle](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagesubtitle%28%29): Returns the display subtitle of the image.

### Constants

- [Image Representation Types](image-representation-types.md): Representation types for images.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

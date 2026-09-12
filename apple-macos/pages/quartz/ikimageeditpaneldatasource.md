> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageeditpaneldatasource](https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource)

# IKImageEditPanelDataSource (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.

## Declaration

```swift
protocol IKImageEditPanelDataSource
```

## Topics

### Getting and Setting Image Properties

- [imageProperties](ikimageeditpaneldatasource/imageproperties.md): Returns a dictionary of the image properties associated with the image in the image edit panel.
- [setImage(\_:imageProperties:)](ikimageeditpaneldatasource/setimage%28__imageproperties_%29.md): Sets an image with the specified properties.

### Getting Images From the Data Source

- [image](ikimageeditpaneldatasource/image.md): Returns an image.
- [thumbnail(withMaximumSize:)](ikimageeditpaneldatasource/thumbnail%28withmaximumsize_%29.md): Returns a thumbnail image whose size is no larger than the specified size.

### New Methods

- [hasAdjustMode](ikimageeditpaneldatasource/hasadjustmode.md): Returns whether the adjust mode view tab should be displayed.
- [hasDetailsMode](ikimageeditpaneldatasource/hasdetailsmode.md): Returns whether the details mode view tab should be displayed.
- [hasEffectsMode](ikimageeditpaneldatasource/haseffectsmode.md): Returns whether the effects mode view tab should be displayed.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

# IKImageEditPanelDataSource (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.

## Declaration

```objectivec
@protocol IKImageEditPanelDataSource
```

## Topics

### Getting and Setting Image Properties

- [imageProperties](ikimageeditpaneldatasource/imageproperties.md): Returns a dictionary of the image properties associated with the image in the image edit panel.
- [setImage:imageProperties:](ikimageeditpaneldatasource/setimage%28__imageproperties_%29.md): Sets an image with the specified properties.

### Getting Images From the Data Source

- [image](ikimageeditpaneldatasource/image.md): Returns an image.
- [thumbnailWithMaximumSize:](ikimageeditpaneldatasource/thumbnail%28withmaximumsize_%29.md): Returns a thumbnail image whose size is no larger than the specified size.

### New Methods

- [hasAdjustMode](ikimageeditpaneldatasource/hasadjustmode.md): Returns whether the adjust mode view tab should be displayed.
- [hasDetailsMode](ikimageeditpaneldatasource/hasdetailsmode.md): Returns whether the details mode view tab should be displayed.
- [hasEffectsMode](ikimageeditpaneldatasource/haseffectsmode.md): Returns whether the effects mode view tab should be displayed.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

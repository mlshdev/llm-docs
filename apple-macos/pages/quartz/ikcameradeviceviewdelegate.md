> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceviewdelegate](https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate)

# IKCameraDeviceViewDelegate (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.

## Declaration

```swift
protocol IKCameraDeviceViewDelegate
```

## Topics

### Downloading Camera Content

- [cameraDeviceView(\_:didDownloadFile:location:fileData:error:)](ikcameradeviceviewdelegate/cameradeviceview%28__diddownloadfile_location_filedata_error_%29.md): Invoked for each file that is downloaded from the camera device.

### Detecting Selection Changes

- [cameraDeviceViewSelectionDidChange(\_:)](ikcameradeviceviewdelegate/cameradeviceviewselectiondidchange%28__%29.md): Invoked when the selection changed.

### Managing Errors

- [cameraDeviceView(\_:didEncounterError:)](ikcameradeviceviewdelegate/cameradeviceview%28__didencountererror_%29.md): Invoked when the camera encounters an error.

## See Also

### Protocols

- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

# IKCameraDeviceViewDelegate (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.

## Declaration

```objectivec
@protocol IKCameraDeviceViewDelegate
```

## Topics

### Downloading Camera Content

- [cameraDeviceView:didDownloadFile:location:fileData:error:](ikcameradeviceviewdelegate/cameradeviceview%28__diddownloadfile_location_filedata_error_%29.md): Invoked for each file that is downloaded from the camera device.

### Detecting Selection Changes

- [cameraDeviceViewSelectionDidChange:](ikcameradeviceviewdelegate/cameradeviceviewselectiondidchange%28__%29.md): Invoked when the selection changed.

### Managing Errors

- [cameraDeviceView:didEncounterError:](ikcameradeviceviewdelegate/cameradeviceview%28__didencountererror_%29.md): Invoked when the camera encounters an error.

## See Also

### Protocols

- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.
- [IKSlideshowDataSource](ikslideshowdatasource.md): The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

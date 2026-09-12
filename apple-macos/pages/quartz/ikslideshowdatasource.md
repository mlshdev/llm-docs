> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikslideshowdatasource](https://developer.apple.com/documentation/quartz/ikslideshowdatasource)

# IKSlideshowDataSource (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

## Declaration

```swift
protocol IKSlideshowDataSource
```

<a id="overview"></a>

## Overview

> **Important**

>  Slide show data source methods may be called on secondary threads. When you implement these methods, you must ensure that they are safe to run on threads other than the main thread.

## Topics

### Providing Slideshow Information

- [numberOfSlideshowItems()](ikslideshowdatasource/numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItem(at:)](ikslideshowdatasource/slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItem(at:)](ikslideshowdatasource/nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItem(at:toApplication:)](ikslideshowdatasource/canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.

### Performing Custom Tasks

- [slideshowWillStart()](ikslideshowdatasource/slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidStop()](ikslideshowdatasource/slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.
- [slideshowDidChangeCurrentIndex(\_:)](ikslideshowdatasource/slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.

# IKSlideshowDataSource (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+

The `IKSlideshowDataSource` protocol describes the methods that an [IKSlideshow](ikslideshow.md) object uses to access the contents of its data source object.

## Declaration

```objectivec
@protocol IKSlideshowDataSource
```

<a id="overview"></a>

## Overview

> **Important**

>  Slide show data source methods may be called on secondary threads. When you implement these methods, you must ensure that they are safe to run on threads other than the main thread.

## Topics

### Providing Slideshow Information

- [numberOfSlideshowItems](ikslideshowdatasource/numberofslideshowitems%28%29.md): Returns the number of items in a slideshow.
- [slideshowItemAtIndex:](ikslideshowdatasource/slideshowitem%28at_%29.md): Returns the item for a given index
- [nameOfSlideshowItemAtIndex:](ikslideshowdatasource/nameofslideshowitem%28at_%29.md): Returns the display name for item at the specified index.
- [canExportSlideshowItemAtIndex:toApplication:](ikslideshowdatasource/canexportslideshowitem%28at_toapplication_%29.md): Reports whether the export button should be enabled for a slideshow item.

### Performing Custom Tasks

- [slideshowWillStart](ikslideshowdatasource/slideshowwillstart%28%29.md): Performs custom tasks when the slideshow is about to start.
- [slideshowDidStop](ikslideshowdatasource/slideshowdidstop%28%29.md): Performs custom tasks when the slideshow stops.
- [slideshowDidChangeCurrentIndex:](ikslideshowdatasource/slideshowdidchangecurrentindex%28__%29.md): Performs custom tasks when the slideshow changes to the item at the specified index.

## See Also

### Protocols

- [IKCameraDeviceViewDelegate](ikcameradeviceviewdelegate.md): The `IKCameraDeviceViewDelegate` protocol is adopted by the delegate of the [IKCameraDeviceView](ikcameradeviceview.md) class. It allows downloading of camera content, handling selection changes, and handling errors.
- [IKDeviceBrowserViewDelegate](ikdevicebrowserviewdelegate.md): The `IKDeviceBrowserViewDelegate` defines the methods that the delegate of the [IKDeviceBrowserView](ikdevicebrowserview.md) class can implement. All the methods are optional.
- [IKFilterCustomUIProvider](ikfiltercustomuiprovider.md): A protocol used to provide a custom UI.
- [IKImageBrowserDataSource Protocol](ikimagebrowserdatasource-protocol.md): The `IKImageBrowserDataSource` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source object.
- [IKImageBrowserDelegate Protocol](ikimagebrowserdelegate-protocol.md): The `IKImageBrowserDelegate` is an informal protocol for the delegate of an [IKImageBrowserView](ikimagebrowserview.md) object. You can implement these methods to perform custom tasks when in response to events in the image browser view.
- [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md): The `IKImageBrowserItem` informal protocol declares the methods that an instance of the [IKImageBrowserView](ikimagebrowserview.md) class uses to access the contents of its data source for a given item. Some of the methods in this protocol are needed frequently, so you should implement them efficiently.
- [IKImageEditPanelDataSource](ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](ikimageeditpanel.md) object uses to access the contents of its data source object.
- [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md): The `IKScannerDeviceViewDelegate` protocol defines the delegate protocol that the [IKScannerDeviceView](ikscannerdeviceview.md) delegate must conform to.

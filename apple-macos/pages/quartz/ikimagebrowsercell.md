> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell](https://developer.apple.com/documentation/quartz/ikimagebrowsercell)

# IKImageBrowserCell (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

A class used to display a cell.

## Declaration

```swift
class IKImageBrowserCell
```

<a id="overview"></a>

## Overview

`A` class that is used to display a cell conforming to the [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md) in an [IKImageBrowserView](ikimagebrowserview.md).

## Topics

### Cell Component Frames

- [frame()](ikimagebrowsercell/frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](ikimagebrowserview.md).
- [imageFrame()](ikimagebrowsercell/imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](ikimagebrowserview.md).
- [subtitleFrame()](ikimagebrowsercell/subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame()](ikimagebrowsercell/titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame()](ikimagebrowsercell/imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

### Represented Item

- [indexOfRepresentedItem()](ikimagebrowsercell/indexofrepresenteditem%28%29.md): Returns the index of the receiver’s represented object in the datasource.
- [representedItem()](ikimagebrowsercell/representeditem%28%29.md): Returns the receiver’s represented object.

### Selection Handling

- [isSelected()](ikimagebrowsercell/isselected%28%29.md): Returns whether the cell is selected.
- [selectionFrame()](ikimagebrowsercell/selectionframe%28%29.md): Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](ikimagebrowserview.md).

### Cell Content Display

- [imageAlignment()](ikimagebrowsercell/imagealignment%28%29.md): Returns the position of the cell’s image in the frame.
- [opacity()](ikimagebrowsercell/opacity%28%29.md): Returns the opacity of the receiver.

### Getting The Cell State

- [cellState()](ikimagebrowsercell/cellstate%28%29.md): Returns the current cell state of the receiver.

### Core Animation Integration

- [layer(forType:)](ikimagebrowsercell/layer%28fortype_%29.md): Returns a layer for the specified position.

### Getting The Parent Browser View

- [imageBrowserView()](ikimagebrowsercell/imagebrowserview%28%29.md): Returns the view the receiver uses to display the cell.

### Constants

- [IKImageBrowserCellState](ikimagebrowsercellstate.md): The possible states for the browser cell. These values are used by the [cellState()](ikimagebrowsercell/cellstate%28%29.md) method.
- [Cell Layer Positions](cell-layer-positions.md): Optional positioning of additional layers displayed with the cell. Used by the [layer(forType:)](ikimagebrowsercell/layer%28fortype_%29.md) method.

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
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKImageBrowserCell (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+

A class used to display a cell.

## Declaration

```objectivec
@interface IKImageBrowserCell : NSObject
```

<a id="overview"></a>

## Overview

`A` class that is used to display a cell conforming to the [IKImageBrowserItem Protocol](ikimagebrowseritem-protocol.md) in an [IKImageBrowserView](ikimagebrowserview.md).

## Topics

### Cell Component Frames

- [frame](ikimagebrowsercell/frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](ikimagebrowserview.md).
- [imageFrame](ikimagebrowsercell/imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](ikimagebrowserview.md).
- [subtitleFrame](ikimagebrowsercell/subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame](ikimagebrowsercell/titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame](ikimagebrowsercell/imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

### Represented Item

- [indexOfRepresentedItem](ikimagebrowsercell/indexofrepresenteditem%28%29.md): Returns the index of the receiver’s represented object in the datasource.
- [representedItem](ikimagebrowsercell/representeditem%28%29.md): Returns the receiver’s represented object.

### Selection Handling

- [isSelected](ikimagebrowsercell/isselected%28%29.md): Returns whether the cell is selected.
- [selectionFrame](ikimagebrowsercell/selectionframe%28%29.md): Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](ikimagebrowserview.md).

### Cell Content Display

- [imageAlignment](ikimagebrowsercell/imagealignment%28%29.md): Returns the position of the cell’s image in the frame.
- [opacity](ikimagebrowsercell/opacity%28%29.md): Returns the opacity of the receiver.

### Getting The Cell State

- [cellState](ikimagebrowsercell/cellstate%28%29.md): Returns the current cell state of the receiver.

### Core Animation Integration

- [layerForType:](ikimagebrowsercell/layer%28fortype_%29.md): Returns a layer for the specified position.

### Getting The Parent Browser View

- [imageBrowserView](ikimagebrowsercell/imagebrowserview%28%29.md): Returns the view the receiver uses to display the cell.

### Constants

- [IKImageBrowserCellState](ikimagebrowsercellstate.md): The possible states for the browser cell. These values are used by the [cellState](ikimagebrowsercell/cellstate%28%29.md) method.
- [Cell Layer Positions](cell-layer-positions.md): Optional positioning of additional layers displayed with the cell. Used by the [layerForType:](ikimagebrowsercell/layer%28fortype_%29.md) method.

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
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKImageView](ikimageview.md): A view that allows displaying and minor editing of an image.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

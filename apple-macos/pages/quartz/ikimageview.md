> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview](https://developer.apple.com/documentation/quartz/ikimageview)

# IKImageView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+

A view that allows displaying and minor editing of an image.

## Declaration

```swift
class IKImageView
```

<a id="overview"></a>

## Overview

The `IKImageView` class provides an efficient way to display images in a view while at the same time supporting a number of image editing operations such as rotating, zooming, and cropping. If possible, image rendering uses hardware acceleration to achieve optimal performance. The `IKImageView` class is implemented as a subclass of [NSView](../appkit/nsview.md). Similar to [NSImageView](../appkit/nsimageview.md), the `IKImageView` class is used to display a single image.

You can provide an images for the view in any of these formats:

- File reference ([NSURL](https://developer.apple.com/documentation/foundation/nsurl), [CFURL](https://developer.apple.com/documentation/corefoundation/cfurl), or a path)
- [CGImageSource](https://developer.apple.com/documentation/imageio/cgimagesource)
- Data ([NSData](https://developer.apple.com/documentation/foundation/nsdata) or [CFData](https://developer.apple.com/documentation/corefoundation/cfdata))
- Image ([CGImage](https://developer.apple.com/documentation/coregraphics/cgimage) or [CIImage](https://developer.apple.com/documentation/coreimage/ciimage))

Providing a file reference is the preferred way to set the the image for a view because in addition to the actual image data, `IKImageView` also handles the image metadata embedded in the file. The image view automatically fetches the metadata from a file reference, whereas for the other sources (except for a [CGImageSource](https://developer.apple.com/documentation/imageio/cgimagesource) source), it cannot. For images set from other sources, you need to set the metadata separately.

`IKImageView` supports multi-frame images (TIFF, GIF, and so forth) and animated images.

## Topics

### Getting and Setting Image View Characteristics

- [delegate](ikimageview/delegate.md): Specifies the delegate object of the receiver.
- [zoomFactor](ikimageview/zoomfactor.md): Specifies the zoom factor for the image view.
- [rotationAngle](ikimageview/rotationangle.md): Specifies the rotation angle for the image view.
- [currentToolMode](ikimageview/currenttoolmode.md): Specifies the current tool mode for the image view.
- [autoresizes](ikimageview/autoresizes.md): Specifies the automatic resizing state for the image view.
- [hasHorizontalScroller](ikimageview/hashorizontalscroller.md): Specifies the horizontal scroll bar state for the image view.
- [hasVerticalScroller](ikimageview/hasverticalscroller.md): Specifies the vertical scroll bar state for the image view.
- [autohidesScrollers](ikimageview/autohidesscrollers.md): Specifies the automatic-hiding scroll bar state for the image view.
- [supportsDragAndDrop](ikimageview/supportsdraganddrop.md): Specifies the drag-and-drop support state for the image view.
- [editable](ikimageview/editable.md): Specifies the editable state for the image view.
- [doubleClickOpensImageEditPanel](ikimageview/doubleclickopensimageeditpanel.md): Specifies the image-opening state of the editing pane in the image view.
- [imageCorrection](ikimageview/imagecorrection.md): Specifies a Core Image filter for image correction.
- [backgroundColor](ikimageview/backgroundcolor.md): Specifies the background color for the image view.
- [imageSize()](ikimageview/imagesize%28%29.md): Returns the size of the image in the image view.
- [imageProperties()](ikimageview/imageproperties%28%29.md): Returns the metadata for the image in the view.

### Getting and Setting Images

- [image()](ikimageview/image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImage(\_:imageProperties:)](ikimageview/setimage%28__imageproperties_%29.md): Sets the image to display in an image view.
- [setImageWith(\_:)](ikimageview/setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.

### Manipulating the Image in a View

- [setRotationAngle(\_:center:)](ikimageview/setrotationangle%28__center_%29.md): Sets the rotation angle at the provided origin.
- [setImageZoomFactor(\_:center:)](ikimageview/setimagezoomfactor%28__center_%29.md): Sets the zoom factor at the provided origin.
- [zoomImageToFit(\_:)](ikimageview/zoomimagetofit%28__%29.md): Zooms the image so that it fits in the image view.
- [zoomImageToActualSize(\_:)](ikimageview/zoomimagetoactualsize%28__%29.md): Zooms the image so that it is displayed using its true size.
- [zoomImage(to:)](ikimageview/zoomimage%28to_%29.md): Zooms the image so that it fits in the specified rectangle.
- [zoomIn(\_:)](ikimageview/zoomin%28__%29.md): Zooms the image in.
- [zoomOut(\_:)](ikimageview/zoomout%28__%29.md): Zooms the image out.
- [crop(\_:)](ikimageview/crop%28__%29.md): Crops the image using the current selection.
- [flipImageHorizontal(\_:)](ikimageview/flipimagehorizontal%28__%29.md): Flips an image along the horizontal axis.
- [flipImageVertical(\_:)](ikimageview/flipimagevertical%28__%29.md): Flips an image along the vertical axis.
- [rotateImageLeft(\_:)](ikimageview/rotateimageleft%28__%29.md): Rotates the image left (counter-clockwise).
- [rotateImageRight(\_:)](ikimageview/rotateimageright%28__%29.md): Rotates the image right (clockwise).

### Working With Core Animation

- [setOverlay(\_:forType:)](ikimageview/setoverlay%28__fortype_%29.md): Sets an overlay type for a Core Animation layer.
- [overlay(forType:)](ikimageview/overlay%28fortype_%29.md): Returns the Core Animation layer associated with a layer type.

### Scrolling

- [scroll(to:)](ikimageview/scroll%28to_%29-myqk.md): Scrolls the view to the specified point.
- [scroll(to:)](ikimageview/scroll%28to_%29-535q6.md): Scrolls the view so that it includes the provided rectangular area.

### Converting Points and Rectangles

- [convertPoint(toImagePoint:)](ikimageview/convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertRect(toImageRect:)](ikimageview/convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePoint(toViewPoint:)](ikimageview/convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRect(toViewRect:)](ikimageview/convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.

### Constants

- [Tool Modes](tool-modes.md): Image Kit tools modes referenced by the [currentToolMode](ikimageview/currenttoolmode.md) property.
- [Overlay Types](overlay-types.md): A layer level.

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

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

# IKImageView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+

A view that allows displaying and minor editing of an image.

## Declaration

```objectivec
@interface IKImageView : NSView
```

<a id="overview"></a>

## Overview

The `IKImageView` class provides an efficient way to display images in a view while at the same time supporting a number of image editing operations such as rotating, zooming, and cropping. If possible, image rendering uses hardware acceleration to achieve optimal performance. The `IKImageView` class is implemented as a subclass of [NSView](../appkit/nsview.md). Similar to [NSImageView](../appkit/nsimageview.md), the `IKImageView` class is used to display a single image.

You can provide an images for the view in any of these formats:

- File reference ([NSURL](https://developer.apple.com/documentation/foundation/nsurl), [CFURLRef](https://developer.apple.com/documentation/corefoundation/cfurl), or a path)
- [CGImageSourceRef](https://developer.apple.com/documentation/imageio/cgimagesource)
- Data ([NSData](https://developer.apple.com/documentation/foundation/nsdata) or [CFDataRef](https://developer.apple.com/documentation/corefoundation/cfdata))
- Image ([CGImageRef](https://developer.apple.com/documentation/coregraphics/cgimage) or [CIImage](https://developer.apple.com/documentation/coreimage/ciimage))

Providing a file reference is the preferred way to set the the image for a view because in addition to the actual image data, `IKImageView` also handles the image metadata embedded in the file. The image view automatically fetches the metadata from a file reference, whereas for the other sources (except for a [CGImageSourceRef](https://developer.apple.com/documentation/imageio/cgimagesource) source), it cannot. For images set from other sources, you need to set the metadata separately.

`IKImageView` supports multi-frame images (TIFF, GIF, and so forth) and animated images.

## Topics

### Getting and Setting Image View Characteristics

- [delegate](ikimageview/delegate.md): Specifies the delegate object of the receiver.
- [zoomFactor](ikimageview/zoomfactor.md): Specifies the zoom factor for the image view.
- [rotationAngle](ikimageview/rotationangle.md): Specifies the rotation angle for the image view.
- [currentToolMode](ikimageview/currenttoolmode.md): Specifies the current tool mode for the image view.
- [autoresizes](ikimageview/autoresizes.md): Specifies the automatic resizing state for the image view.
- [hasHorizontalScroller](ikimageview/hashorizontalscroller.md): Specifies the horizontal scroll bar state for the image view.
- [hasVerticalScroller](ikimageview/hasverticalscroller.md): Specifies the vertical scroll bar state for the image view.
- [autohidesScrollers](ikimageview/autohidesscrollers.md): Specifies the automatic-hiding scroll bar state for the image view.
- [supportsDragAndDrop](ikimageview/supportsdraganddrop.md): Specifies the drag-and-drop support state for the image view.
- [editable](ikimageview/editable.md): Specifies the editable state for the image view.
- [doubleClickOpensImageEditPanel](ikimageview/doubleclickopensimageeditpanel.md): Specifies the image-opening state of the editing pane in the image view.
- [imageCorrection](ikimageview/imagecorrection.md): Specifies a Core Image filter for image correction.
- [backgroundColor](ikimageview/backgroundcolor.md): Specifies the background color for the image view.
- [imageSize](ikimageview/imagesize%28%29.md): Returns the size of the image in the image view.
- [imageProperties](ikimageview/imageproperties%28%29.md): Returns the metadata for the image in the view.

### Getting and Setting Images

- [image](ikimageview/image%28%29.md): Returns the image associated with the view, after any image corrections.
- [setImage:imageProperties:](ikimageview/setimage%28__imageproperties_%29.md): Sets the image to display in an image view.
- [setImageWithURL:](ikimageview/setimagewith%28__%29.md): Initializes an image view with the image specified by a URL.

### Manipulating the Image in a View

- [setRotationAngle:centerPoint:](ikimageview/setrotationangle%28__center_%29.md): Sets the rotation angle at the provided origin.
- [setImageZoomFactor:centerPoint:](ikimageview/setimagezoomfactor%28__center_%29.md): Sets the zoom factor at the provided origin.
- [zoomImageToFit:](ikimageview/zoomimagetofit%28__%29.md): Zooms the image so that it fits in the image view.
- [zoomImageToActualSize:](ikimageview/zoomimagetoactualsize%28__%29.md): Zooms the image so that it is displayed using its true size.
- [zoomImageToRect:](ikimageview/zoomimage%28to_%29.md): Zooms the image so that it fits in the specified rectangle.
- [zoomIn:](ikimageview/zoomin%28__%29.md): Zooms the image in.
- [zoomOut:](ikimageview/zoomout%28__%29.md): Zooms the image out.
- [crop:](ikimageview/crop%28__%29.md): Crops the image using the current selection.
- [flipImageHorizontal:](ikimageview/flipimagehorizontal%28__%29.md): Flips an image along the horizontal axis.
- [flipImageVertical:](ikimageview/flipimagevertical%28__%29.md): Flips an image along the vertical axis.
- [rotateImageLeft:](ikimageview/rotateimageleft%28__%29.md): Rotates the image left (counter-clockwise).
- [rotateImageRight:](ikimageview/rotateimageright%28__%29.md): Rotates the image right (clockwise).

### Working With Core Animation

- [setOverlay:forType:](ikimageview/setoverlay%28__fortype_%29.md): Sets an overlay type for a Core Animation layer.
- [overlayForType:](ikimageview/overlay%28fortype_%29.md): Returns the Core Animation layer associated with a layer type.

### Scrolling

- [scrollToPoint:](ikimageview/scroll%28to_%29-myqk.md): Scrolls the view to the specified point.
- [scrollToRect:](ikimageview/scroll%28to_%29-535q6.md): Scrolls the view so that it includes the provided rectangular area.

### Converting Points and Rectangles

- [convertViewPointToImagePoint:](ikimageview/convertpoint%28toimagepoint_%29.md): Converts an image view coordinate to an image coordinate.
- [convertViewRectToImageRect:](ikimageview/convertrect%28toimagerect_%29.md): Converts an image view rectangle to an image rectangle.
- [convertImagePointToViewPoint:](ikimageview/convertimagepoint%28toviewpoint_%29.md): Converts an image coordinate to an image view coordinate.
- [convertImageRectToViewRect:](ikimageview/convertimagerect%28toviewrect_%29.md): Converts an image rectangle to an image view rectangle.

### Constants

- [Tool Modes](tool-modes.md): Image Kit tools modes referenced by the [currentToolMode](ikimageview/currenttoolmode.md) property.
- [Overlay Types](overlay-types.md): A layer level.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IKCameraDeviceView](ikcameradeviceview.md): The `IKCameraDeviceView` class displays the contents of the selected camera.
- [IKDeviceBrowserView](ikdevicebrowserview.md): The `IKDeviceBrowserView` allows you to select a camera or scanner from a list of the available devices.
- [IKFilterBrowserPanel](ikfilterbrowserpanel.md): Presents a user interface for browsing filters.
- [IKFilterBrowserView](ikfilterbrowserview.md): The `IKFilterBrowserView` class is used as a container for the elements of an [IKFilterBrowserPanel](ikfilterbrowserpanel.md) object.
- [IKFilterUIView](ikfilteruiview.md): Input parameters for filtering core image filters.
- [IKImageBrowserCell](ikimagebrowsercell.md): A class used to display a cell.
- [IKImageEditPanel](ikimageeditpanel.md): The `IKImageEditPanel` class provides a panel, that is, a utility window that floats on top of document windows, optimized for image editing.
- [IKPictureTaker](ikpicturetaker.md): The `IKPictureTaker` class represents a panel that allows users to choose images by browsing the file system. The picture taker panel provides an Open Recent menu, supports image cropping, and supports taking snapshots from an iSight or other digital camera.
- [IKSaveOptions](iksaveoptions.md): The `IKSaveOptions` class initializes, adds, and manages user interface options for saving image data.
- [IKScannerDeviceView](ikscannerdeviceview.md): The `IKScannerDeviceView` class displays a view that allows scanning. It can be customized by specifying the display mode. The delegate receives the scanned data and must implement the [IKScannerDeviceViewDelegate](ikscannerdeviceviewdelegate.md) protocol.
- [IKSlideshow](ikslideshow.md): The `IKSlideshow` class encapsulates a data source and options for a slideshow.

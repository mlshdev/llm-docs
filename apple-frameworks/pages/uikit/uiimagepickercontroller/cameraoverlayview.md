> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/cameraoverlayview](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/cameraoverlayview)

# cameraOverlayView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The view to display on top of the default image picker interface.

## Declaration

```swift
var cameraOverlayView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use an overlay view to present a custom view hierarchy on top of the default image picker interface. The image picker layers your custom overlay view on top of the other image picker views and positions it relative to the screen coordinates. If you have the default camera controls set to be visible, incorporate transparency into your view, or position it to avoid obscuring the underlying content.

You can access this property only when the source type of the image picker is set to [UIImagePickerController.SourceType.camera](sourcetype-swift.enum/camera.md). Attempting to access this property for other source types results in throwing an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

## See Also

### Customizing the camera controls

- [Customizing an image picker controller](../customizing-an-image-picker-controller.md): Manage user interactions and present custom information when taking pictures by adding an overlay view to your image picker.
- [showsCameraControls](showscameracontrols.md): A Boolean value that indicates whether the image picker displays the default camera controls.
- [cameraViewTransform](cameraviewtransform.md): The transform to apply to the camera’s preview image.

# cameraOverlayView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

The view to display on top of the default image picker interface.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * cameraOverlayView;
```

<a id="Discussion"></a>

## Discussion

You can use an overlay view to present a custom view hierarchy on top of the default image picker interface. The image picker layers your custom overlay view on top of the other image picker views and positions it relative to the screen coordinates. If you have the default camera controls set to be visible, incorporate transparency into your view, or position it to avoid obscuring the underlying content.

You can access this property only when the source type of the image picker is set to [UIImagePickerControllerSourceTypeCamera](sourcetype-swift.enum/camera.md). Attempting to access this property for other source types results in throwing an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

## See Also

### Customizing the camera controls

- [showsCameraControls](showscameracontrols.md): A Boolean value that indicates whether the image picker displays the default camera controls.
- [cameraViewTransform](cameraviewtransform.md): The transform to apply to the camera’s preview image.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/delegate](https://developer.apple.com/documentation/quartz/ikimageview/delegate)

# delegate (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Specifies the delegate object of the receiver.

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: AnyObject! { get set }
```

<a id="Discussion"></a>

## Discussion

An `IKImageView` object’s delegate is inserted in the responder chain after the image view itself and is informed of various actions by the image view through delegation messages.

## See Also

### Getting and Setting Image View Characteristics

- [zoomFactor](zoomfactor.md): Specifies the zoom factor for the image view.
- [rotationAngle](rotationangle.md): Specifies the rotation angle for the image view.
- [currentToolMode](currenttoolmode.md): Specifies the current tool mode for the image view.
- [autoresizes](autoresizes.md): Specifies the automatic resizing state for the image view.
- [hasHorizontalScroller](hashorizontalscroller.md): Specifies the horizontal scroll bar state for the image view.
- [hasVerticalScroller](hasverticalscroller.md): Specifies the vertical scroll bar state for the image view.
- [autohidesScrollers](autohidesscrollers.md): Specifies the automatic-hiding scroll bar state for the image view.
- [supportsDragAndDrop](supportsdraganddrop.md): Specifies the drag-and-drop support state for the image view.
- [editable](editable.md): Specifies the editable state for the image view.
- [doubleClickOpensImageEditPanel](doubleclickopensimageeditpanel.md): Specifies the image-opening state of the editing pane in the image view.
- [imageCorrection](imagecorrection.md): Specifies a Core Image filter for image correction.
- [backgroundColor](backgroundcolor.md): Specifies the background color for the image view.
- [imageSize()](imagesize%28%29.md): Returns the size of the image in the image view.
- [imageProperties()](imageproperties%28%29.md): Returns the metadata for the image in the view.

# delegate (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Specifies the delegate object of the receiver.

## Declaration

```objectivec
@property (assign) id delegate;
```

<a id="Discussion"></a>

## Discussion

An `IKImageView` object’s delegate is inserted in the responder chain after the image view itself and is informed of various actions by the image view through delegation messages.

## See Also

### Getting and Setting Image View Characteristics

- [zoomFactor](zoomfactor.md): Specifies the zoom factor for the image view.
- [rotationAngle](rotationangle.md): Specifies the rotation angle for the image view.
- [currentToolMode](currenttoolmode.md): Specifies the current tool mode for the image view.
- [autoresizes](autoresizes.md): Specifies the automatic resizing state for the image view.
- [hasHorizontalScroller](hashorizontalscroller.md): Specifies the horizontal scroll bar state for the image view.
- [hasVerticalScroller](hasverticalscroller.md): Specifies the vertical scroll bar state for the image view.
- [autohidesScrollers](autohidesscrollers.md): Specifies the automatic-hiding scroll bar state for the image view.
- [supportsDragAndDrop](supportsdraganddrop.md): Specifies the drag-and-drop support state for the image view.
- [editable](editable.md): Specifies the editable state for the image view.
- [doubleClickOpensImageEditPanel](doubleclickopensimageeditpanel.md): Specifies the image-opening state of the editing pane in the image view.
- [imageCorrection](imagecorrection.md): Specifies a Core Image filter for image correction.
- [backgroundColor](backgroundcolor.md): Specifies the background color for the image view.
- [imageSize](imagesize%28%29.md): Returns the size of the image in the image view.
- [imageProperties](imageproperties%28%29.md): Returns the metadata for the image in the view.

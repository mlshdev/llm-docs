> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagecropandscaleaction/scaletofillplus90ccwrotation](https://developer.apple.com/documentation/vision/imagecropandscaleaction/scaletofillplus90ccwrotation)

# ImageCropAndScaleAction.scaleToFillPlus90CCWRotation

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An action that scales the image and rotates it by 90 degrees counter clockwise.

## Declaration

```swift
case scaleToFillPlus90CCWRotation
```

<a id="Discussion"></a>

## Discussion

Rotation helps to optimize portrait images fit into landscape buffers for algorithms that are rotation agnostic.

## See Also

### Getting the actions

- [ImageCropAndScaleAction.centerCrop](centercrop.md): An action that scales the image and maintains the aspect ratio to fit on the short side and crop centered on the long side.
- [ImageCropAndScaleAction.scaleToFit](scaletofit.md): An action that scales to the size the algorithm requires while maintaining the original aspect ratio.
- [ImageCropAndScaleAction.scaleToFill](scaletofill.md): An action that scales the image to fill the input dimensions and resizing it, if necessary.
- [ImageCropAndScaleAction.scaleToFitPlus90CCWRotation](scaletofitplus90ccwrotation.md): An action that scales the image and maintains the aspect ratio to fit on the long side, and rotates the image by 90 degrees counter clockwise.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/orientation/rightmirrored](https://developer.apple.com/documentation/uikit/uiimage/orientation/rightmirrored)

# UIImage.Orientation.rightMirrored (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

## Declaration

```swift
case rightMirrored
```

<a id="Discussion"></a>

## Discussion

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears to be horizontally mirrored, then rotated 90° clockwise. (That is, to present the image in its intended orientation, you can rotate  90° counter-clockwise, then flip horizontally.)

![To correct an image with rightMirrored orientation for display, rotate it 90° counterclockwise then flip it horizontally.](https://developer.apple.com/images/com.apple.uikit/media-2948306.png)

## See Also

### Related Documentation

- [CGImagePropertyOrientation.rightMirrored](../../../imageio/cgimagepropertyorientation/rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.

### Image orientations

- [UIImage.Orientation.up](up.md): The original pixel data matches the image’s intended display orientation.
- [UIImage.Orientation.down](down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImage.Orientation.left](left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImage.Orientation.right](right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImage.Orientation.upMirrored](upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImage.Orientation.downMirrored](downmirrored.md): The image has been vertically flipped from the orientation of its original pixel data.
- [UIImage.Orientation.leftMirrored](leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.

# UIImageOrientationRightMirrored (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

## Declaration

```objectivec
UIImageOrientationRightMirrored
```

<a id="Discussion"></a>

## Discussion

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears to be horizontally mirrored, then rotated 90° clockwise. (That is, to present the image in its intended orientation, you can rotate  90° counter-clockwise, then flip horizontally.)

![To correct an image with rightMirrored orientation for display, rotate it 90° counterclockwise then flip it horizontally.](https://developer.apple.com/images/com.apple.uikit/media-2948306.png)

## See Also

### Related Documentation

- [kCGImagePropertyOrientationRightMirrored](../../../imageio/cgimagepropertyorientation/rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.

### Image orientations

- [UIImageOrientationUp](up.md): The original pixel data matches the image’s intended display orientation.
- [UIImageOrientationDown](down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImageOrientationLeft](left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImageOrientationRight](right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImageOrientationUpMirrored](upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImageOrientationDownMirrored](downmirrored.md): The image has been vertically flipped from the orientation of its original pixel data.
- [UIImageOrientationLeftMirrored](leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.

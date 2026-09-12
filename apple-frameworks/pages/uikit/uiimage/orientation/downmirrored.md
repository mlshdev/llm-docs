> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/orientation/downmirrored](https://developer.apple.com/documentation/uikit/uiimage/orientation/downmirrored)

# UIImage.Orientation.downMirrored (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The image has been vertically flipped from the orientation of its original pixel data.

## Declaration

```swift
case downMirrored
```

<a id="Discussion"></a>

## Discussion

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears vertically flipped. (Alternatively, the image is rotated 180° and then flipped horizontally.)

![To correct an image with downMirrored orientation for display, flip it vertically.](https://developer.apple.com/images/com.apple.uikit/media-2948309.png)

## See Also

### Related Documentation

- [CGImagePropertyOrientation.downMirrored](../../../imageio/cgimagepropertyorientation/downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.

### Image orientations

- [UIImage.Orientation.up](up.md): The original pixel data matches the image’s intended display orientation.
- [UIImage.Orientation.down](down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImage.Orientation.left](left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImage.Orientation.right](right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImage.Orientation.upMirrored](upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImage.Orientation.leftMirrored](leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.
- [UIImage.Orientation.rightMirrored](rightmirrored.md): The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

# UIImageOrientationDownMirrored (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The image has been vertically flipped from the orientation of its original pixel data.

## Declaration

```objectivec
UIImageOrientationDownMirrored
```

<a id="Discussion"></a>

## Discussion

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears vertically flipped. (Alternatively, the image is rotated 180° and then flipped horizontally.)

![To correct an image with downMirrored orientation for display, flip it vertically.](https://developer.apple.com/images/com.apple.uikit/media-2948309.png)

## See Also

### Related Documentation

- [kCGImagePropertyOrientationDownMirrored](../../../imageio/cgimagepropertyorientation/downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.

### Image orientations

- [UIImageOrientationUp](up.md): The original pixel data matches the image’s intended display orientation.
- [UIImageOrientationDown](down.md): The image has been rotated 180° from the orientation of its original pixel data.
- [UIImageOrientationLeft](left.md): The image has been rotated 90° counterclockwise from the orientation of its original pixel data.
- [UIImageOrientationRight](right.md): The image has been rotated 90° clockwise from the orientation of its original pixel data.
- [UIImageOrientationUpMirrored](upmirrored.md): The image has been horizontally flipped from the orientation of its original pixel data.
- [UIImageOrientationLeftMirrored](leftmirrored.md): The image has been rotated 90° clockwise and flipped horizontally from the orientation of its original pixel data.
- [UIImageOrientationRightMirrored](rightmirrored.md): The image has been rotated 90° counterclockwise and flipped horizontally from the orientation of its original pixel data.

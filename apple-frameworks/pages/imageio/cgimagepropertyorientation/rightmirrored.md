> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagepropertyorientation/rightmirrored](https://developer.apple.com/documentation/imageio/cgimagepropertyorientation/rightmirrored)

# CGImagePropertyOrientation.rightMirrored (Swift)

**Framework:** Image I/O  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.

## Declaration

```swift
case rightMirrored
```

<a id="Discussion"></a>

## Discussion

The (x,y) pixel coordinates of the origin point (0,0) represent the bottom row and rightmost column, respectively. Pixel (x,y) positions increase bottom-to-top, right-to-left.

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears to be horizontally mirrored, then rotated 90° clockwise. (That is, to present the image in its intended orientation, you can rotate  90° counter-clockwise, then flip horizontally.)

![To correct an image with rightMirrored orientation for display, rotate it 90° counterclockwise then flip it horizontally.](https://developer.apple.com/images/com.apple.imageio/media-2948300.png)

## See Also

### Image Orientations

- [CGImagePropertyOrientation.up](up.md): The encoded image data matches the image’s intended display orientation.
- [CGImagePropertyOrientation.upMirrored](upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [CGImagePropertyOrientation.down](down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [CGImagePropertyOrientation.downMirrored](downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.
- [CGImagePropertyOrientation.leftMirrored](leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.right](right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.left](left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

# kCGImagePropertyOrientationRightMirrored (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.

## Declaration

```objectivec
kCGImagePropertyOrientationRightMirrored
```

<a id="Discussion"></a>

## Discussion

The (x,y) pixel coordinates of the origin point (0,0) represent the bottom row and rightmost column, respectively. Pixel (x,y) positions increase bottom-to-top, right-to-left.

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears to be horizontally mirrored, then rotated 90° clockwise. (That is, to present the image in its intended orientation, you can rotate  90° counter-clockwise, then flip horizontally.)

![To correct an image with rightMirrored orientation for display, rotate it 90° counterclockwise then flip it horizontally.](https://developer.apple.com/images/com.apple.imageio/media-2948300.png)

## See Also

### Image Orientations

- [kCGImagePropertyOrientationUp](up.md): The encoded image data matches the image’s intended display orientation.
- [kCGImagePropertyOrientationUpMirrored](upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [kCGImagePropertyOrientationDown](down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [kCGImagePropertyOrientationDownMirrored](downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeftMirrored](leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationRight](right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeft](left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagepropertyorientation/downmirrored](https://developer.apple.com/documentation/imageio/cgimagepropertyorientation/downmirrored)

# CGImagePropertyOrientation.downMirrored (Swift)

**Framework:** Image I/O  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The encoded image data is vertically flipped from the image’s intended display orientation.

## Declaration

```swift
case downMirrored
```

<a id="Discussion"></a>

## Discussion

The (x,y) pixel coordinates of the origin point (0,0) represent the leftmost column and bottom row, respectively. Pixel (x,y) positions increase left-to-right, bottom-to-top.

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears vertically flipped. (Alternatively, the image is rotated 180° and then flipped horizontally.)

![To correct an image with downMirrored orientation for display, flip it vertically.](https://developer.apple.com/images/com.apple.imageio/media-2948294.png)

## See Also

### Image Orientations

- [CGImagePropertyOrientation.up](up.md): The encoded image data matches the image’s intended display orientation.
- [CGImagePropertyOrientation.upMirrored](upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [CGImagePropertyOrientation.down](down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [CGImagePropertyOrientation.leftMirrored](leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.right](right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.rightMirrored](rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.left](left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

# kCGImagePropertyOrientationDownMirrored (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The encoded image data is vertically flipped from the image’s intended display orientation.

## Declaration

```objectivec
kCGImagePropertyOrientationDownMirrored
```

<a id="Discussion"></a>

## Discussion

The (x,y) pixel coordinates of the origin point (0,0) represent the leftmost column and bottom row, respectively. Pixel (x,y) positions increase left-to-right, bottom-to-top.

If an image is encoded with this orientation, then displayed by software unaware of orientation metadata, the image appears vertically flipped. (Alternatively, the image is rotated 180° and then flipped horizontally.)

![To correct an image with downMirrored orientation for display, flip it vertically.](https://developer.apple.com/images/com.apple.imageio/media-2948294.png)

## See Also

### Image Orientations

- [kCGImagePropertyOrientationUp](up.md): The encoded image data matches the image’s intended display orientation.
- [kCGImagePropertyOrientationUpMirrored](upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [kCGImagePropertyOrientationDown](down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeftMirrored](leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationRight](right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationRightMirrored](rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeft](left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

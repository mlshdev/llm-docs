> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/imageresolution](https://developer.apple.com/documentation/arkit/arcamera/imageresolution)

# imageResolution (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The width and height, in pixels, of the captured camera image.

## Declaration

```swift
var imageResolution: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

This size describes the image in the [capturedImage](../arframe/capturedimage.md) buffer, which contains image data in the camera device’s native sensor orientation. To convert image coordinates to match a specific display orientation of that image, use the `ARCamera/viewMatrix(for:)` or `ARCamera/projectPoint(_:orientation:viewportSize:)` method.

## See Also

### Examining Imaging Parameters

- [intrinsics](intrinsics.md): A matrix that converts between the 2D camera plane and 3D world coordinate space.

# imageResolution (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The width and height, in pixels, of the captured camera image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize imageResolution;
```

<a id="Discussion"></a>

## Discussion

This size describes the image in the [capturedImage](../arframe/capturedimage.md) buffer, which contains image data in the camera device’s native sensor orientation. To convert image coordinates to match a specific display orientation of that image, use the `ARCamera/viewMatrix(for:)` or `ARCamera/projectPoint(_:orientation:viewportSize:)` method.

## See Also

### Examining Imaging Parameters

- [intrinsics](intrinsics.md): A matrix that converts between the 2D camera plane and 3D world coordinate space.

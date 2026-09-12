> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/jpegdata(compressionquality:)](https://developer.apple.com/documentation/uikit/uiimage/jpegdata(compressionquality:))

# jpegData(compressionQuality:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a data object that contains the image in JPEG format.

## Declaration

```swift
func jpegData(compressionQuality: CGFloat) -> Data?
```

## Parameters

- `compressionQuality`: The quality of the resulting JPEG image, expressed as a value from `0.0` to `1.0`. The value `0.0` represents the maximum compression (or lowest quality) while the value `1.0` represents the least compression (or best quality).

<a id="return-value"></a>

## Return Value

A data object containing the JPEG data, or `nil` if there’s a problem generating the data. This function may return `nil` if the image has no data or if the underlying `CGImageRef` contains data in an unsupported bitmap format.

<a id="Discussion"></a>

## Discussion

If the image object’s underlying image data has been purged, calling this function forces that data to be reloaded into memory.

## See Also

### Image creation

- [Supporting HDR images in your app](../supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [pngData()](pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

# UIImageJPEGRepresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a data object that contains the image in JPEG format.

## Declaration

```objectivec
extern NSData *UIImageJPEGRepresentation(UIImage *image, CGFloat compressionQuality);
```

## Parameters

- `image`: The original image data.
- `compressionQuality`: The quality of the resulting JPEG image, expressed as a value from `0.0` to `1.0`. The value `0.0` represents the maximum compression (or lowest quality) while the value `1.0` represents the least compression (or best quality).

<a id="return-value"></a>

## Return Value

A data object containing the JPEG data, or `nil` if there’s a problem generating the data. This function may return `nil` if the image has no data or if the underlying `CGImageRef` contains data in an unsupported bitmap format.

<a id="Discussion"></a>

## Discussion

If the image object’s underlying image data has been purged, calling this function forces that data to be reloaded into memory.

## See Also

### Image creation

- [Supporting HDR images in your app](../supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [UIImagePNGRepresentation](pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

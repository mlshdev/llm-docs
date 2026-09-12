> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/pngdata()](https://developer.apple.com/documentation/uikit/uiimage/pngdata())

# pngData() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a data object that contains the specified image in PNG format.

## Declaration

```swift
func pngData() -> Data?
```

<a id="return-value"></a>

## Return Value

A data object containing the PNG data, or `nil` if there was a problem generating the data. This function may return `nil` if the image has no data or if the underlying `CGImageRef` contains data in an unsupported bitmap format.

<a id="Discussion"></a>

## Discussion

If the image object’s underlying image data has been purged, calling this function forces that data to be reloaded into memory.

## See Also

### Image creation

- [Supporting HDR images in your app](../supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [jpegData(compressionQuality:)](jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.

# UIImagePNGRepresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a data object that contains the specified image in PNG format.

## Declaration

```objectivec
extern NSData *UIImagePNGRepresentation(UIImage *image);
```

## Parameters

- `image`: The original image data.

<a id="return-value"></a>

## Return Value

A data object containing the PNG data, or `nil` if there was a problem generating the data. This function may return `nil` if the image has no data or if the underlying `CGImageRef` contains data in an unsupported bitmap format.

<a id="Discussion"></a>

## Discussion

If the image object’s underlying image data has been purged, calling this function forces that data to be reloaded into memory.

## See Also

### Image creation

- [Supporting HDR images in your app](../supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [UIImageJPEGRepresentation](jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.

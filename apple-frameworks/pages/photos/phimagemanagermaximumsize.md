> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanagermaximumsize](https://developer.apple.com/documentation/photos/phimagemanagermaximumsize)

# PHImageManagerMaximumSize (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A special value for requesting original image data or the largest rendered image available. .

## Declaration

```swift
let PHImageManagerMaximumSize: CGSize
```

<a id="Discussion"></a>

## Discussion

When you use the [PHImageManagerMaximumSize](phimagemanagermaximumsize.md) option, Photos provides the largest image available for the asset without scaling or cropping. (That is, it ignores the [resizeMode](phimagerequestoptions/resizemode.md) option.)

## See Also

### Requesting Images

- [requestImage(for:targetSize:contentMode:options:resultHandler:)](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md): Requests an image representation for the specified asset.
- [requestImageDataAndOrientation(for:options:resultHandler:)](phimagemanager/requestimagedataandorientation%28for_options_resulthandler_%29.md): Requests the largest represented image as data bytes and Exif orientation for the specified asset.

# PHImageManagerMaximumSize (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A special value for requesting original image data or the largest rendered image available. .

## Declaration

```objectivec
extern const CGSize PHImageManagerMaximumSize;
```

<a id="Discussion"></a>

## Discussion

When you use the [PHImageManagerMaximumSize](phimagemanagermaximumsize.md) option, Photos provides the largest image available for the asset without scaling or cropping. (That is, it ignores the [resizeMode](phimagerequestoptions/resizemode.md) option.)

## See Also

### Requesting Images

- [requestImageForAsset:targetSize:contentMode:options:resultHandler:](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md): Requests an image representation for the specified asset.
- [requestImageDataAndOrientationForAsset:options:resultHandler:](phimagemanager/requestimagedataandorientation%28for_options_resulthandler_%29.md): Requests the largest represented image as data bytes and Exif orientation for the specified asset.
- [requestImageDataForAsset:options:resultHandler:](https://developer.apple.com/documentation/photos/phimagemanager/requestimagedataforasset:options:resulthandler:): Deprecated. Requests full-sized image data for the specified asset.

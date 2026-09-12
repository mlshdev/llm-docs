> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanager/requestimagedataandorientation(for:options:resulthandler:)](https://developer.apple.com/documentation/photos/phimagemanager/requestimagedataandorientation(for:options:resulthandler:))

# requestImageDataAndOrientation(for:options:resultHandler:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Requests the largest represented image as data bytes and Exif orientation for the specified asset.

## Declaration

```swift
func requestImageDataAndOrientation(for asset: PHAsset, options: PHImageRequestOptions?, resultHandler: @escaping (Data?, String?, CGImagePropertyOrientation, [AnyHashable : Any]?) -> Void) -> PHImageRequestID
```

## Parameters

- `asset`: The asset for which to load image data.
- `options`: Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors.

  If [PHImageRequestOptionsVersion.current](../phimagerequestoptionsversion/current.md) is requested and the asset has adjustments, the largest rendered image data is returned. In all other cases, the original image data is returned.

  For further details, see [PHImageRequestOptions](../phimagerequestoptions.md).
- `resultHandler`: A block called, exactly once, when image loading is complete, providing the requested image or information about the status of the request.

  The block takes the following parameters:

  - **imageData**: The requested image.
  - **dataUTI**: The uniform type identifier for the image.
  - **orientation**: The Exif orientation for the image, as a [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md). For iOS or tvOS, convert this orientation to a [UIImage.Orientation](../../uikit/uiimage/orientation.md).
  - **info**: A dictionary providing information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest(\_:)](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos loads the largest available representation of the image asset, then calls your `resultHandler` block to provide the requested data. Depending on the options you specify and the current state of the asset, Photos may download asset data from the network.

By default, this method executes asynchronously. If you call it from a background thread, you may change the [isSynchronous](../phimagerequestoptions/issynchronous.md) property of the `options` parameter to `true` to block the calling thread until either the requested image is ready or an error occurs, at which time Photos calls your result handler. This method ignores the [deliveryMode](../phimagerequestoptions/deliverymode.md) option—Photos calls your result handler block exactly once.

If the [version](../phimagerequestoptions/version.md) option is set to [PHImageRequestOptionsVersion.current](../phimagerequestoptionsversion/current.md), Photos provides rendered image data, including the results of any edits that have been made to the asset content. Otherwise, Photos provides the originally captured image data for the asset.

## See Also

### Requesting Images

- [requestImage(for:targetSize:contentMode:options:resultHandler:)](requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md): Requests an image representation for the specified asset.
- [PHImageManagerMaximumSize](../phimagemanagermaximumsize.md): A special value for requesting original image data or the largest rendered image available. .

# requestImageDataAndOrientationForAsset:options:resultHandler: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Requests the largest represented image as data bytes and Exif orientation for the specified asset.

## Declaration

```objectivec
- (PHImageRequestID) requestImageDataAndOrientationForAsset:(PHAsset *) asset options:(PHImageRequestOptions *) options resultHandler:(void (^)(NSData *imageData, NSString *dataUTI, CGImagePropertyOrientation orientation, NSDictionary *info)) resultHandler;
```

## Parameters

- `asset`: The asset for which to load image data.
- `options`: Options specifying how Photos should handle the request, format the requested image, and notify your app of progress or errors.

  If [PHImageRequestOptionsVersionCurrent](../phimagerequestoptionsversion/current.md) is requested and the asset has adjustments, the largest rendered image data is returned. In all other cases, the original image data is returned.

  For further details, see [PHImageRequestOptions](../phimagerequestoptions.md).
- `resultHandler`: A block called, exactly once, when image loading is complete, providing the requested image or information about the status of the request.

  The block takes the following parameters:

  - **imageData**: The requested image.
  - **dataUTI**: The uniform type identifier for the image.
  - **orientation**: The Exif orientation for the image, as a [CGImagePropertyOrientation](../../imageio/cgimagepropertyorientation.md). For iOS or tvOS, convert this orientation to a [UIImageOrientation](../../uikit/uiimage/orientation.md).
  - **info**: A dictionary providing information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest:](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos loads the largest available representation of the image asset, then calls your `resultHandler` block to provide the requested data. Depending on the options you specify and the current state of the asset, Photos may download asset data from the network.

By default, this method executes asynchronously. If you call it from a background thread, you may change the [synchronous](../phimagerequestoptions/issynchronous.md) property of the `options` parameter to `true` to block the calling thread until either the requested image is ready or an error occurs, at which time Photos calls your result handler. This method ignores the [deliveryMode](../phimagerequestoptions/deliverymode.md) option—Photos calls your result handler block exactly once.

If the [version](../phimagerequestoptions/version.md) option is set to [PHImageRequestOptionsVersionCurrent](../phimagerequestoptionsversion/current.md), Photos provides rendered image data, including the results of any edits that have been made to the asset content. Otherwise, Photos provides the originally captured image data for the asset.

## See Also

### Requesting Images

- [requestImageForAsset:targetSize:contentMode:options:resultHandler:](requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md): Requests an image representation for the specified asset.
- [PHImageManagerMaximumSize](../phimagemanagermaximumsize.md): A special value for requesting original image data or the largest rendered image available. .
- [requestImageDataForAsset:options:resultHandler:](https://developer.apple.com/documentation/photos/phimagemanager/requestimagedataforasset:options:resulthandler:): Deprecated. Requests full-sized image data for the specified asset.

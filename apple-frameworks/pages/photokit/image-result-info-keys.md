> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/image-result-info-keys](https://developer.apple.com/documentation/photokit/image-result-info-keys)

# Image Result Info Keys (Swift)

**Framework:** Photos  
**Kind:** API Collection

Keys identifying information about an image loading result, used in the `resultHandler` block with image request methods.

## Topics

### Constants

- [PHImageResultIsInCloudKey](../photos/phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](../photos/phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](../photos/phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](../photos/phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](../photos/phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

## See Also

### Constants

- [PHImageContentMode](../photos/phimagecontentmode.md): Options for fitting an image’s aspect ratio to a requested size, used by the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../photos/phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

# Image Result Info Keys (Objective-C)

**Framework:** Photos  
**Kind:** API Collection

Keys identifying information about an image loading result, used in the `resultHandler` block with image request methods.

## Topics

### Constants

- [PHImageResultIsInCloudKey](../photos/phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](../photos/phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](../photos/phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](../photos/phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](../photos/phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

## See Also

### Constants

- [PHImageContentMode](../photos/phimagecontentmode.md): Options for fitting an image’s aspect ratio to a requested size, used by the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../photos/phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method.

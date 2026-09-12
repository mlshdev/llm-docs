> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimageresultisdegradedkey](https://developer.apple.com/documentation/photos/phimageresultisdegradedkey)

# PHImageResultIsDegradedKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether the result image is a low-quality substitute for the requested image.

## Declaration

```swift
let PHImageResultIsDegradedKey: String
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.If `true`, the `result` parameter of your `resultHandler` block contains a low-quality image because Photos could not yet provide a higher-quality image. Depending on your settings in the [PHImageRequestOptions](phimagerequestoptions.md) object that you provided with the request, Photos may call your result handler block again to provide a higher-quality image.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

# PHImageResultIsDegradedKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether the result image is a low-quality substitute for the requested image.

## Declaration

```objectivec
extern NSString * const PHImageResultIsDegradedKey;
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.If `true`, the `result` parameter of your `resultHandler` block contains a low-quality image because Photos could not yet provide a higher-quality image. Depending on your settings in the [PHImageRequestOptions](phimagerequestoptions.md) object that you provided with the request, Photos may call your result handler block again to provide a higher-quality image.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

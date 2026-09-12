> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagecancelledkey](https://developer.apple.com/documentation/photos/phimagecancelledkey)

# PHImageCancelledKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether the image request was canceled.

## Declaration

```swift
let PHImageCancelledKey: String
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.If you call the [cancelImageRequest(\_:)](phimagemanager/cancelimagerequest%28__%29.md) method to cancel a request, Photos calls your result handler block with the value `true` for this key.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

# PHImageCancelledKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether the image request was canceled.

## Declaration

```objectivec
extern NSString * const PHImageCancelledKey;
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.If you call the [cancelImageRequest:](phimagemanager/cancelimagerequest%28__%29.md) method to cancel a request, Photos calls your result handler block with the value `true` for this key.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

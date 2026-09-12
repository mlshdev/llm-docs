> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimageerrorkey](https://developer.apple.com/documentation/photos/phimageerrorkey)

# PHImageErrorKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value is an error that occurred when Photos attempted to load the image.

## Declaration

```swift
let PHImageErrorKey: String
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSError` object.Photos provides an error object for this key if it cannot provide an image for your handler block’s `result` parameter. Examine the error object for information about the cause of the error.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.

# PHImageErrorKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value is an error that occurred when Photos attempted to load the image.

## Declaration

```objectivec
extern NSString * const PHImageErrorKey;
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSError` object.Photos provides an error object for this key if it cannot provide an image for your handler block’s `result` parameter. Examine the error object for information about the cause of the error.

## See Also

### Constants

- [PHImageResultIsInCloudKey](phimageresultisincloudkey.md): A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.
- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.

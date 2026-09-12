> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimageresultisincloudkey](https://developer.apple.com/documentation/photos/phimageresultisincloudkey)

# PHImageResultIsInCloudKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.

## Declaration

```swift
let PHImageResultIsInCloudKey: String
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.

If `true`, no image was provided, because the asset data must be downloaded from iCloud. To download the data, submit another request, and specify `true` for the [isNetworkAccessAllowed](phimagerequestoptions/isnetworkaccessallowed.md) option.

## See Also

### Constants

- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

# PHImageResultIsInCloudKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key whose value indicates whether photo asset data is stored on the local device or must be downloaded from iCloud.

## Declaration

```objectivec
extern NSString * const PHImageResultIsInCloudKey;
```

<a id="Discussion"></a>

## Discussion

This key provides information about an image loading result in the `resultHandler` block for methods listed in Requesting Images. The corresponding value is an `NSNumber` object containing a Boolean value.

If `true`, no image was provided, because the asset data must be downloaded from iCloud. To download the data, submit another request, and specify `true` for the [networkAccessAllowed](phimagerequestoptions/isnetworkaccessallowed.md) option.

## See Also

### Constants

- [PHImageResultIsDegradedKey](phimageresultisdegradedkey.md): A key whose value indicates whether the result image is a low-quality substitute for the requested image.
- [PHImageResultRequestIDKey](phimageresultrequestidkey.md): A key whose value is a unique identifier for the image request.
- [PHImageCancelledKey](phimagecancelledkey.md): A key whose value indicates whether the image request was canceled.
- [PHImageErrorKey](phimageerrorkey.md): A key whose value is an error that occurred when Photos attempted to load the image.

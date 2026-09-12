> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoinfocancelledkey](https://developer.apple.com/documentation/photos/phlivephotoinfocancelledkey)

# PHLivePhotoInfoCancelledKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

## Declaration

```swift
let PHLivePhotoInfoCancelledKey: String
```

<a id="Discussion"></a>

## Discussion

If you call the [cancelRequest(withRequestID:)](phlivephoto/cancelrequest%28withrequestid_%29.md) method to cancel a request, Photos calls your result handler block with a `true` value for this key.

## See Also

### Constants

- [PHLivePhotoInfoErrorKey](phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoIsDegradedKey](phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.

# PHLivePhotoInfoCancelledKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

## Declaration

```objectivec
extern NSString * const PHLivePhotoInfoCancelledKey;
```

<a id="Discussion"></a>

## Discussion

If you call the [cancelLivePhotoRequestWithRequestID:](phlivephoto/cancelrequest%28withrequestid_%29.md) method to cancel a request, Photos calls your result handler block with a `true` value for this key.

## See Also

### Constants

- [PHLivePhotoInfoErrorKey](phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoIsDegradedKey](phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.

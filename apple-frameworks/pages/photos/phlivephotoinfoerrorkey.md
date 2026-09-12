> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoinfoerrorkey](https://developer.apple.com/documentation/photos/phlivephotoinfoerrorkey)

# PHLivePhotoInfoErrorKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An error that occurred while attempting to load the requested Live Photo.

## Declaration

```swift
let PHLivePhotoInfoErrorKey: String
```

<a id="Discussion"></a>

## Discussion

The [request(withResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:)](phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method validates that the files and their metadata can be loaded as a Live Photo. If Photos cannot load a Live Photo from the specified files, the `result` parameter in your result handler block is `nil`, and this key in the `info` dictionary contains an `NSError` object describing the error.

## See Also

### Constants

- [PHLivePhotoInfoIsDegradedKey](phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

# PHLivePhotoInfoErrorKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An error that occurred while attempting to load the requested Live Photo.

## Declaration

```objectivec
extern NSString * const PHLivePhotoInfoErrorKey;
```

<a id="Discussion"></a>

## Discussion

The [requestLivePhotoWithResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:](phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method validates that the files and their metadata can be loaded as a Live Photo. If Photos cannot load a Live Photo from the specified files, the `result` parameter in your result handler block is `nil`, and this key in the `info` dictionary contains an `NSError` object describing the error.

## See Also

### Constants

- [PHLivePhotoInfoIsDegradedKey](phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

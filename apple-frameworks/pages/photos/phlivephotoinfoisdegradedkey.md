> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoinfoisdegradedkey](https://developer.apple.com/documentation/photos/phlivephotoinfoisdegradedkey)

# PHLivePhotoInfoIsDegradedKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.

## Declaration

```swift
let PHLivePhotoInfoIsDegradedKey: String
```

<a id="Discussion"></a>

## Discussion

If `true`, the `result` parameter of your `resultHandler` block contains a still or low-quality Live Photo, and Photos will call your result handler block again to provide the full motion and sound content of the Live Photo. If `false`, Photos has provided all possible data and will not call your result handler again.

## See Also

### Constants

- [PHLivePhotoInfoErrorKey](phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

# PHLivePhotoInfoIsDegradedKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.

## Declaration

```objectivec
extern NSString * const PHLivePhotoInfoIsDegradedKey;
```

<a id="Discussion"></a>

## Discussion

If `true`, the `result` parameter of your `resultHandler` block contains a still or low-quality Live Photo, and Photos will call your result handler block again to provide the full motion and sound content of the Live Photo. If `false`, Photos has provided all possible data and will not call your result handler again.

## See Also

### Constants

- [PHLivePhotoInfoErrorKey](phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

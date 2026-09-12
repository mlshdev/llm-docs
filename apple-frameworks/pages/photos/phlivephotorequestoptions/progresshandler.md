> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotorequestoptions/progresshandler](https://developer.apple.com/documentation/photos/phlivephotorequestoptions/progresshandler)

# progressHandler (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the Live Photo.

## Declaration

```swift
var progressHandler: PHAssetImageProgressHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If you request a Live Photo whose data is not on the local device, and you have enabled downloading with the [PHLivePhotoRequestOptions](../phlivephotorequestoptions.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Image Data from iCloud

- [isNetworkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.

# progressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the Live Photo.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) PHAssetImageProgressHandler progressHandler;
```

<a id="Discussion"></a>

## Discussion

If you request a Live Photo whose data is not on the local device, and you have enabled downloading with the [PHLivePhotoRequestOptions](../phlivephotorequestoptions.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Image Data from iCloud

- [networkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.

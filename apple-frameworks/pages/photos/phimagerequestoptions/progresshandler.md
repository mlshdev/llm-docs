> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions/progresshandler](https://developer.apple.com/documentation/photos/phimagerequestoptions/progresshandler)

# progressHandler (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the image.

## Declaration

```swift
var progressHandler: PHAssetImageProgressHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If you request an image whose data is not on the local device, and you have enabled downloading with the [isNetworkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Image Data from iCloud

- [isNetworkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested image from iCloud.
- [PHAssetImageProgressHandler](../phassetimageprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](progresshandler.md) property.

# progressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) PHAssetImageProgressHandler progressHandler;
```

<a id="Discussion"></a>

## Discussion

If you request an image whose data is not on the local device, and you have enabled downloading with the [networkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Image Data from iCloud

- [networkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested image from iCloud.
- [PHAssetImageProgressHandler](../phassetimageprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](progresshandler.md) property.

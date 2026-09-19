> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phvideorequestoptions/progresshandler

# progressHandler (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block Photos calls periodically while downloading the video.

## Declaration

```swift
var progressHandler: PHAssetVideoProgressHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If you request a video whose data is not on the local device, and you have enabled downloading with the [isNetworkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Video Data from iCloud

- [isNetworkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested video from iCloud.
- [PHAssetVideoProgressHandler](../phassetvideoprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](progresshandler.md) property.

# progressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block Photos calls periodically while downloading the video.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) PHAssetVideoProgressHandler progressHandler;
```

<a id="Discussion"></a>

## Discussion

If you request a video whose data is not on the local device, and you have enabled downloading with the [networkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and to allow you to cancel the download.

## See Also

### Fetching Video Data from iCloud

- [networkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested video from iCloud.
- [PHAssetVideoProgressHandler](../phassetvideoprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](progresshandler.md) property.

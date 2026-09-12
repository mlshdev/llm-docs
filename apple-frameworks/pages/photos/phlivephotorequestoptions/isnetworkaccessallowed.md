> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotorequestoptions/isnetworkaccessallowed](https://developer.apple.com/documentation/photos/phlivephotorequestoptions/isnetworkaccessallowed)

# isNetworkAccessAllowed (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.

## Declaration

```swift
var isNetworkAccessAllowed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true`, and the requested Live Photo data is not stored on the local device, Photos downloads that data from iCloud. To be notified of the download’s progress, use the [progressHandler](progresshandler.md) property to provide a block that Photos calls periodically while downloading. If `false` (the default), and the Live Photo data is not on the local device, the [PHImageResultIsInCloudKey](../phimageresultisincloudkey.md) value in the result handler’s `info` dictionary indicates that the data is not available unless you enable network access.

## See Also

### Fetching Image Data from iCloud

- [progressHandler](progresshandler.md): A block that Photos calls periodically while downloading the Live Photo.

# networkAccessAllowed (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isNetworkAccessAllowed) BOOL networkAccessAllowed;
```

<a id="Discussion"></a>

## Discussion

If `true`, and the requested Live Photo data is not stored on the local device, Photos downloads that data from iCloud. To be notified of the download’s progress, use the [progressHandler](progresshandler.md) property to provide a block that Photos calls periodically while downloading. If `false` (the default), and the Live Photo data is not on the local device, the [PHImageResultIsInCloudKey](../phimageresultisincloudkey.md) value in the result handler’s `info` dictionary indicates that the data is not available unless you enable network access.

## See Also

### Fetching Image Data from iCloud

- [progressHandler](progresshandler.md): A block that Photos calls periodically while downloading the Live Photo.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputrequestoptions/progresshandler](https://developer.apple.com/documentation/photos/phcontenteditinginputrequestoptions/progresshandler)

# progressHandler (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block Photos calls periodically while downloading the asset.

## Declaration

```swift
var progressHandler: ((Double, UnsafeMutablePointer<ObjCBool>) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If you request an asset whose data is not on the local device, and have enabled downloading with the [isNetworkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and allow canceling the download.

The block takes the following parameters:

- **progress**: A floating-point value indicating the progress of the download. A value of `0.0` indicates the download has just started, and a value of `1.0` indicates the download is complete.
- **stop**: A pointer to a Boolean value. Set `*stop` to `true` inside the block to cancel the download.

## See Also

### Fetching Asset Data from iCloud

- [isNetworkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the asset from iCloud.

# progressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block Photos calls periodically while downloading the asset.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^progressHandler)(double progress, BOOL *stop);
```

<a id="Discussion"></a>

## Discussion

If you request an asset whose data is not on the local device, and have enabled downloading with the [networkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress and allow canceling the download.

The block takes the following parameters:

- **progress**: A floating-point value indicating the progress of the download. A value of `0.0` indicates the download has just started, and a value of `1.0` indicates the download is complete.
- **stop**: A pointer to a Boolean value. Set `*stop` to `true` inside the block to cancel the download.

## See Also

### Fetching Asset Data from iCloud

- [networkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the asset from iCloud.

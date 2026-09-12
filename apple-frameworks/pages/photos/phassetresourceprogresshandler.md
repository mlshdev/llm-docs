> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceprogresshandler](https://developer.apple.com/documentation/photos/phassetresourceprogresshandler)

# PHAssetResourceProgressHandler (Swift)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](phassetresourcerequestoptions/progresshandler.md) property.

## Declaration

```swift
typealias PHAssetResourceProgressHandler = (Double) -> Void
```

<a id="Discussion"></a>

## Discussion

If you request an asset resource whose data is not on the local device, and you have enabled downloading with the [isNetworkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress.

The block takes a single parameter:

- **progress**: A floating-point value indicating the progress of the download. A value of `0.0` indicates that the download has just started, and a value of `1.0` indicates the download is complete.

## See Also

### Fetching Resource Data from iCloud

- [isNetworkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [progressHandler](phassetresourcerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.

# PHAssetResourceProgressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](phassetresourcerequestoptions/progresshandler.md) property.

## Declaration

```objectivec
typedef void (^)(double) PHAssetResourceProgressHandler;
```

<a id="Discussion"></a>

## Discussion

If you request an asset resource whose data is not on the local device, and you have enabled downloading with the [networkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress.

The block takes a single parameter:

- **progress**: A floating-point value indicating the progress of the download. A value of `0.0` indicates that the download has just started, and a value of `1.0` indicates the download is complete.

## See Also

### Fetching Resource Data from iCloud

- [networkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [progressHandler](phassetresourcerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.

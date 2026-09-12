> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcerequestoptions/progresshandler](https://developer.apple.com/documentation/photos/phassetresourcerequestoptions/progresshandler)

# progressHandler (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the asset resource data.

## Declaration

```swift
var progressHandler: PHAssetResourceProgressHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

If you request an asset resource whose data is not on the local device, and you have enabled downloading with the [isNetworkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress.

## See Also

### Fetching Resource Data from iCloud

- [isNetworkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [PHAssetResourceProgressHandler](../phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](progresshandler.md) property.

# progressHandler (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block that Photos calls periodically while downloading the asset resource data.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) PHAssetResourceProgressHandler progressHandler;
```

<a id="Discussion"></a>

## Discussion

If you request an asset resource whose data is not on the local device, and you have enabled downloading with the [networkAccessAllowed](isnetworkaccessallowed.md) property, Photos calls your block periodically to report progress.

## See Also

### Fetching Resource Data from iCloud

- [networkAccessAllowed](isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [PHAssetResourceProgressHandler](../phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](progresshandler.md) property.

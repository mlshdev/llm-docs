> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcerequestoptions/isnetworkaccessallowed](https://developer.apple.com/documentation/photos/phassetresourcerequestoptions/isnetworkaccessallowed)

# isNetworkAccessAllowed (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.

## Declaration

```swift
var isNetworkAccessAllowed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `true`, and the requested resource data is not stored on the local device, Photos downloads that data from iCloud. To be notified of the download’s progress, use the [progressHandler](progresshandler.md) property to provide a block that Photos calls periodically while downloading the resource data. If `false` (the default), and the resource data is not on the local device, Photos calls the `completionHandler` block you provided in your request, with an `NSError` object indicating that the resource requires network access.

## See Also

### Fetching Resource Data from iCloud

- [progressHandler](progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.
- [PHAssetResourceProgressHandler](../phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](progresshandler.md) property.

# networkAccessAllowed (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isNetworkAccessAllowed) BOOL networkAccessAllowed;
```

<a id="Discussion"></a>

## Discussion

If `true`, and the requested resource data is not stored on the local device, Photos downloads that data from iCloud. To be notified of the download’s progress, use the [progressHandler](progresshandler.md) property to provide a block that Photos calls periodically while downloading the resource data. If `false` (the default), and the resource data is not on the local device, Photos calls the `completionHandler` block you provided in your request, with an `NSError` object indicating that the resource requires network access.

## See Also

### Fetching Resource Data from iCloud

- [progressHandler](progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.
- [PHAssetResourceProgressHandler](../phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](progresshandler.md) property.

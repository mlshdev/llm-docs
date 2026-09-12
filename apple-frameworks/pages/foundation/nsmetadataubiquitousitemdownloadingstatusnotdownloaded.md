> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataubiquitousitemdownloadingstatusnotdownloaded](https://developer.apple.com/documentation/foundation/nsmetadataubiquitousitemdownloadingstatusnotdownloaded)

# NSMetadataUbiquitousItemDownloadingStatusNotDownloaded (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
let NSMetadataUbiquitousItemDownloadingStatusNotDownloaded: String
```

<a id="Discussion"></a>

## Discussion

A string used as the value for [NSMetadataUbiquitousItemPercentUploadedKey](nsmetadataubiquitousitempercentuploadedkey.md) to indicate that this item has not been downloaded yet.

You can use [startDownloadingUbiquitousItem(at:)](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.

## See Also

### iCloud Download Status Values

- [NSMetadataUbiquitousItemDownloadingStatusCurrent](nsmetadataubiquitousitemdownloadingstatuscurrent.md)
- [NSMetadataUbiquitousItemDownloadingStatusDownloaded](nsmetadataubiquitousitemdownloadingstatusdownloaded.md)

# NSMetadataUbiquitousItemDownloadingStatusNotDownloaded (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSString * const NSMetadataUbiquitousItemDownloadingStatusNotDownloaded;
```

<a id="Discussion"></a>

## Discussion

A string used as the value for [NSMetadataUbiquitousItemPercentUploadedKey](nsmetadataubiquitousitempercentuploadedkey.md) to indicate that this item has not been downloaded yet.

You can use [startDownloadingUbiquitousItemAtURL:error:](filemanager/startdownloadingubiquitousitem%28at_%29.md) to download the item.

## See Also

### iCloud Download Status Values

- [NSMetadataUbiquitousItemDownloadingStatusCurrent](nsmetadataubiquitousitemdownloadingstatuscurrent.md)
- [NSMetadataUbiquitousItemDownloadingStatusDownloaded](nsmetadataubiquitousitemdownloadingstatusdownloaded.md)

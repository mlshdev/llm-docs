> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/ubiquitousitempercentdownloadedkey](https://developer.apple.com/documentation/foundation/urlresourcekey/ubiquitousitempercentdownloadedkey)

# ubiquitousItemPercentDownloadedKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 5.0+ (deprecated in 6.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The key for a value that indicates the percentage of data that the system downloaded from iCloud storage.

> Use the [NSMetadataQuery](../nsmetadataquery.md) class to search for [NSMetadataItem](../nsmetadataitem.md) objects that have the [NSMetadataUbiquitousItemPercentDownloadedKey](../nsmetadataubiquitousitempercentdownloadedkey.md) attribute instead.

## Declaration

```swift
static let ubiquitousItemPercentDownloadedKey: URLResourceKey
```

## See Also

### Deprecated

- [ubiquitousItemIsDownloadedKey](ubiquitousitemisdownloadedkey.md): Deprecated. The key for a Boolean value that indicates whether the system downloaded this item’s data from iCloud storage.
- [ubiquitousItemPercentUploadedKey](ubiquitousitempercentuploadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system uploaded to iCloud storage.

# NSURLUbiquitousItemPercentDownloadedKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 6.0) · iPadOS 5.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.8) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The key for a value that indicates the percentage of data that the system downloaded from iCloud storage.

> Use the [NSMetadataQuery](../nsmetadataquery.md) class to search for [NSMetadataItem](../nsmetadataitem.md) objects that have the [NSMetadataUbiquitousItemPercentDownloadedKey](../nsmetadataubiquitousitempercentdownloadedkey.md) attribute instead.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLUbiquitousItemPercentDownloadedKey;
```

## See Also

### Deprecated

- [NSURLUbiquitousItemIsDownloadedKey](ubiquitousitemisdownloadedkey.md): Deprecated. The key for a Boolean value that indicates whether the system downloaded this item’s data from iCloud storage.
- [NSURLUbiquitousItemPercentUploadedKey](ubiquitousitempercentuploadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system uploaded to iCloud storage.

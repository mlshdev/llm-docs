> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/ubiquitousitemisdownloadedkey](https://developer.apple.com/documentation/foundation/urlresourcekey/ubiquitousitemisdownloadedkey)

# ubiquitousItemIsDownloadedKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The key for a Boolean value that indicates whether the system downloaded this item’s data from iCloud storage.

> Use NSURLUbiquitousItemDownloadingStatusKey instead

## Declaration

```swift
static let ubiquitousItemIsDownloadedKey: URLResourceKey
```

## See Also

### Deprecated

- [ubiquitousItemPercentDownloadedKey](ubiquitousitempercentdownloadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system downloaded from iCloud storage.
- [ubiquitousItemPercentUploadedKey](ubiquitousitempercentuploadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system uploaded to iCloud storage.

# NSURLUbiquitousItemIsDownloadedKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The key for a Boolean value that indicates whether the system downloaded this item’s data from iCloud storage.

> Use NSURLUbiquitousItemDownloadingStatusKey instead

## Declaration

```objectivec
extern NSURLResourceKey const NSURLUbiquitousItemIsDownloadedKey;
```

## See Also

### Deprecated

- [NSURLUbiquitousItemPercentDownloadedKey](ubiquitousitempercentdownloadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system downloaded from iCloud storage.
- [NSURLUbiquitousItemPercentUploadedKey](ubiquitousitempercentuploadedkey.md): Deprecated. The key for a value that indicates the percentage of data that the system uploaded to iCloud storage.

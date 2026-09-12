> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlubiquitousitemdownloadingstatus/current](https://developer.apple.com/documentation/foundation/urlubiquitousitemdownloadingstatus/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A local copy of this item exists and is the most up-to-date version known to the device.

## Declaration

```swift
static let current: URLUbiquitousItemDownloadingStatus
```

## See Also

### Constants

- [downloaded](downloaded.md): A local copy of this item exists, but it is stale. The most recent version will be downloaded as soon as possible.
- [notDownloaded](notdownloaded.md): This item has not been downloaded yet. Use [startDownloadingUbiquitousItem(at:)](../filemanager/startdownloadingubiquitousitem%28at_%29.md) to download it.

# NSURLUbiquitousItemDownloadingStatusCurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A local copy of this item exists and is the most up-to-date version known to the device.

## Declaration

```objectivec
extern NSURLUbiquitousItemDownloadingStatus const NSURLUbiquitousItemDownloadingStatusCurrent;
```

## See Also

### Constants

- [NSURLUbiquitousItemDownloadingStatusDownloaded](downloaded.md): A local copy of this item exists, but it is stale. The most recent version will be downloaded as soon as possible.
- [NSURLUbiquitousItemDownloadingStatusNotDownloaded](notdownloaded.md): This item has not been downloaded yet. Use [startDownloadingUbiquitousItemAtURL:error:](../filemanager/startdownloadingubiquitousitem%28at_%29.md) to download it.

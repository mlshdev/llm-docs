> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/removependingexpiredsessionreports(_:withappidentifier:storagedirectoryat:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/removependingexpiredsessionreports(_:withappidentifier:storagedirectoryat:))

# removePendingExpiredSessionReports(\_:withAppIdentifier:storageDirectoryAt:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes expired session reports from storage.

## Declaration

```swift
class func removePendingExpiredSessionReports(_ expiredSessionReports: [Data], withAppIdentifier appIdentifier: Data, storageDirectoryAt storageURL: URL)
```

## Parameters

- `expiredSessionReports`: An array of expired session reports to delete.
- `appIdentifier`: The opaque identifier for the app.
- `storageURL`: The URL that points to the directory containing expired session reports.

## See Also

### Handling expired session reports

- [pendingExpiredSessionReports(withAppIdentifier:storageDirectoryAt:)](pendingexpiredsessionreports%28withappidentifier_storagedirectoryat_%29.md): Returns the expired session reports for content key sessions created with the specified app identifier.

# removePendingExpiredSessionReports:withAppIdentifier:storageDirectoryAtURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes expired session reports from storage.

## Declaration

```objectivec
+ (void) removePendingExpiredSessionReports:(NSArray<NSData *> *) expiredSessionReports withAppIdentifier:(NSData *) appIdentifier storageDirectoryAtURL:(NSURL *) storageURL;
```

## Parameters

- `expiredSessionReports`: An array of expired session reports to delete.
- `appIdentifier`: The opaque identifier for the app.
- `storageURL`: The URL that points to the directory containing expired session reports.

## See Also

### Handling expired session reports

- [pendingExpiredSessionReportsWithAppIdentifier:storageDirectoryAtURL:](pendingexpiredsessionreports%28withappidentifier_storagedirectoryat_%29.md): Returns the expired session reports for content key sessions created with the specified app identifier.

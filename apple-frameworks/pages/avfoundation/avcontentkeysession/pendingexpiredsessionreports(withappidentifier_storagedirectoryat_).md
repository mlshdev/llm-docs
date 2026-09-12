> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/pendingexpiredsessionreports(withappidentifier:storagedirectoryat:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/pendingexpiredsessionreports(withappidentifier:storagedirectoryat:))

# pendingExpiredSessionReports(withAppIdentifier:storageDirectoryAt:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the expired session reports for content key sessions created with the specified app identifier.

## Declaration

```swift
class func pendingExpiredSessionReports(withAppIdentifier appIdentifier: Data, storageDirectoryAt storageURL: URL) -> [Data]
```

## Parameters

- `appIdentifier`: The opaque identifier for the app.
- `storageURL`: The URL that points to the directory containing expired session reports.

<a id="return-value"></a>

## Return Value

Returns an array of expired session reports.

<a id="Discussion"></a>

## Discussion

The system only returns expired session reports. It doesn’t include reports for active sessions.

## See Also

### Handling expired session reports

- [removePendingExpiredSessionReports(\_:withAppIdentifier:storageDirectoryAt:)](removependingexpiredsessionreports%28__withappidentifier_storagedirectoryat_%29.md): Removes expired session reports from storage.

# pendingExpiredSessionReportsWithAppIdentifier:storageDirectoryAtURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the expired session reports for content key sessions created with the specified app identifier.

## Declaration

```objectivec
+ (NSArray<NSData *> *) pendingExpiredSessionReportsWithAppIdentifier:(NSData *) appIdentifier storageDirectoryAtURL:(NSURL *) storageURL;
```

## Parameters

- `appIdentifier`: The opaque identifier for the app.
- `storageURL`: The URL that points to the directory containing expired session reports.

<a id="return-value"></a>

## Return Value

Returns an array of expired session reports.

<a id="Discussion"></a>

## Discussion

The system only returns expired session reports. It doesn’t include reports for active sessions.

## See Also

### Handling expired session reports

- [removePendingExpiredSessionReports:withAppIdentifier:storageDirectoryAtURL:](removependingexpiredsessionreports%28__withappidentifier_storagedirectoryat_%29.md): Removes expired session reports from storage.

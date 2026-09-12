> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/start(_:)](https://developer.apple.com/documentation/storekit/skpaymentqueue/start(_:))

# start(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Adds a set of downloads to the download list.

> Hosted content is no longer supported.

## Declaration

```swift
func start(_ downloads: [SKDownload])
```

## Parameters

- `downloads`: An array of [SKDownload](../skdownload.md) objects to begin downloading.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

In order for a download object to be queued, it must be associated with a transaction that has been successfully purchased, but not yet finished.

## See Also

### Downloading Content

- [cancel(\_:)](cancel%28__%29.md): Deprecated. Removes a set of downloads from the download list.
- [pause(\_:)](pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resume(\_:)](resume%28__%29.md): Deprecated. Resumes a set of downloads.

# startDownloads: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Adds a set of downloads to the download list.

> Hosted content is no longer supported.

## Declaration

```objectivec
- (void) startDownloads:(NSArray<SKDownload *> *) downloads;
```

## Parameters

- `downloads`: An array of [SKDownload](../skdownload.md) objects to begin downloading.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

In order for a download object to be queued, it must be associated with a transaction that has been successfully purchased, but not yet finished.

## See Also

### Downloading Content

- [cancelDownloads:](cancel%28__%29.md): Deprecated. Removes a set of downloads from the download list.
- [pauseDownloads:](pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resumeDownloads:](resume%28__%29.md): Deprecated. Resumes a set of downloads.

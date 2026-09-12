> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/cancel(_:)](https://developer.apple.com/documentation/storekit/skpaymentqueue/cancel(_:))

# cancel(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Removes a set of downloads from the download list.

> Hosted content is no longer supported.

## Declaration

```swift
func cancel(_ downloads: [SKDownload])
```

## Parameters

- `downloads`: An array of [SKDownload](../skdownload.md) objects to cancel.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

## See Also

### Downloading Content

- [start(\_:)](start%28__%29.md): Deprecated. Adds a set of downloads to the download list.
- [pause(\_:)](pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resume(\_:)](resume%28__%29.md): Deprecated. Resumes a set of downloads.

# cancelDownloads: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Removes a set of downloads from the download list.

> Hosted content is no longer supported.

## Declaration

```objectivec
- (void) cancelDownloads:(NSArray<SKDownload *> *) downloads;
```

## Parameters

- `downloads`: An array of [SKDownload](../skdownload.md) objects to cancel.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

## See Also

### Downloading Content

- [startDownloads:](start%28__%29.md): Deprecated. Adds a set of downloads to the download list.
- [pauseDownloads:](pause%28__%29.md): Deprecated. Pauses a set of downloads.
- [resumeDownloads:](resume%28__%29.md): Deprecated. Resumes a set of downloads.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/contenturl](https://developer.apple.com/documentation/storekit/skdownload/contenturl)

# contentURL (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The local location of the downloaded file.

> Hosted content is no longer supported.

## Declaration

```swift
var contentURL: URL? { get }
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The value of this property is valid only when the [downloadState](downloadstate.md) property is set to [SKDownloadState.finished](../skdownloadstate/finished.md). The URL becomes invalid after the transaction object associated with the download is finalized.

## See Also

### Accessing a Completed Download

- [error](error.md): Deprecated. The error that prevented the content from being downloaded.

# contentURL (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

The local location of the downloaded file.

> Hosted content is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * contentURL;
```

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

The value of this property is valid only when the [downloadState](downloadstate.md) property is set to [SKDownloadStateFinished](../skdownloadstate/finished.md). The URL becomes invalid after the transaction object associated with the download is finalized.

## See Also

### Accessing a Completed Download

- [error](error.md): Deprecated. The error that prevented the content from being downloaded.

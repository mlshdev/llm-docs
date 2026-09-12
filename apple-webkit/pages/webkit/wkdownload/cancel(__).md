> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload/cancel(_:)](https://developer.apple.com/documentation/webkit/wkdownload/cancel(_:))

# cancel(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Cancels the download, and optionally captures data so that you can resume the download later.

## Declaration

```swift
func cancel(_ completionHandler: (@MainActor @Sendable (Data?) -> Void)? = nil)
```

```swift
func cancel() async -> Data?
```

## Parameters

- `completionHandler`: A closure you provide to capture and store data so that you can resume the download later.

## See Also

### Managing the download

- [delegate](delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownload.RedirectPolicy](redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

# cancel: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Cancels the download, and optionally captures data so that you can resume the download later.

## Declaration

```objectivec
- (void) cancel:(void (^)(NSData *)) completionHandler;
```

## Parameters

- `completionHandler`: A closure you provide to capture and store data so that you can resume the download later.

## See Also

### Managing the download

- [delegate](delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownloadRedirectPolicy](redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

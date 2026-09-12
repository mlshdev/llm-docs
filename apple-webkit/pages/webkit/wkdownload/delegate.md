> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload/delegate](https://developer.apple.com/documentation/webkit/wkdownload/delegate)

# delegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object you use to track download progress and handle redirects, authentication challenges, and failures.

## Declaration

```swift
weak var delegate: (any WKDownloadDelegate)? { get set }
```

## See Also

### Managing the download

- [cancel(\_:)](cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.
- [WKDownload.RedirectPolicy](redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

# delegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object you use to track download progress and handle redirects, authentication challenges, and failures.

## Declaration

```objectivec
@property (nonatomic, weak) id<WKDownloadDelegate> delegate;
```

## See Also

### Managing the download

- [cancel:](cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.
- [WKDownloadRedirectPolicy](redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

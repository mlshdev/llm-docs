> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload/redirectpolicy](https://developer.apple.com/documentation/webkit/wkdownload/redirectpolicy)

# WKDownload.RedirectPolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An enumeration with cases that indicate whether to proceed with a redirect.

## Declaration

```swift
enum RedirectPolicy
```

## Topics

### Constants

- [WKDownload.RedirectPolicy.allow](redirectpolicy/allow.md): Allow a redirect to proceed.
- [WKDownload.RedirectPolicy.cancel](redirectpolicy/cancel.md): Cancel the redirect action.

### Initializers

- [init(rawValue:)](redirectpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the download

- [delegate](delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [cancel(\_:)](cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.

# WKDownloadRedirectPolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An enumeration with cases that indicate whether to proceed with a redirect.

## Declaration

```objectivec
enum WKDownloadRedirectPolicy : NSInteger;
```

## Topics

### Constants

- [WKDownloadRedirectPolicyAllow](redirectpolicy/allow.md): Allow a redirect to proceed.
- [WKDownloadRedirectPolicyCancel](redirectpolicy/cancel.md): Cancel the redirect action.

## See Also

### Managing the download

- [delegate](delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [cancel:](cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.

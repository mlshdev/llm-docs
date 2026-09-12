> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkdownload](https://developer.apple.com/documentation/webkit/wkdownload)

# WKDownload (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object that represents the download of a web resource.

## Declaration

```swift
@MainActor class WKDownload
```

## Topics

### Managing the download

- [delegate](wkdownload/delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [cancel(\_:)](wkdownload/cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.
- [WKDownload.RedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Inspecting the download

- [originalRequest](wkdownload/originalrequest.md): An object that represents the request that initiated the download.
- [webView](wkdownload/webview.md): The web view where the download initiated.

### Instance Properties

- [isUserInitiated](wkdownload/isuserinitiated.md)
- [originatingFrame](wkdownload/originatingframe.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [ProgressReporting](https://developer.apple.com/documentation/foundation/progressreporting)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Downloads

- [WKDownloadDelegate](wkdownloaddelegate.md): A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownload.PlaceholderPolicy](wkdownload/placeholderpolicy.md)

# WKDownload (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An object that represents the download of a web resource.

## Declaration

```objectivec
@interface WKDownload : NSObject
```

## Topics

### Managing the download

- [delegate](wkdownload/delegate.md): An object you use to track download progress and handle redirects, authentication challenges, and failures.
- [cancel:](wkdownload/cancel%28__%29.md): Cancels the download, and optionally captures data so that you can resume the download later.
- [WKDownloadRedirectPolicy](wkdownload/redirectpolicy.md): An enumeration with cases that indicate whether to proceed with a redirect.

### Inspecting the download

- [originalRequest](wkdownload/originalrequest.md): An object that represents the request that initiated the download.
- [webView](wkdownload/webview.md): The web view where the download initiated.

### Instance Properties

- [userInitiated](wkdownload/isuserinitiated.md)
- [originatingFrame](wkdownload/originatingframe.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSProgressReporting](https://developer.apple.com/documentation/foundation/progressreporting)

## See Also

### Downloads

- [WKDownloadDelegate](wkdownloaddelegate.md): A protocol you implement to track download progress and handle redirects, authentication challenges, and failures.
- [WKDownloadPlaceholderPolicy](wkdownload/placeholderpolicy.md)

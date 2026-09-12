> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadurlsession/init(configuration:assetdownloaddelegate:delegatequeue:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/init(configuration:assetdownloaddelegate:delegatequeue:))

# init(configuration:assetDownloadDelegate:delegateQueue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

Creates a URL session to download assets.

## Declaration

```swift
init(configuration: URLSessionConfiguration, assetDownloadDelegate delegate: (any AVAssetDownloadDelegate)?, delegateQueue: OperationQueue?)
```

## Parameters

- `configuration`: The configuration for this download session. The configuration you provide must be a *background* configuration or the system raises an exception.
- `delegate`: The delegate object to handle asset download progress updates and other session related events.
- `delegateQueue`: The queue to receive delegate callbacks on. If you specify `nil`, the system provides a serial queue.

<a id="return-value"></a>

## Return Value

A new download session.

## See Also

### Creating a download session

- [AVAssetDownloadDelegate](../avassetdownloaddelegate.md): A protocol that defines the methods to implement to respond to asset-download events.

# sessionWithConfiguration:assetDownloadDelegate:delegateQueue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

Creates a URL session to download assets.

## Declaration

```objectivec
+ (AVAssetDownloadURLSession *) sessionWithConfiguration:(NSURLSessionConfiguration *) configuration assetDownloadDelegate:(id<AVAssetDownloadDelegate>) delegate delegateQueue:(NSOperationQueue *) delegateQueue;
```

## Parameters

- `configuration`: The configuration for this download session. The configuration you provide must be a *background* configuration or the system raises an exception.
- `delegate`: The delegate object to handle asset download progress updates and other session related events.
- `delegateQueue`: The queue to receive delegate callbacks on. If you specify `nil`, the system provides a serial queue.

<a id="return-value"></a>

## Return Value

A new download session.

## See Also

### Creating a download session

- [AVAssetDownloadDelegate](../avassetdownloaddelegate.md): A protocol that defines the methods to implement to respond to asset-download events.

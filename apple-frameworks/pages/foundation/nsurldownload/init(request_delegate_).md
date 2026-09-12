> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/init(request:delegate:)](https://developer.apple.com/documentation/foundation/nsurldownload/init(request:delegate:))

# init(request:delegate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.11)

Returns an initialized URL download for a URL request and begins to download the data for the request.

> Use NSURLSession downloadTask (see NSURLSession.h)

## Declaration

```swift
init(request: URLRequest, delegate: (any NSURLDownloadDelegate)?)
```

## Parameters

- `request`: The URL request to download. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate for the download. This object will receive delegate messages as the download progresses. Delegate messages will be sent on the thread which calls this method. For the download to work correctly the calling thread’s run loop must be operating in the default run loop mode.

  The `NSURLDownload` class maintains a strong reference to this delegate object.

<a id="return-value"></a>

## Return Value

An initialized NSURLDownload object for `request`.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Creating and configuring a download instance

- [setDestination(\_:allowOverwrite:)](setdestination%28__allowoverwrite_%29.md): Sets the destination path of the downloaded file.

# initWithRequest:delegate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.11)

Returns an initialized URL download for a URL request and begins to download the data for the request.

> Use NSURLSession downloadTask (see NSURLSession.h)

## Declaration

```objectivec
- (instancetype) initWithRequest:(NSURLRequest *) request delegate:(id<NSURLDownloadDelegate>) delegate;
```

## Parameters

- `request`: The URL request to download. The `request` object is deep-copied as part of the initialization process. Changes made to `request` after this method returns do not affect the request that is used for the loading process.
- `delegate`: The delegate for the download. This object will receive delegate messages as the download progresses. Delegate messages will be sent on the thread which calls this method. For the download to work correctly the calling thread’s run loop must be operating in the default run loop mode.

  The `NSURLDownload` class maintains a strong reference to this delegate object.

<a id="return-value"></a>

## Return Value

An initialized NSURLDownload object for `request`.

## See Also

### Related Documentation

- [URL Loading System](../url-loading-system.md): Interact with URLs and communicate with servers using standard Internet protocols.

### Creating and configuring a download instance

- [setDestination:allowOverwrite:](setdestination%28__allowoverwrite_%29.md): Sets the destination path of the downloaded file.

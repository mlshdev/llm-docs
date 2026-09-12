> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/init(url:cachepolicy:timeoutinterval:)-2giyj](https://developer.apple.com/documentation/foundation/nsurlrequest/init(url:cachepolicy:timeoutinterval:)-2giyj)

# init(url:cachePolicy:timeoutInterval:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL request with the specified URL, cache policy, and timeout values.

## Declaration

```swift
init(url URL: URL, cachePolicy: NSURLRequest.CachePolicy, timeoutInterval: TimeInterval)
```

## Parameters

- `URL`: The URL for the request.
- `cachePolicy`: The cache policy for the request.
- `timeoutInterval`: The timeout interval for the request, in seconds.

<a id="return-value"></a>

## Return Value

The initialized URL request.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSURLRequest`.

## See Also

### Creating requests

- [init(url:)](init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.

# initWithURL:cachePolicy:timeoutInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL request with the specified URL, cache policy, and timeout values.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL cachePolicy:(NSURLRequestCachePolicy) cachePolicy timeoutInterval:(NSTimeInterval) timeoutInterval;
```

## Parameters

- `URL`: The URL for the request.
- `cachePolicy`: The cache policy for the request.
- `timeoutInterval`: The timeout interval for the request, in seconds.

<a id="return-value"></a>

## Return Value

The initialized URL request.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSURLRequest`.

## See Also

### Creating requests

- [requestWithURL:](requestwithurl_.md): Creates and returns a URL request for a specified URL.
- [initWithURL:](init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.
- [requestWithURL:cachePolicy:timeoutInterval:](requestwithurl_cachepolicy_timeoutinterval_.md): Creates and returns an initialized URL request with specified URL, cache policy, and timeout values.

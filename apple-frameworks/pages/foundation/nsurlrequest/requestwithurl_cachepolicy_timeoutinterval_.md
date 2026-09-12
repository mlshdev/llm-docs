> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/requestwithurl:cachepolicy:timeoutinterval:](https://developer.apple.com/documentation/foundation/nsurlrequest/requestwithurl:cachepolicy:timeoutinterval:)

# requestWithURL:cachePolicy:timeoutInterval:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized URL request with specified URL, cache policy, and timeout values.

## Declaration

```objectivec
+ (instancetype) requestWithURL:(NSURL *) URL cachePolicy:(NSURLRequestCachePolicy) cachePolicy timeoutInterval:(NSTimeInterval) timeoutInterval;
```

## Parameters

- `URL`: The URL for the new request.
- `cachePolicy`: The cache policy for the new request.
- `timeoutInterval`: The timeout interval for the new request, in seconds.

<a id="return-value"></a>

## Return Value

The initialized URL request.

## See Also

### Creating requests

- [requestWithURL:](requestwithurl_.md): Creates and returns a URL request for a specified URL.
- [initWithURL:](init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.
- [initWithURL:cachePolicy:timeoutInterval:](init%28url_cachepolicy_timeoutinterval_%29-2giyj.md): Creates a URL request with the specified URL, cache policy, and timeout values.

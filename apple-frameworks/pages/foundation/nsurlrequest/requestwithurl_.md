> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/requestwithurl:](https://developer.apple.com/documentation/foundation/nsurlrequest/requestwithurl:)

# requestWithURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a URL request for a specified URL.

## Declaration

```objectivec
+ (instancetype) requestWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: The URL for the new request.

<a id="return-value"></a>

## Return Value

The newly created URL request.

<a id="Discussion"></a>

## Discussion

The request is created with the with the default cache policy ([NSURLRequestUseProtocolCachePolicy](cachepolicy-swift.enum/useprotocolcachepolicy.md)), and the default timeout interval (60 seconds).

## See Also

### Creating requests

- [initWithURL:](init%28url_%29-7dmpd.md): Creates a URL request for a specified URL.
- [requestWithURL:cachePolicy:timeoutInterval:](requestwithurl_cachepolicy_timeoutinterval_.md): Creates and returns an initialized URL request with specified URL, cache policy, and timeout values.
- [initWithURL:cachePolicy:timeoutInterval:](init%28url_cachepolicy_timeoutinterval_%29-2giyj.md): Creates a URL request with the specified URL, cache policy, and timeout values.

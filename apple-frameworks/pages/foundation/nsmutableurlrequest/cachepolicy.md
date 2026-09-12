> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/cachepolicy](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/cachepolicy)

# cachePolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s cache policy.

## Declaration

```swift
var cachePolicy: NSURLRequest.CachePolicy { get set }
```

<a id="Discussion"></a>

## Discussion

This property is ignored for requests used to construct [URLSessionUploadTask](../urlsessionuploadtask.md) and [URLSessionDownloadTask](../urlsessiondownloadtask.md) objects, as caching is not supported by the URL Loading System for upload or download requests.

## See Also

### Working with a cache policy

- [NSURLRequest.CachePolicy](../nsurlrequest/cachepolicy-swift.enum.md): The constants used to specify interaction with the cached responses.

# cachePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The request’s cache policy.

## Declaration

```objectivec
@property NSURLRequestCachePolicy cachePolicy;
```

<a id="Discussion"></a>

## Discussion

This property is ignored for requests used to construct [NSURLSessionUploadTask](../urlsessionuploadtask.md) and [NSURLSessionDownloadTask](../urlsessiondownloadtask.md) objects, as caching is not supported by the URL Loading System for upload or download requests.

## See Also

### Working with a cache policy

- [NSURLRequestCachePolicy](../nsurlrequest/cachepolicy-swift.enum.md): The constants used to specify interaction with the cached responses.

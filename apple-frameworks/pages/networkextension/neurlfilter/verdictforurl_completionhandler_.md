> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilter/verdictforurl:completionhandler:](https://developer.apple.com/documentation/networkextension/neurlfilter/verdictforurl:completionhandler:)

# verdictForURL:completionHandler:

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Determines if accessing the specified URL is allowed or denied.

## Declaration

```objectivec
+ (void) verdictForURL:(NSURL *) url completionHandler:(void (^)(NEURLFilterVerdict result)) completionHandler;
```

## Parameters

- `url`: The URL to be validated.
- `completionHandler`: A block that the system calls when it completes validation. The block receives a [NEURLFilterVerdict](verdict.md) parameter that indicates whether the filter allows or denies connecting to the URL. If the verdict is deny, the caller should fail the URL request.

<a id="discussion"></a>

## Discussion

Callers should honor the return verdict to prevent communication with restricted or malicious sites.

## See Also

### Evaluating a URL

- [NEURLFilterVerdict](verdict.md): A verdict returned by a URL filter.

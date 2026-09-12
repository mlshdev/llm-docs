> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asautofillurlscope/init(url:)](https://developer.apple.com/documentation/authenticationservices/asautofillurlscope/init(url:))

# init(url:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Initialize with the components of a URL.

## Declaration

```swift
init?(url: URL)
```

## Parameters

- `url`: The URL to expand.

<a id="discussion"></a>

## Discussion

If the url string from the URL is malformed, nil is returned.

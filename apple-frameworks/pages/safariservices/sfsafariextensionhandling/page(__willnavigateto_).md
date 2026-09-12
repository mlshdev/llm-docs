> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/page(_:willnavigateto:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/page(_:willnavigateto:))

# page(\_:willNavigateTo:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

A method the system calls when a webpage is about to navigate to a new URL.

## Declaration

```swift
optional func page(_ page: SFSafariPage, willNavigateTo url: URL?)
```

## Parameters

- `page`: The webpage from which the user or script initiated the navigation.
- `url`: A URL for the destination webpage.

<a id="Discussion"></a>

## Discussion

The `url` parameter is `nil` if the extension does not have permission to access the destination webpage.

# page:willNavigateToURL: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

A method the system calls when a webpage is about to navigate to a new URL.

## Declaration

```objectivec
- (void) page:(SFSafariPage *) page willNavigateToURL:(NSURL *) url;
```

## Parameters

- `page`: The webpage from which the user or script initiated the navigation.
- `url`: A URL for the destination webpage.

<a id="Discussion"></a>

## Discussion

The `url` parameter is `nil` if the extension does not have permission to access the destination webpage.

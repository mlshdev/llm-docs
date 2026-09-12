> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationdeciding/decidepolicy(for:)](https://developer.apple.com/documentation/webkit/webpage/navigationdeciding/decidepolicy(for:))

# decidePolicy(for:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Determines permission to navigate to new content after the response to the navigation request is known.

## Declaration

```swift
@MainActor mutating func decidePolicy(for response: WebPage.NavigationResponse) async -> WKNavigationResponsePolicy
```

## Parameters

- `response`: Descriptive information about the navigation response.

<a id="return-value"></a>

## Return Value

The navigation policy for the response.

## Default Implementations

### WebPage.NavigationDeciding Implementations

- [decidePolicy(for:)](decidepolicy%28for_%29-6v2aq.md): By default, this method immediately returns with a policy of `.allow`.

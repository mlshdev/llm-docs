> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/postback/reengagementopenurlparameter](https://developer.apple.com/documentation/adattributionkit/postback/reengagementopenurlparameter)

# reengagementOpenURLParameter

**Framework:** AdAttributionKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A string that represents the query parameter that AdAttributionKit appends to the URL to indicate that a reengagement has occurred.

## Declaration

```swift
static var reengagementOpenURLParameter: String { get }
```

## Mentioned In

- [Receiving ad attributions and postbacks](../receiving-ad-attributions-and-postbacks.md)

<a id="discussion"></a>

## Discussion

When your advertised app receives a universal link, determine whether it came from an AdAttributionKit reengagement by checking the query parameters for a key containing this string, as the example below shows:

```swift
   func isAdAttributionKitReengagementURL(url: URL) -> Bool {
       guard let components = URLComponents(url: url, resolvingAgainstBaseURL: true),
             let queryItems = components.queryItems else {
           return false
       }
       return queryItems.contains { $0.name == Postback.reengagementOpenURLParameter }
   }
```

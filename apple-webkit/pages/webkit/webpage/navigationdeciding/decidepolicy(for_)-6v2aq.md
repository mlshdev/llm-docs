> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/navigationdeciding/decidepolicy(for:)-6v2aq

# decidePolicy(for:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

By default, this method immediately returns with a policy of `.allow`.

## Declaration

```swift
@MainActor func decidePolicy(for response: WebPage.NavigationResponse) async -> WKNavigationResponsePolicy
```

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationdeciding/decidepolicy(for:preferences:)](https://developer.apple.com/documentation/webkit/webpage/navigationdeciding/decidepolicy(for:preferences:))

# decidePolicy(for:preferences:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Determines permission to navigate to new content based on the specified preferences and action information.

## Declaration

```swift
@MainActor mutating func decidePolicy(for action: WebPage.NavigationAction, preferences: inout WebPage.NavigationPreferences) async -> WKNavigationActionPolicy
```

## Parameters

- `action`: Details about the action that triggered the navigation request.
- `preferences`: The preferences to use when displaying the new webpage.

<a id="return-value"></a>

## Return Value

The navigation policy for the action.

<a id="discussion"></a>

## Discussion

The web page calls this method after the interaction occurs but before it attempts to load any content.

## Default Implementations

### WebPage.NavigationDeciding Implementations

- [decidePolicy(for:preferences:)](decidepolicy%28for_preferences_%29-3lqmr.md): By default, this method immediately returns with a policy of `.allow`.

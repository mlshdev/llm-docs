> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/defaultnavigationpreferences](https://developer.apple.com/documentation/webkit/webpage/configuration/defaultnavigationpreferences)

# defaultNavigationPreferences

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The default preferences to use when loading and rendering content.

## Declaration

```swift
@MainActor var defaultNavigationPreferences: WebPage.NavigationPreferences
```

<a id="discussion"></a>

## Discussion

Use this property to specify the JavaScript settings and content mode for new navigations. When the webpage navigates to a new resource, it passes the default preferences to its navigation decider, which can modify the preferences if desired.

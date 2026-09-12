> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationpreferences/preferredcontentmode](https://developer.apple.com/documentation/webkit/webpage/navigationpreferences/preferredcontentmode)

# preferredContentMode

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The content mode for the web view to use when it loads and renders a webpage.

## Declaration

```swift
var preferredContentMode: WebPage.NavigationPreferences.ContentMode
```

<a id="discussion"></a>

## Discussion

The default value of this property is `recommended`. The web page ignores this preference for subframe navigation.

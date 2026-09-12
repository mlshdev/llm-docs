> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/websitedatastore](https://developer.apple.com/documentation/webkit/webpage/configuration/websitedatastore)

# websiteDataStore

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The object you use to get and set the site’s cookies and to track the cached data objects.

## Declaration

```swift
@MainActor var websiteDataStore: WKWebsiteDataStore
```

<a id="discussion"></a>

## Discussion

To create a private web-browsing session, create a non-persistent data store using the `nonPersistent()` method and assign it to this property. For more information, see `WKWebsiteDataStore`.

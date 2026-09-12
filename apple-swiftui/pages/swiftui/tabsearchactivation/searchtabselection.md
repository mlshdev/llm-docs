> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabsearchactivation/searchtabselection](https://developer.apple.com/documentation/swiftui/tabsearchactivation/searchtabselection)

# searchTabSelection

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Links the search tab’s selection to search activation.

## Declaration

```swift
static var searchTabSelection: TabSearchActivation { get }
```

<a id="discussion"></a>

## Discussion

When the search tab is selected, search will activate. When the user dismisses search, the search tab will be deselected and the previously selected tab will be reselected.

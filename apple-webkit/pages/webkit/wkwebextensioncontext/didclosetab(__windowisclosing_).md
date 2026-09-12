> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didclosetab(_:windowisclosing:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didclosetab(_:windowisclosing:))

# didCloseTab(\_:windowIsClosing:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a tab is closed to fire appropriate events with only this extension.

## Declaration

```swift
@MainActor @preconcurrency func didCloseTab(_ closedTab: any WKWebExtensionTab, windowIsClosing: Bool = false)
```

## Parameters

- `closedTab`: The tab that was closed.
- `windowIsClosing`: A Boolean value indicating whether the window containing the tab is also closing.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the closure of a tab. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didOpenTab(\_:)](didopentab%28__%29.md): Called by the app when a new tab is opened to fire appropriate events with only this extension.
- [openTabs](opentabs.md): A set of open tabs in all open windows that are exposed to this extension.

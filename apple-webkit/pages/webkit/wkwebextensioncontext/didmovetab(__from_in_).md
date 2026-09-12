> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didmovetab(_:from:in:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didmovetab(_:from:in:))

# didMoveTab(\_:from:in:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a tab is moved to fire appropriate events with only this extension.

## Declaration

```swift
@MainActor @preconcurrency func didMoveTab(_ movedTab: any WKWebExtensionTab, from index: Int, in oldWindow: (any WKWebExtensionWindow)? = nil)
```

## Parameters

- `movedTab`: The tab that was moved.
- `index`: The old index of the tab within the window.
- `oldWindow`: The window that the tab was moved from, or `nil` if the tab isn’t moving from an open window.

<a id="discussion"></a>

## Discussion

If the window is staying the same, the current window should be specified. This method informs only the specific extension that a tab has been moved. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

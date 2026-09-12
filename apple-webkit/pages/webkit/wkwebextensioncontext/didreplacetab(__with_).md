> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didreplacetab(_:with:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didreplacetab(_:with:))

# didReplaceTab(\_:with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a tab is replaced by another tab to fire appropriate events with only this extension.

## Declaration

```swift
func didReplaceTab(_ oldTab: any WKWebExtensionTab, with newTab: any WKWebExtensionTab)
```

## Parameters

- `oldTab`: The tab that was replaced.
- `newTab`: The tab that replaced the old tab.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that a tab has been replaced. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

# didReplaceTab:withTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a tab is replaced by another tab to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didReplaceTab:(id<WKWebExtensionTab>) oldTab withTab:(id<WKWebExtensionTab>) newTab;
```

## Parameters

- `oldTab`: The tab that was replaced.
- `newTab`: The tab that replaced the old tab.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that a tab has been replaced. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

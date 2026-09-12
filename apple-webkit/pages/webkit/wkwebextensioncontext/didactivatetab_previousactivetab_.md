> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didactivatetab:previousactivetab:](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didactivatetab:previousactivetab:)

# didActivateTab:previousActiveTab:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a tab is activated to notify only this specific extension.

## Declaration

```objectivec
- (void) didActivateTab:(id<WKWebExtensionTab>) activatedTab previousActiveTab:(id<WKWebExtensionTab>) previousTab;
```

## Parameters

- `activatedTab`: The tab that has become active.
- `previousTab`: The tab that was active before. This parameter can be `nil` if there was no previously active tab.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the tab activation. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

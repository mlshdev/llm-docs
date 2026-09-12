> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didreplacetab(_:with:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didreplacetab(_:with:))

# didReplaceTab(\_:with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a tab is replaced by another tab to fire appropriate events with all loaded web extensions.

## Declaration

```swift
func didReplaceTab(_ oldTab: any WKWebExtensionTab, with newTab: any WKWebExtensionTab)
```

## Parameters

- `oldTab`: The tab that was replaced.
- `newTab`: The tab that replaced the old tab.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of the replacement of a tab, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

# didReplaceTab:withTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a tab is replaced by another tab to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didReplaceTab:(id<WKWebExtensionTab>) oldTab withTab:(id<WKWebExtensionTab>) newTab;
```

## Parameters

- `oldTab`: The tab that was replaced.
- `newTab`: The tab that replaced the old tab.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of the replacement of a tab, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

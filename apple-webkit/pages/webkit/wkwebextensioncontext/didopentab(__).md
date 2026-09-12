> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didopentab(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didopentab(_:))

# didOpenTab(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a new tab is opened to fire appropriate events with only this extension.

## Declaration

```swift
func didOpenTab(_ newTab: any WKWebExtensionTab)
```

## Parameters

- `newTab`: The newly opened tab.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the opening of a new tab. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [openTabs](opentabs.md): A set of open tabs in all open windows that are exposed to this extension.

# didOpenTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when a new tab is opened to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didOpenTab:(id<WKWebExtensionTab>) newTab;
```

## Parameters

- `newTab`: The newly opened tab.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the opening of a new tab. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

## See Also

### Related Documentation

- [didCloseTab:windowIsClosing:](didclosetab_windowisclosing_.md): Called by the app when a tab is closed to fire appropriate events with only this extension.
- [openTabs](opentabs.md): A set of open tabs in all open windows that are exposed to this extension.

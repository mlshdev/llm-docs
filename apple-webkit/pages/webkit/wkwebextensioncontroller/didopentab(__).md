> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didopentab(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didopentab(_:))

# didOpenTab(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a new tab is opened to fire appropriate events with all loaded web extensions.

## Declaration

```swift
func didOpenTab(_ newTab: any WKWebExtensionTab)
```

## Parameters

- `newTab`: The newly opened tab.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of the opening of a new tab, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

## See Also

### Related Documentation

- [didCloseTab(\_:windowIsClosing:)](didclosetab%28__windowisclosing_%29.md): Should be called by the app when a tab is closed to fire appropriate events with all loaded web extensions.

# didOpenTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a new tab is opened to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didOpenTab:(id<WKWebExtensionTab>) newTab;
```

## Parameters

- `newTab`: The newly opened tab.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of the opening of a new tab, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didclosetab:windowisclosing:](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didclosetab:windowisclosing:)

# didCloseTab:windowIsClosing:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a tab is closed to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didCloseTab:(id<WKWebExtensionTab>) closedTab windowIsClosing:(BOOL) windowIsClosing;
```

## Parameters

- `closedTab`: The tab that was closed.
- `windowIsClosing`: A boolean value indicating whether the window containing the tab is also closing.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of the closing of a tab, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

## See Also

### Related Documentation

- [didOpenTab:](didopentab%28__%29.md): Should be called by the app when a new tab is opened to fire appropriate events with all loaded web extensions.

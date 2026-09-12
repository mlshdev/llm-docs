> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/action(for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/action(for:))

# action(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the extension action for a given tab, or the default action if `nil` is passed.

## Declaration

```swift
func action(for tab: (any WKWebExtensionTab)?) -> WKWebExtension.Action?
```

## Parameters

- `tab`: The tab for which to retrieve the extension action, or `nil` to get the default action.

<a id="discussion"></a>

## Discussion

The returned object represents the action specific to the tab when provided; otherwise, it returns the default action. The default action is useful when the context is unrelated to a specific tab. When possible, specify the tab to get the most context-relevant action.

## See Also

### Related Documentation

- [performAction(for:)](performaction%28for_%29.md): Performs the extension action associated with the specified tab or performs the default action if `nil` is passed.

# actionForTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Retrieves the extension action for a given tab, or the default action if `nil` is passed.

## Declaration

```objectivec
- (WKWebExtensionAction *) actionForTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `tab`: The tab for which to retrieve the extension action, or `nil` to get the default action.

<a id="discussion"></a>

## Discussion

The returned object represents the action specific to the tab when provided; otherwise, it returns the default action. The default action is useful when the context is unrelated to a specific tab. When possible, specify the tab to get the most context-relevant action.

## See Also

### Related Documentation

- [performActionForTab:](performaction%28for_%29.md): Performs the extension action associated with the specified tab or performs the default action if `nil` is passed.

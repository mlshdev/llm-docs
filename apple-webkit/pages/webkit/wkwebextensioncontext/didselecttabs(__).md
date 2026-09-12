> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didselecttabs(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didselecttabs(_:))

# didSelectTabs(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when tabs are selected to fire appropriate events with only this extension.

## Declaration

```swift
func didSelectTabs(_ selectedTabs: [any WKWebExtensionTab])
```

## Parameters

- `selectedTabs`: The set of tabs that were selected.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that tabs have been selected. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

# didSelectTabs: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when tabs are selected to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didSelectTabs:(NSArray<id<WKWebExtensionTab>> *) selectedTabs;
```

## Parameters

- `selectedTabs`: The set of tabs that were selected.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension that tabs have been selected. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didselecttabs(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didselecttabs(_:))

# didSelectTabs(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when tabs are selected to fire appropriate events with all loaded web extensions.

## Declaration

```swift
func didSelectTabs(_ selectedTabs: [any WKWebExtensionTab])
```

## Parameters

- `selectedTabs`: The set of tabs that were selected.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions that tabs have been selected, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

# didSelectTabs: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when tabs are selected to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didSelectTabs:(NSArray<id<WKWebExtensionTab>> *) selectedTabs;
```

## Parameters

- `selectedTabs`: The set of tabs that were selected.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions that tabs have been selected, ensuring consistent understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

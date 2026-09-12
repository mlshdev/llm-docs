> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/didchangetabproperties(_:for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/didchangetabproperties(_:for:))

# didChangeTabProperties(\_:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when the properties of a tab are changed to fire appropriate events with only this extension.

## Declaration

```swift
func didChangeTabProperties(_ properties: WKWebExtension.TabChangedProperties, for changedTab: any WKWebExtensionTab)
```

## Parameters

- `properties`: The properties of the tab that were changed.
- `changedTab`: The tab whose properties were changed.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the changes to a tab’s properties. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

# didChangeTabProperties:forTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app when the properties of a tab are changed to fire appropriate events with only this extension.

## Declaration

```objectivec
- (void) didChangeTabProperties:(WKWebExtensionTabChangedProperties) properties forTab:(id<WKWebExtensionTab>) changedTab;
```

## Parameters

- `properties`: The properties of the tab that were changed.
- `changedTab`: The tab whose properties were changed.

<a id="discussion"></a>

## Discussion

This method informs only the specific extension of the changes to a tab’s properties. If the intention is to inform all loaded extensions consistently, you should use the respective method on the extension controller instead.

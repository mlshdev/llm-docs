> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/didchangetabproperties(_:for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/didchangetabproperties(_:for:))

# didChangeTabProperties(\_:for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when the properties of a tab are changed to fire appropriate events with all loaded web extensions.

## Declaration

```swift
func didChangeTabProperties(_ properties: WKWebExtension.TabChangedProperties, for changedTab: any WKWebExtensionTab)
```

## Parameters

- `properties`: The properties of the tab that were changed.
- `changedTab`: The tab whose properties were changed.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of changes to tab properties, ensuring a unified understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

# didChangeTabProperties:forTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when the properties of a tab are changed to fire appropriate events with all loaded web extensions.

## Declaration

```objectivec
- (void) didChangeTabProperties:(WKWebExtensionTabChangedProperties) properties forTab:(id<WKWebExtensionTab>) changedTab;
```

## Parameters

- `properties`: The properties of the tab that were changed.
- `changedTab`: The tab whose properties were changed.

<a id="discussion"></a>

## Discussion

This method informs all loaded extensions of changes to tab properties, ensuring a unified understanding across extensions.

If the intention is to inform only a specific extension, you should use the respective method on that extension’s context instead.

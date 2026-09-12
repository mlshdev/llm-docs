> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/isselected(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/isselected(for:))

# isSelected(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the selected state of the tab is needed.

## Declaration

```swift
optional func isSelected(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `YES` for the active tab and `NO` for other tabs if not implemented.

# isSelectedForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the selected state of the tab is needed.

## Declaration

```objectivec
- (BOOL) isSelectedForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `YES` for the active tab and `NO` for other tabs if not implemented.

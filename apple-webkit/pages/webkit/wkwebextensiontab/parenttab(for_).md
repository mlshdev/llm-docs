> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/parenttab(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/parenttab(for:))

# parentTab(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the parent tab for the tab is needed.

## Declaration

```swift
optional func parentTab(for context: WKWebExtensionContext) -> (any WKWebExtensionTab)?
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `nil` if not implemented.

## See Also

### Related Documentation

- [setParentTab(\_:for:completionHandler:)](setparenttab%28__for_completionhandler_%29.md): Called to set or clear the parent tab for the tab.

# parentTabForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the parent tab for the tab is needed.

## Declaration

```objectivec
- (id<WKWebExtensionTab>) parentTabForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `nil` if not implemented.

## See Also

### Related Documentation

- [setParentTab:forWebExtensionContext:completionHandler:](setparenttab%28__for_completionhandler_%29.md): Called to set or clear the parent tab for the tab.

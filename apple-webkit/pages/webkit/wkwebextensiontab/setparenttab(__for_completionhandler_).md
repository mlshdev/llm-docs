> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/setparenttab(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/setparenttab(_:for:completionhandler:))

# setParentTab(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set or clear the parent tab for the tab.

## Declaration

```swift
optional func setParentTab(_ parentTab: (any WKWebExtensionTab)?, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setParentTab(_ parentTab: (any WKWebExtensionTab)?, for context: WKWebExtensionContext) async throws
```

## Parameters

- `parentTab`: The tab that should be set as the parent of the tab. If \\c nil is provided, the current parent tab should be cleared.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [parentTab(for:)](parenttab%28for_%29.md): Called when the parent tab for the tab is needed.

# setParentTab:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set or clear the parent tab for the tab.

## Declaration

```objectivec
- (void) setParentTab:(id<WKWebExtensionTab>) parentTab forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `parentTab`: The tab that should be set as the parent of the tab. If \\c nil is provided, the current parent tab should be cleared.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [parentTabForWebExtensionContext:](parenttab%28for_%29.md): Called when the parent tab for the tab is needed.

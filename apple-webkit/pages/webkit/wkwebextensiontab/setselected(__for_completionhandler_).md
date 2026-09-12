> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/setselected(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/setselected(_:for:completionhandler:))

# setSelected(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the selected state of the tab.

## Declaration

```swift
optional func setSelected(_ selected: Bool, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setSelected(_ selected: Bool, for context: WKWebExtensionContext) async throws
```

## Parameters

- `selected`: A boolean value indicating whether to select the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

This is equivalent to the user command-clicking on the tab to add it to or remove it from a selection.

The method should update the tab’s selection state without changing the active tab. No action is performed if not implemented.

## See Also

### Related Documentation

- [isSelected(for:)](isselected%28for_%29.md): Called when the selected state of the tab is needed.

# setSelected:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the selected state of the tab.

## Declaration

```objectivec
- (void) setSelected:(BOOL) selected forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `selected`: A boolean value indicating whether to select the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

This is equivalent to the user command-clicking on the tab to add it to or remove it from a selection.

The method should update the tab’s selection state without changing the active tab. No action is performed if not implemented.

## See Also

### Related Documentation

- [isSelectedForWebExtensionContext:](isselected%28for_%29.md): Called when the selected state of the tab is needed.

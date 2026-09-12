> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/activate(for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/activate(for:completionhandler:))

# activate(for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to activate the tab, making it frontmost.

## Declaration

```swift
optional func activate(for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func activate(for context: WKWebExtensionContext) async throws
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Upon activation, the tab should become the frontmost and either be the sole selected tab or be included among the selected tabs. No action is performed if not implemented.

## See Also

### Related Documentation

- [setSelected(\_:for:completionHandler:)](setselected%28__for_completionhandler_%29.md): Called to set the selected state of the tab.

# activateForWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to activate the tab, making it frontmost.

## Declaration

```objectivec
- (void) activateForWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Upon activation, the tab should become the frontmost and either be the sole selected tab or be included among the selected tabs. No action is performed if not implemented.

## See Also

### Related Documentation

- [setSelected:forWebExtensionContext:completionHandler:](setselected%28__for_completionhandler_%29.md): Called to set the selected state of the tab.

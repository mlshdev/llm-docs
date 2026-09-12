> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/setmuted(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/setmuted(_:for:completionhandler:))

# setMuted(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the mute state of the tab.

## Declaration

```swift
optional func setMuted(_ muted: Bool, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setMuted(_ muted: Bool, for context: WKWebExtensionContext) async throws
```

## Parameters

- `muted`: A boolean indicating whether the tab should be muted.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [isMuted(for:)](ismuted%28for_%29.md): Called to check if the tab is currently muted.

# setMuted:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the mute state of the tab.

## Declaration

```objectivec
- (void) setMuted:(BOOL) muted forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `muted`: A boolean indicating whether the tab should be muted.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

## See Also

### Related Documentation

- [isMutedForWebExtensionContext:](ismuted%28for_%29.md): Called to check if the tab is currently muted.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/ismuted(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/ismuted(for:))

# isMuted(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if the tab is currently muted.

## Declaration

```swift
optional func isMuted(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [setMuted(\_:for:completionHandler:)](setmuted%28__for_completionhandler_%29.md): Called to set the mute state of the tab.

# isMutedForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if the tab is currently muted.

## Declaration

```objectivec
- (BOOL) isMutedForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [setMuted:forWebExtensionContext:completionHandler:](setmuted%28__for_completionhandler_%29.md): Called to set the mute state of the tab.

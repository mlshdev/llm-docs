> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextensiontab/ispinned(for:)

# isPinned(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the pinned state of the tab is needed.

## Declaration

```swift
optional func isPinned(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [setPinned(\_:for:completionHandler:)](setpinned%28__for_completionhandler_%29.md): Called to set the pinned state of the tab.

# isPinnedForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the pinned state of the tab is needed.

## Declaration

```objectivec
- (BOOL) isPinnedForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented.

## See Also

### Related Documentation

- [setPinned:forWebExtensionContext:completionHandler:](setpinned%28__for_completionhandler_%29.md): Called to set the pinned state of the tab.

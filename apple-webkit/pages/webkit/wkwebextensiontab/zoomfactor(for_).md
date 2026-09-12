> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/zoomfactor(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/zoomfactor(for:))

# zoomFactor(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the zoom factor of the tab is needed.

## Declaration

```swift
optional func zoomFactor(for context: WKWebExtensionContext) -> Double
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [pageZoom](../wkwebview/pagezoom.md) of the tab’s web view if not implemented.

## See Also

### Related Documentation

- [setZoomFactor(\_:for:completionHandler:)](setzoomfactor%28__for_completionhandler_%29.md): Called to set the zoom factor of the tab.

# zoomFactorForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the zoom factor of the tab is needed.

## Declaration

```objectivec
- (double) zoomFactorForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [pageZoom](../wkwebview/pagezoom.md) of the tab’s web view if not implemented.

## See Also

### Related Documentation

- [setZoomFactor:forWebExtensionContext:completionHandler:](setzoomfactor%28__for_completionhandler_%29.md): Called to set the zoom factor of the tab.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/setzoomfactor(_:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/setzoomfactor(_:for:completionhandler:))

# setZoomFactor(\_:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the zoom factor of the tab.

## Declaration

```swift
optional func setZoomFactor(_ zoomFactor: Double, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func setZoomFactor(_ zoomFactor: Double, for context: WKWebExtensionContext) async throws
```

## Parameters

- `zoomFactor`: The desired zoom factor for the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Sets [pageZoom](../wkwebview/pagezoom.md) of the tab’s web view if not implemented.

## See Also

### Related Documentation

- [zoomFactor(for:)](zoomfactor%28for_%29.md): Called when the zoom factor of the tab is needed.

# setZoomFactor:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to set the zoom factor of the tab.

## Declaration

```objectivec
- (void) setZoomFactor:(double) zoomFactor forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `zoomFactor`: The desired zoom factor for the tab.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes a single error argument, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Sets [pageZoom](../wkwebview/pagezoom.md) of the tab’s web view if not implemented.

## See Also

### Related Documentation

- [zoomFactorForWebExtensionContext:](zoomfactor%28for_%29.md): Called when the zoom factor of the tab is needed.

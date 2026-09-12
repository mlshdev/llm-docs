> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/isloadingcomplete(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/isloadingcomplete(for:))

# isLoadingComplete(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if the tab has finished loading.

## Declaration

```swift
optional func isLoadingComplete(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [isLoading](../wkwebview/isloading.md) of the tab’s web view if not implemented.

# isLoadingCompleteForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to check if the tab has finished loading.

## Declaration

```objectivec
- (BOOL) isLoadingCompleteForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [loading](../wkwebview/isloading.md) of the tab’s web view if not implemented.

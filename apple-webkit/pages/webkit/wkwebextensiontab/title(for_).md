> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/title(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/title(for:))

# title(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the title of the tab is needed.

## Declaration

```swift
optional func title(for context: WKWebExtensionContext) -> String?
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [title](../wkwebview/title.md) of the tab’s web view if not implemented.

# titleForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the title of the tab is needed.

## Declaration

```objectivec
- (NSString *) titleForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to [title](../wkwebview/title.md) of the tab’s web view if not implemented.

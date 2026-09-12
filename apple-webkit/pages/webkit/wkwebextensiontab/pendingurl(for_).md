> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/pendingurl(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/pendingurl(for:))

# pendingURL(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the pending URL of the tab is needed.

## Declaration

```swift
optional func pendingURL(for context: WKWebExtensionContext) -> URL?
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

The pending URL is the URL of a page that is in the process of loading. If there is no pending URL, return `nil`.

Defaults to `nil` if not implemented.

# pendingURLForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the pending URL of the tab is needed.

## Declaration

```objectivec
- (NSURL *) pendingURLForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

The pending URL is the URL of a page that is in the process of loading. If there is no pending URL, return `nil`.

Defaults to `nil` if not implemented.

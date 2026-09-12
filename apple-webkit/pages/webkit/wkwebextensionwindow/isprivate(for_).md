> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow/isprivate(for:)](https://developer.apple.com/documentation/webkit/wkwebextensionwindow/isprivate(for:))

# isPrivate(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the private state of the window is needed.

## Declaration

```swift
optional func isPrivate(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented. This value is cached and will not change for the duration of the window or its contained tabs.

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data are not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../wkwebsitedatastore.md).

# isPrivateForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when the private state of the window is needed.

## Declaration

```objectivec
- (BOOL) isPrivateForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

Defaults to `NO` if not implemented. This value is cached and will not change for the duration of the window or its contained tabs.

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data are not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../wkwebsitedatastore.md).

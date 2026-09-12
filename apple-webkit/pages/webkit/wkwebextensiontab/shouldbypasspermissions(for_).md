> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/shouldbypasspermissions(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/shouldbypasspermissions(for:))

# shouldBypassPermissions(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to determine if the tab should bypass host permission checks.

## Declaration

```swift
optional func shouldBypassPermissions(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method allows the app to dynamically control whether a tab can bypass standard host permission checks.

# shouldBypassPermissionsForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to determine if the tab should bypass host permission checks.

## Declaration

```objectivec
- (BOOL) shouldBypassPermissionsForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method allows the app to dynamically control whether a tab can bypass standard host permission checks.

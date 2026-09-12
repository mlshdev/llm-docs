> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/shouldgrantpermissionsonusergesture(for:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/shouldgrantpermissionsonusergesture(for:))

# shouldGrantPermissionsOnUserGesture(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to determine if permissions should be granted for the tab on user gesture.

## Declaration

```swift
optional func shouldGrantPermissionsOnUserGesture(for context: WKWebExtensionContext) -> Bool
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method allows the app to control granting of permissions on a per-tab basis when triggered by a user gesture. Implementing this method enables the app to dynamically manage `activeTab` permissions based on the tab’s current state, the content being accessed, or other custom criteria.

# shouldGrantPermissionsOnUserGestureForWebExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to determine if permissions should be granted for the tab on user gesture.

## Declaration

```objectivec
- (BOOL) shouldGrantPermissionsOnUserGestureForWebExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `context`: The context in which the web extension is running.

<a id="discussion"></a>

## Discussion

This method allows the app to control granting of permissions on a per-tab basis when triggered by a user gesture. Implementing this method enables the app to dynamically manage `activeTab` permissions based on the tab’s current state, the content being accessed, or other custom criteria.

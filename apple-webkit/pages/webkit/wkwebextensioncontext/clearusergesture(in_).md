> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/clearusergesture(in:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/clearusergesture(in:))

# clearUserGesture(in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app to clear a user gesture in a specific tab.

## Declaration

```swift
func clearUserGesture(in tab: any WKWebExtensionTab)
```

## Parameters

- `tab`: The tab from which the user gesture should be cleared.

<a id="discussion"></a>

## Discussion

When a user gesture is no longer relevant in a tab, this method should be called to update the extension context.

This will revoke the extension’s access to features that require active user interaction, such as `activeTab`. User gestures are automatically cleared during navigation in certain scenarios; this method is needed if the app intends to clear the gesture more aggressively.

## See Also

### Related Documentation

- [userGesturePerformed(in:)](usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

# clearUserGestureInTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called by the app to clear a user gesture in a specific tab.

## Declaration

```objectivec
- (void) clearUserGestureInTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `tab`: The tab from which the user gesture should be cleared.

<a id="discussion"></a>

## Discussion

When a user gesture is no longer relevant in a tab, this method should be called to update the extension context.

This will revoke the extension’s access to features that require active user interaction, such as `activeTab`. User gestures are automatically cleared during navigation in certain scenarios; this method is needed if the app intends to clear the gesture more aggressively.

## See Also

### Related Documentation

- [userGesturePerformedInTab:](usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

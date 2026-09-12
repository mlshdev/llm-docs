> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/usergestureperformed(in:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/usergestureperformed(in:))

# userGesturePerformed(in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a user gesture is performed in a specific tab.

## Declaration

```swift
func userGesturePerformed(in tab: any WKWebExtensionTab)
```

## Parameters

- `tab`: The tab in which the user gesture was performed.

<a id="discussion"></a>

## Discussion

When a user gesture is performed in a tab, this method should be called to update the extension context.

This enables the extension to be aware of the user gesture, potentially granting it access to features that require user interaction, such as `activeTab`. Not required if using [performAction(for:)](performaction%28for_%29.md).

## See Also

### Related Documentation

- [hasActiveUserGesture(in:)](hasactiveusergesture%28in_%29.md): Indicates if a user gesture is currently active in the specified tab.

# userGesturePerformedInTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Should be called by the app when a user gesture is performed in a specific tab.

## Declaration

```objectivec
- (void) userGesturePerformedInTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `tab`: The tab in which the user gesture was performed.

<a id="discussion"></a>

## Discussion

When a user gesture is performed in a tab, this method should be called to update the extension context.

This enables the extension to be aware of the user gesture, potentially granting it access to features that require user interaction, such as `activeTab`. Not required if using [performActionForTab:](performaction%28for_%29.md).

## See Also

### Related Documentation

- [hasActiveUserGestureInTab:](hasactiveusergesture%28in_%29.md): Indicates if a user gesture is currently active in the specified tab.

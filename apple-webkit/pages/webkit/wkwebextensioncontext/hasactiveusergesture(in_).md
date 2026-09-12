> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasactiveusergesture(in:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasactiveusergesture(in:))

# hasActiveUserGesture(in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates if a user gesture is currently active in the specified tab.

## Declaration

```swift
func hasActiveUserGesture(in tab: any WKWebExtensionTab) -> Bool
```

## Parameters

- `tab`: The tab for which to check for an active user gesture.

<a id="discussion"></a>

## Discussion

An active user gesture may influence the availability of certain permissions, such as `activeTab`. User gestures can be triggered by various user interactions with the web extension, including clicking on extension menu items, executing extension commands, or interacting with extension actions. A tab as having an active user gesture enables the extension to access features that require user interaction.

## See Also

### Related Documentation

- [userGesturePerformed(in:)](usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

# hasActiveUserGestureInTab: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates if a user gesture is currently active in the specified tab.

## Declaration

```objectivec
- (BOOL) hasActiveUserGestureInTab:(id<WKWebExtensionTab>) tab;
```

## Parameters

- `tab`: The tab for which to check for an active user gesture.

<a id="discussion"></a>

## Discussion

An active user gesture may influence the availability of certain permissions, such as `activeTab`. User gestures can be triggered by various user interactions with the web extension, including clicking on extension menu items, executing extension commands, or interacting with extension actions. A tab as having an active user gesture enables the extension to access features that require user interaction.

## See Also

### Related Documentation

- [userGesturePerformedInTab:](usergestureperformed%28in_%29.md): Should be called by the app when a user gesture is performed in a specific tab.

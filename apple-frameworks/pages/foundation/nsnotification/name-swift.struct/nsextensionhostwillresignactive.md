> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsextensionhostwillresignactive](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsextensionhostwillresignactive)

# NSExtensionHostWillResignActive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app moves from the active to the inactive state.

## Declaration

```swift
static let NSExtensionHostWillResignActive: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to adjust their activity when they become inactive. For example, you might use this notification to save any unsaved data to prevent it from being lost. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActive](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackground](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForeground](nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

# NSExtensionHostWillResignActiveNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app moves from the active to the inactive state.

## Declaration

```objectivec
extern NSString * const NSExtensionHostWillResignActiveNotification;
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to adjust their activity when they become inactive. For example, you might use this notification to save any unsaved data to prevent it from being lost. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActiveNotification](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackgroundNotification](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForegroundNotification](nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

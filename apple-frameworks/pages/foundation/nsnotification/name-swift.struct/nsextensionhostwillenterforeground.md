> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsextensionhostwillenterforeground](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsextensionhostwillenterforeground)

# NSExtensionHostWillEnterForeground (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app begins running in the foreground.

## Declaration

```swift
static let NSExtensionHostWillEnterForeground: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to restart tasks that it stopped when they moved to the background. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActive](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActive](nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostDidEnterBackground](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.

# NSExtensionHostWillEnterForegroundNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app begins running in the foreground.

## Declaration

```objectivec
extern NSString * const NSExtensionHostWillEnterForegroundNotification;
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to restart tasks that it stopped when they moved to the background. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActiveNotification](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActiveNotification](nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostDidEnterBackgroundNotification](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.

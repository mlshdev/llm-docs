> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsextensionhostdidenterbackground](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsextensionhostdidenterbackground)

# NSExtensionHostDidEnterBackground (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app begins running in the background.

## Declaration

```swift
static let NSExtensionHostDidEnterBackground: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to stop tasks and prepare the extension to be suspended. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

Extensions receive only a short amount of time to perform any background work. If you need more time to complete critical tasks, use the methods of the [ProcessInfo](../../processinfo.md) class to request that time.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActive](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActive](nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostWillEnterForeground](nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

# NSExtensionHostDidEnterBackgroundNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the extension’s host app begins running in the background.

## Declaration

```objectivec
extern NSString * const NSExtensionHostDidEnterBackgroundNotification;
```

<a id="Discussion"></a>

## Discussion

Extensions can use this notification to stop tasks and prepare the extension to be suspended. The `object` parameter contains the `NSExtensionContext` object. This notification does not contain a `userInfo` dictionary.

Extensions receive only a short amount of time to perform any background work. If you need more time to complete critical tasks, use the methods of the [NSProcessInfo](../../processinfo.md) class to request that time.

## See Also

### Working with notifications

- [NSExtensionHostDidBecomeActiveNotification](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActiveNotification](nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostWillEnterForegroundNotification](nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

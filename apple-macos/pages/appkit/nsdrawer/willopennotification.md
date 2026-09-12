> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/willopennotification](https://developer.apple.com/documentation/appkit/nsdrawer/willopennotification)

# willOpenNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is about to open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
class let willOpenNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object about to open. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [didCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [didOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [willCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.

# NSDrawerWillOpenNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is about to open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
extern NSNotificationName NSDrawerWillOpenNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object about to open. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSDrawerDidCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [NSDrawerDidOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [NSDrawerWillCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.

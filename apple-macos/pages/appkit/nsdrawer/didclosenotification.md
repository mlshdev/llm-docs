> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/didclosenotification](https://developer.apple.com/documentation/appkit/nsdrawer/didclosenotification)

# didCloseNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is closed.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
class let didCloseNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object that closed. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [didOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [willCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [willOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

# NSDrawerDidCloseNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is closed.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
extern NSNotificationName NSDrawerDidCloseNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object that closed. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSDrawerDidOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [NSDrawerWillCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [NSDrawerWillOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

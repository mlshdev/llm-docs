> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/didopennotification](https://developer.apple.com/documentation/appkit/nsdrawer/didopennotification)

# didOpenNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is opened.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
class let didOpenNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object that opened. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [didCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [willCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [willOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

# NSDrawerDidOpenNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is opened.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
extern NSNotificationName NSDrawerDidOpenNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer` object that opened. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSDrawerDidCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [NSDrawerWillCloseNotification](willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [NSDrawerWillOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

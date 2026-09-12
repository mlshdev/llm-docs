> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/willclosenotification](https://developer.apple.com/documentation/appkit/nsdrawer/willclosenotification)

# willCloseNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is about to close.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
class let willCloseNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer`object about to close. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [didCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [didOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [willOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

# NSDrawerWillCloseNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Posted whenever the drawer is about to close.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
extern NSNotificationName NSDrawerWillCloseNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSDrawer`object about to close. This notification does not contain a `userInfo` dictionary.

## See Also

### Notifications

- [NSDrawerDidCloseNotification](didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [NSDrawerDidOpenNotification](didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [NSDrawerWillOpenNotification](willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

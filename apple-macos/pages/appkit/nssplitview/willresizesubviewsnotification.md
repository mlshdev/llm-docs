> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/willresizesubviewsnotification](https://developer.apple.com/documentation/appkit/nssplitview/willresizesubviewsnotification)

# willResizeSubviewsNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that posts before a change to the size of some or all subviews of a split view.

## Declaration

```swift
class let willResizeSubviewsNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object consists of the [NSSplitView](../nssplitview.md) object about to resize its subviews.

The [userInfo](https://developer.apple.com/documentation/foundation/notification/userinfo) dictionary includes the `NSSplitViewDividerIndex` key that contains the index of the divider that the split view or the user moves. If the system sends the notification because the user drags a divider, the dictionary also includes the `NSSplitViewUserResizeKey` key with a value of `1`.

To observe this notification using Swift concurrency, use [NSSplitView.WillResizeSubviewsMessage](willresizesubviewsmessage.md).

## See Also

### Managing Notifications

- [didResizeSubviewsNotification](didresizesubviewsnotification.md): A notification that posts after a change to the size of some or all subviews of a split view.

# NSSplitViewWillResizeSubviewsNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that posts before a change to the size of some or all subviews of a split view.

## Declaration

```objectivec
extern NSNotificationName NSSplitViewWillResizeSubviewsNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object consists of the [NSSplitView](../nssplitview.md) object about to resize its subviews.

The [userInfo](https://developer.apple.com/documentation/foundation/notification/userinfo) dictionary includes the `NSSplitViewDividerIndex` key that contains the index of the divider that the split view or the user moves. If the system sends the notification because the user drags a divider, the dictionary also includes the `NSSplitViewUserResizeKey` key with a value of `1`.

To observe this notification using Swift concurrency, use [NSSplitView.WillResizeSubviewsMessage](willresizesubviewsmessage.md).

## See Also

### Managing Notifications

- [NSSplitViewDidResizeSubviewsNotification](didresizesubviewsnotification.md): A notification that posts after a change to the size of some or all subviews of a split view.

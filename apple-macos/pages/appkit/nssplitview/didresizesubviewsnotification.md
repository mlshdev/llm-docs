> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/didresizesubviewsnotification](https://developer.apple.com/documentation/appkit/nssplitview/didresizesubviewsnotification)

# didResizeSubviewsNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that posts after a change to the size of some or all subviews of a split view.

## Declaration

```swift
class let didResizeSubviewsNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object consists of the [NSSplitView](../nssplitview.md) that has resized its subviews.

The [userInfo](https://developer.apple.com/documentation/foundation/notification/userinfo) dictionary includes the `NSSplitViewDividerIndex` key that contains the index of the divider that the split view or the user moves. If the system sends the notification because the user drags a divider, the dictionary also includes the `NSSplitViewUserResizeKey` key with a value of `1`.

To observe this notification using Swift concurrency, use [NSSplitView.DidResizeSubviewsMessage](didresizesubviewsmessage.md).

## See Also

### Managing Notifications

- [willResizeSubviewsNotification](willresizesubviewsnotification.md): A notification that posts before a change to the size of some or all subviews of a split view.

# NSSplitViewDidResizeSubviewsNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that posts after a change to the size of some or all subviews of a split view.

## Declaration

```objectivec
extern NSNotificationName NSSplitViewDidResizeSubviewsNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object consists of the [NSSplitView](../nssplitview.md) that has resized its subviews.

The [userInfo](https://developer.apple.com/documentation/foundation/notification/userinfo) dictionary includes the `NSSplitViewDividerIndex` key that contains the index of the divider that the split view or the user moves. If the system sends the notification because the user drags a divider, the dictionary also includes the `NSSplitViewUserResizeKey` key with a value of `1`.

To observe this notification using Swift concurrency, use [NSSplitView.DidResizeSubviewsMessage](didresizesubviewsmessage.md).

## See Also

### Managing Notifications

- [NSSplitViewWillResizeSubviewsNotification](willresizesubviewsnotification.md): A notification that posts before a change to the size of some or all subviews of a split view.

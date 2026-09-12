> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/willstartlivemagnifynotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivemagnifynotification)

# willStartLiveMagnifyNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

Posted at the beginning of a magnify gesture.

## Declaration

```swift
class let willStartLiveMagnifyNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the magnification.

This notification indicates that the magnification property is being changed due to user action. This may be due to the user performing a pinch gesture or a smart zoom gesture. When animating the magnification value yourself via the object’s animator, this notification is not sent.

To observe this notification using Swift concurrency, use [NSScrollView.WillStartLiveMagnifyMessage](willstartlivemagnifymessage.md).

## See Also

### Notifications

- [didEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [willStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [didLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [didEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

# NSScrollViewWillStartLiveMagnifyNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.8+

Posted at the beginning of a magnify gesture.

## Declaration

```objectivec
extern NSNotificationName const NSScrollViewWillStartLiveMagnifyNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the magnification.

This notification indicates that the magnification property is being changed due to user action. This may be due to the user performing a pinch gesture or a smart zoom gesture. When animating the magnification value yourself via the object’s animator, this notification is not sent.

To observe this notification using Swift concurrency, use [NSScrollView.WillStartLiveMagnifyMessage](willstartlivemagnifymessage.md).

## See Also

### Notifications

- [NSScrollViewDidEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [NSScrollViewWillStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [NSScrollViewDidLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [NSScrollViewDidEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

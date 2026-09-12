> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/didendlivescrollnotification](https://developer.apple.com/documentation/appkit/nsscrollview/didendlivescrollnotification)

# didEndLiveScrollNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Posted on the main thread at the end of live scroll tracking.

## Declaration

```swift
class let didEndLiveScrollNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.DidEndLiveScrollMessage](didendlivescrollmessage.md).

## See Also

### Notifications

- [willStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [didEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [willStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [didLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.

# NSScrollViewDidEndLiveScrollNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

Posted on the main thread at the end of live scroll tracking.

## Declaration

```objectivec
extern NSNotificationName const NSScrollViewDidEndLiveScrollNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.DidEndLiveScrollMessage](didendlivescrollmessage.md).

## See Also

### Notifications

- [NSScrollViewWillStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [NSScrollViewDidEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [NSScrollViewWillStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [NSScrollViewDidLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.

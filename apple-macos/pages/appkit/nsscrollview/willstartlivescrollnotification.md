> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/willstartlivescrollnotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivescrollnotification)

# willStartLiveScrollNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).

## Declaration

```swift
class let willStartLiveScrollNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.WillStartLiveScrollMessage](willstartlivescrollmessage.md).

## See Also

### Notifications

- [willStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [didEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [didLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [didEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

# NSScrollViewWillStartLiveScrollNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).

## Declaration

```objectivec
extern NSNotificationName const NSScrollViewWillStartLiveScrollNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.WillStartLiveScrollMessage](willstartlivescrollmessage.md).

## See Also

### Notifications

- [NSScrollViewWillStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [NSScrollViewDidEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [NSScrollViewDidLiveScrollNotification](didlivescrollnotification.md): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [NSScrollViewDidEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

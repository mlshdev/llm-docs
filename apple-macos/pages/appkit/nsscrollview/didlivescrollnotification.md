> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/didlivescrollnotification](https://developer.apple.com/documentation/appkit/nsscrollview/didlivescrollnotification)

# didLiveScrollNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.

## Declaration

```swift
class let didLiveScrollNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Some user-initiated scrolls (for example, scrolling using legacy mice) are not bracketed by a “willStart/didEnd” notification pair.

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.DidLiveScrollMessage](didlivescrollmessage.md).

## See Also

### Notifications

- [willStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [didEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [willStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [didEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

# NSScrollViewDidLiveScrollNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.

## Declaration

```objectivec
extern NSNotificationName const NSScrollViewDidLiveScrollNotification;
```

<a id="Discussion"></a>

## Discussion

Some user-initiated scrolls (for example, scrolling using legacy mice) are not bracketed by a “willStart/didEnd” notification pair.

The notification object is the scroll view performing the scroll.

To observe this notification using Swift concurrency, use [NSScrollView.DidLiveScrollMessage](didlivescrollmessage.md).

## See Also

### Notifications

- [NSScrollViewWillStartLiveMagnifyNotification](willstartlivemagnifynotification.md): Posted at the beginning of a magnify gesture.
- [NSScrollViewDidEndLiveMagnifyNotification](didendlivemagnifynotification.md): Posted at the end of a magnify gesture.
- [NSScrollViewWillStartLiveScrollNotification](willstartlivescrollnotification.md): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [NSScrollViewDidEndLiveScrollNotification](didendlivescrollnotification.md): Posted on the main thread at the end of live scroll tracking.

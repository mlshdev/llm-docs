> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/framedidchangenotification](https://developer.apple.com/documentation/appkit/nsview/framedidchangenotification)

# frameDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that posts when the view’s frame rectangle changes to a new value.

## Declaration

```swift
class let frameDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

This notification posts only when the view’s [postsFrameChangedNotifications](postsframechangednotifications.md) property is [true](https://developer.apple.com/documentation/swift/true).

The notification object is the `NSView` object whose frame rectangle has changed. This notification does not contain a `userInfo` dictionary.

The following methods can result in notification posting:

- [frame](frame.md)
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md)
- [frameRotation](framerotation.md)
- [setFrameSize(\_:)](setframesize%28__%29.md)

To observe this notification using Swift concurrency, use [NSView.FrameDidChangeMessage](framedidchangemessage.md).

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

# NSViewFrameDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that posts when the view’s frame rectangle changes to a new value.

## Declaration

```objectivec
extern NSNotificationName NSViewFrameDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

This notification posts only when the view’s [postsFrameChangedNotifications](postsframechangednotifications.md) property is [true](https://developer.apple.com/documentation/swift/true).

The notification object is the `NSView` object whose frame rectangle has changed. This notification does not contain a `userInfo` dictionary.

The following methods can result in notification posting:

- [frame](frame.md)
- [setFrameOrigin:](setframeorigin%28__%29.md)
- [frameRotation](framerotation.md)
- [setFrameSize:](setframesize%28__%29.md)

To observe this notification using Swift concurrency, use [NSView.FrameDidChangeMessage](framedidchangemessage.md).

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin:](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

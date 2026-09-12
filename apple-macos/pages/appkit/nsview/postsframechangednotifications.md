> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/postsframechangednotifications](https://developer.apple.com/documentation/appkit/nsview/postsframechangednotifications)

# postsFrameChangedNotifications (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

## Declaration

```swift
var postsFrameChangedNotifications: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s frame rectangle changes to a new value, the view posts a [frameDidChangeNotification](framedidchangenotification.md) to the default notification center. The notification is not posted when you set the frame rectangle to the value it already has. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is currently [false](https://developer.apple.com/documentation/swift/false) and and the frame has changed, changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the view to post a [frameDidChangeNotification](framedidchangenotification.md) notification immediately. This happens even when there has been no net change in the view’s frame rectangle.

The following methods and properties can trigger a frame change notification:

- [frame](frame.md)
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md)
- [setFrameSize(\_:)](setframesize%28__%29.md)
- [frameRotation](framerotation.md)

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [frameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)

# postsFrameChangedNotifications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

## Declaration

```objectivec
@property BOOL postsFrameChangedNotifications;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s frame rectangle changes to a new value, the view posts a [NSViewFrameDidChangeNotification](framedidchangenotification.md) to the default notification center. The notification is not posted when you set the frame rectangle to the value it already has. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is currently [false](https://developer.apple.com/documentation/swift/false) and and the frame has changed, changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the view to post a [NSViewFrameDidChangeNotification](framedidchangenotification.md) notification immediately. This happens even when there has been no net change in the view’s frame rectangle.

The following methods and properties can trigger a frame change notification:

- [frame](frame.md)
- [setFrameOrigin:](setframeorigin%28__%29.md)
- [setFrameSize:](setframesize%28__%29.md)
- [frameRotation](framerotation.md)

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin:](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSViewFrameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.

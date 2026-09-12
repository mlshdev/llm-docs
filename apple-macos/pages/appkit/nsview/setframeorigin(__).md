> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setframeorigin(_:)](https://developer.apple.com/documentation/appkit/nsview/setframeorigin(_:))

# setFrameOrigin(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.

## Declaration

```swift
func setFrameOrigin(_ newOrigin: NSPoint)
```

## Parameters

- `newOrigin`: The point that is the new origin of the view’s frame.

<a id="Discussion"></a>

## Discussion

Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame origin results in the posting of an [frameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [frameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

# setFrameOrigin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.

## Declaration

```objectivec
- (void) setFrameOrigin:(NSPoint) newOrigin;
```

## Parameters

- `newOrigin`: The point that is the new origin of the view’s frame.

<a id="Discussion"></a>

## Discussion

Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame origin results in the posting of an [NSViewFrameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSViewFrameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

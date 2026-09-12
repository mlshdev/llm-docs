> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setframesize(_:)](https://developer.apple.com/documentation/appkit/nsview/setframesize(_:))

# setFrameSize(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.

## Declaration

```swift
func setFrameSize(_ newSize: NSSize)
```

## Parameters

- `newSize`: An `NSSize` structure specifying the new height and width of the frame rectangle.

<a id="Discussion"></a>

## Discussion

Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame size results in the posting of an [frameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

In macOS 10.4 and later, you can override this method to support content preservation during live resizing. In your overridden implementation, include some conditional code to be executed only during a live resize operation. Your code must invalidate any portions of your view that need to be redrawn.

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [frameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

# setFrameSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.

## Declaration

```objectivec
- (void) setFrameSize:(NSSize) newSize;
```

## Parameters

- `newSize`: An `NSSize` structure specifying the new height and width of the frame rectangle.

<a id="Discussion"></a>

## Discussion

Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame size results in the posting of an [NSViewFrameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

In macOS 10.4 and later, you can override this method to support content preservation during live resizing. In your overridden implementation, include some conditional code to be executed only during a live resize operation. Your code must invalidate any portions of your view that need to be redrawn.

## See Also

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin:](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSViewFrameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

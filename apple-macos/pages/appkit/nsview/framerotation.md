> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/framerotation](https://developer.apple.com/documentation/appkit/nsview/framerotation)

# frameRotation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.

## Declaration

```swift
var frameRotation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Positive values indicate counterclockwise rotation. Negative values indicate clockwise rotation. Rotation is performed around the origin of the frame rectangle. Changing the value of this property does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame rotation value results in the posting of an [frameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

# frameRotation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.

## Declaration

```objectivec
@property CGFloat frameRotation;
```

<a id="Discussion"></a>

## Discussion

Positive values indicate counterclockwise rotation. Negative values indicate clockwise rotation. Rotation is performed around the origin of the frame rectangle. Changing the value of this property does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

Changing the frame rotation value results in the posting of an [NSViewFrameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.

### Modifying the Frame Rectangle

- [frame](frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin:](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [NSViewFrameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

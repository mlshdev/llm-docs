> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/frame](https://developer.apple.com/documentation/appkit/nsview/frame)

# frame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.

## Declaration

```swift
var frame: NSRect { get set }
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Changing the value of this property repositions and resizes the view within the coordinate system of its superview. Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

If your view does not use a custom bounds rectangle, this method also sets the view’s bounds to match the size of the new frame. You can specify a custom bounds rectangle by changing the [bounds](bounds.md) property or by calling the [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md) or [setBoundsSize(\_:)](setboundssize%28__%29.md) method explicitly. Once set, the view creates an internal transform to convert from frame coordinates to bounds coordinates. As long as the width-to-height ratio of the two coordinate systems remains the same, your content appears normal. If the ratios differ, your content may appear skewed.

The frame rectangle may be rotated relative to its superview’s coordinate system. For more information, see the [frameRotation](framerotation.md) property.

Changing the value of this property results in the posting of an [frameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.

### Modifying the Frame Rectangle

- [setFrameOrigin(\_:)](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [frameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](framedidchangemessage.md)
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

# frame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.

## Declaration

```objectivec
@property NSRect frame;
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Changing the value of this property repositions and resizes the view within the coordinate system of its superview. Changing the frame does not mark the view as needing to be displayed. Set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) when you want the view to be redisplayed.

If your view does not use a custom bounds rectangle, this method also sets the view’s bounds to match the size of the new frame. You can specify a custom bounds rectangle by changing the [bounds](bounds.md) property or by calling the [setBoundsOrigin:](setboundsorigin%28__%29.md) or [setBoundsSize:](setboundssize%28__%29.md) method explicitly. Once set, the view creates an internal transform to convert from frame coordinates to bounds coordinates. As long as the width-to-height ratio of the two coordinate systems remains the same, your content appears normal. If the ratios differ, your content may appear skewed.

The frame rectangle may be rotated relative to its superview’s coordinate system. For more information, see the [frameRotation](framerotation.md) property.

Changing the value of this property results in the posting of an [NSViewFrameDidChangeNotification](framedidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.

### Modifying the Frame Rectangle

- [setFrameOrigin:](setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSViewFrameDidChangeNotification](framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [postsFrameChangedNotifications](postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/boundsdidchangenotification](https://developer.apple.com/documentation/appkit/nsview/boundsdidchangenotification)

# boundsDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.

## Declaration

```swift
class let boundsDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

This notification posts only when the view’s [postsBoundsChangedNotifications](postsboundschangednotifications.md) property is [true](https://developer.apple.com/documentation/swift/true).

The notification object is the `NSView` object whose bounds rectangle has changed. This notification does not contain a `userInfo` dictionary.

The following methods can result in notification posting:

- [bounds](bounds.md)
- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md)
- [boundsRotation](boundsrotation.md)
- [setBoundsSize(\_:)](setboundssize%28__%29.md)
- [translateOrigin(to:)](translateorigin%28to_%29.md)
- [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md)
- [rotate(byDegrees:)](rotate%28bydegrees_%29.md)

Note that the bounds rectangle resizes automatically to track the frame rectangle. However, changes to the frame rectangle do not result in this bounds-changed notification.

To observe this notification using Swift concurrency, use [NSView.BoundsDidChangeMessage](boundsdidchangemessage.md).

## See Also

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize(\_:)](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [NSView.BoundsDidChangeMessage](boundsdidchangemessage.md)
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

# NSViewBoundsDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.

## Declaration

```objectivec
extern NSNotificationName NSViewBoundsDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

This notification posts only when the view’s [postsBoundsChangedNotifications](postsboundschangednotifications.md) property is [true](https://developer.apple.com/documentation/swift/true).

The notification object is the `NSView` object whose bounds rectangle has changed. This notification does not contain a `userInfo` dictionary.

The following methods can result in notification posting:

- [bounds](bounds.md)
- [setBoundsOrigin:](setboundsorigin%28__%29.md)
- [boundsRotation](boundsrotation.md)
- [setBoundsSize:](setboundssize%28__%29.md)
- [translateOriginToPoint:](translateorigin%28to_%29.md)
- [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md)
- [rotateByAngle:](rotate%28bydegrees_%29.md)

Note that the bounds rectangle resizes automatically to track the frame rectangle. However, changes to the frame rectangle do not result in this bounds-changed notification.

To observe this notification using Swift concurrency, use [NSView.BoundsDidChangeMessage](boundsdidchangemessage.md).

## See Also

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin:](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize:](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

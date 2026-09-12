> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/postsboundschangednotifications](https://developer.apple.com/documentation/appkit/nsview/postsboundschangednotifications)

# postsBoundsChangedNotifications (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

## Declaration

```swift
var postsBoundsChangedNotifications: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s bounds rectangle changes to a new value, the view posts a [boundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center. The notification is not posted when you set the bounds rectangle to the value it already has. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is currently [false](https://developer.apple.com/documentation/swift/false) and the bounds have changed, changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the view to post a [boundsDidChangeNotification](boundsdidchangenotification.md) notification immediately. This happens even when there has been no net change in the view’s bounds rectangle.

The following methods and properties can trigger a frame change notification:

- [bounds](bounds.md)
- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md)
- [setBoundsSize(\_:)](setboundssize%28__%29.md)
- [boundsRotation](boundsrotation.md)
- [translateOrigin(to:)](translateorigin%28to_%29.md)
- [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md)
- [rotate(byDegrees:)](rotate%28bydegrees_%29.md)

## See Also

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize(\_:)](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [boundsDidChangeNotification](boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [NSView.BoundsDidChangeMessage](boundsdidchangemessage.md)

# postsBoundsChangedNotifications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

## Declaration

```objectivec
@property BOOL postsBoundsChangedNotifications;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the view’s bounds rectangle changes to a new value, the view posts a [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center. The notification is not posted when you set the bounds rectangle to the value it already has. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is currently [false](https://developer.apple.com/documentation/swift/false) and the bounds have changed, changing the value to [true](https://developer.apple.com/documentation/swift/true) causes the view to post a [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) notification immediately. This happens even when there has been no net change in the view’s bounds rectangle.

The following methods and properties can trigger a frame change notification:

- [bounds](bounds.md)
- [setBoundsOrigin:](setboundsorigin%28__%29.md)
- [setBoundsSize:](setboundssize%28__%29.md)
- [boundsRotation](boundsrotation.md)
- [translateOriginToPoint:](translateorigin%28to_%29.md)
- [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md)
- [rotateByAngle:](rotate%28bydegrees_%29.md)

## See Also

### Modifying the bounds rectangle

- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin:](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize:](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.

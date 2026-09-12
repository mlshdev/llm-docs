> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rotate(bydegrees:)](https://developer.apple.com/documentation/appkit/nsview/rotate(bydegrees:))

# rotate(byDegrees:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

## Declaration

```swift
func rotate(byDegrees angle: CGFloat)
```

## Parameters

- `angle`: A `float` value specifying the angle of rotation, in degrees.

<a id="Discussion"></a>

## Discussion

See the [boundsRotation](boundsrotation.md) method description for more information. This method neither redisplays the view nor marks it as needing display. You must do this yourself by calling the [display()](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

This method posts an [boundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

### Modifying the Coordinate System

- [translateOrigin(to:)](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.

# rotateByAngle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

## Declaration

```objectivec
- (void) rotateByAngle:(CGFloat) angle;
```

## Parameters

- `angle`: A `float` value specifying the angle of rotation, in degrees.

<a id="Discussion"></a>

## Discussion

See the [boundsRotation](boundsrotation.md) method description for more information. This method neither redisplays the view nor marks it as needing display. You must do this yourself by calling the [display](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

This method posts an [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [frameRotation](framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [postsBoundsChangedNotifications](postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

### Modifying the Coordinate System

- [translateOriginToPoint:](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.

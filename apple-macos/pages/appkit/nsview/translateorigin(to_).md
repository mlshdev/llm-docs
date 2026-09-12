> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/translateorigin(to:)](https://developer.apple.com/documentation/appkit/nsview/translateorigin(to:))

# translateOrigin(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Translates the view’s coordinate system so that its origin moves to a new location.

## Declaration

```swift
func translateOrigin(to translation: NSPoint)
```

## Parameters

- `translation`: A point that specifies the new origin.

<a id="Discussion"></a>

## Discussion

In the process, the origin of the view’s bounds rectangle is shifted by (`–translation.x`, `–translation.y`). This method neither redisplays the view nor marks it as needing display. You must do this yourself by calling the  [display()](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

Note the difference between this method and setting the bounds origin. Translation effectively moves the image inside the bounds rectangle, while setting the bounds origin effectively moves the rectangle over the image. The two are in a sense inverse, although translation is cumulative, and setting the bounds origin is absolute.

This method posts an [boundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.

### Modifying the Coordinate System

- [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

# translateOriginToPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Translates the view’s coordinate system so that its origin moves to a new location.

## Declaration

```objectivec
- (void) translateOriginToPoint:(NSPoint) translation;
```

## Parameters

- `translation`: A point that specifies the new origin.

<a id="Discussion"></a>

## Discussion

In the process, the origin of the view’s bounds rectangle is shifted by (`–translation.x`, `–translation.y`). This method neither redisplays the view nor marks it as needing display. You must do this yourself by calling the  [display](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

Note the difference between this method and setting the bounds origin. Translation effectively moves the image inside the bounds rectangle, while setting the bounds origin effectively moves the rectangle over the image. The two are in a sense inverse, although translation is cumulative, and setting the bounds origin is absolute.

This method posts an [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [setBoundsOrigin:](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [bounds](bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.

### Modifying the Coordinate System

- [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [rotateByAngle:](rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

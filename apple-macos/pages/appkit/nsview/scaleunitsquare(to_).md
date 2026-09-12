> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/scaleunitsquare(to:)](https://developer.apple.com/documentation/appkit/nsview/scaleunitsquare(to:))

# scaleUnitSquare(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scales the view’s coordinate system so that the unit square scales to the specified dimensions.

## Declaration

```swift
func scaleUnitSquare(to newUnitSize: NSSize)
```

## Parameters

- `newUnitSize`: An `NSSize` structure specifying the new unit size.

<a id="Discussion"></a>

## Discussion

For example, a `newUnitSize` of (0.5, 1.0) causes the view’s horizontal coordinates to be halved, in turn doubling the width of its bounds rectangle. Note that scaling is performed from the origin of the coordinate system, (0.0, 0.0), not the origin of the bounds rectangle; as a result, both the origin and size of the bounds rectangle are changed. The frame rectangle remains unchanged.

This method does not redisplay the view or mark it as needing display. You must do this yourself by calling the  [display()](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

This method posts an [boundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [setBoundsSize(\_:)](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.

### Modifying the Coordinate System

- [translateOrigin(to:)](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [rotate(byDegrees:)](rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

# scaleUnitSquareToSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scales the view’s coordinate system so that the unit square scales to the specified dimensions.

## Declaration

```objectivec
- (void) scaleUnitSquareToSize:(NSSize) newUnitSize;
```

## Parameters

- `newUnitSize`: An `NSSize` structure specifying the new unit size.

<a id="Discussion"></a>

## Discussion

For example, a `newUnitSize` of (0.5, 1.0) causes the view’s horizontal coordinates to be halved, in turn doubling the width of its bounds rectangle. Note that scaling is performed from the origin of the coordinate system, (0.0, 0.0), not the origin of the bounds rectangle; as a result, both the origin and size of the bounds rectangle are changed. The frame rectangle remains unchanged.

This method does not redisplay the view or mark it as needing display. You must do this yourself by calling the  [display](display%28%29.md) method or setting the [needsDisplay](needsdisplay.md) property.

This method posts an [NSViewBoundsDidChangeNotification](boundsdidchangenotification.md) to the default notification center if the view is configured to do so.

## See Also

### Related Documentation

- [setBoundsSize:](setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.

### Modifying the Coordinate System

- [translateOriginToPoint:](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [rotateByAngle:](rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

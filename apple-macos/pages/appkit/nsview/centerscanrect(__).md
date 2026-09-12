> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/centerscanrect(_:)](https://developer.apple.com/documentation/appkit/nsview/centerscanrect(_:))

# centerScanRect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.

## Declaration

```swift
func centerScanRect(_ rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The rectangle whose corners are to be converted.

<a id="return-value"></a>

## Return Value

The adjusted rectangle.

<a id="Discussion"></a>

## Discussion

This method converts the given rectangle to device coordinates, adjusts the rectangle to lie in the center of the pixels, and converts the resulting rectangle back to the view’s coordinate system. Note that this method does not take into account any transformations performed using the [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform) class or Quartz 2D routines.

## See Also

### Related Documentation

- [isRotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

### Converting Coordinate Values

- [backingAlignedRect(\_:options:)](backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in local view coordinates.
- [convertFromBacking(\_:)](convertfrombacking%28__%29-229ps.md): Converts a point from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](converttobacking%28__%29-2xx45.md): Converts a point from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](convertfromlayer%28__%29-3nsbu.md): Convert the point from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](converttolayer%28__%29-44u7d.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertFromBacking(\_:)](convertfrombacking%28__%29-2njpa.md): Converts a rectangle from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](converttobacking%28__%29-3zors.md): Converts a rectangle from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](convertfromlayer%28__%29-8s5bi.md): Convert the rectangle from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](converttolayer%28__%29-160pw.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertFromBacking(\_:)](convertfrombacking%28__%29-4agf9.md): Converts a size from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](converttobacking%28__%29-4ra9y.md): Converts a size from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](convertfromlayer%28__%29-3usqp.md): Convert the size from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](converttolayer%28__%29-2vozx.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convert(\_:from:)](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convert(\_:to:)](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

# centerScanRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.

## Declaration

```objectivec
- (NSRect) centerScanRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle whose corners are to be converted.

<a id="return-value"></a>

## Return Value

The adjusted rectangle.

<a id="Discussion"></a>

## Discussion

This method converts the given rectangle to device coordinates, adjusts the rectangle to lie in the center of the pixels, and converts the resulting rectangle back to the view’s coordinate system. Note that this method does not take into account any transformations performed using the [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform) class or Quartz 2D routines.

## See Also

### Related Documentation

- [rotatedOrScaledFromBase](isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

### Converting Coordinate Values

- [backingAlignedRect:options:](backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in local view coordinates.
- [convertPointFromBacking:](convertfrombacking%28__%29-229ps.md): Converts a point from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertPointToBacking:](converttobacking%28__%29-2xx45.md): Converts a point from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertPointFromLayer:](convertfromlayer%28__%29-3nsbu.md): Convert the point from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertPointToLayer:](converttolayer%28__%29-44u7d.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertRectFromBacking:](convertfrombacking%28__%29-2njpa.md): Converts a rectangle from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertRectToBacking:](converttobacking%28__%29-3zors.md): Converts a rectangle from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertRectFromLayer:](convertfromlayer%28__%29-8s5bi.md): Convert the rectangle from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertRectToLayer:](converttolayer%28__%29-160pw.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertSizeFromBacking:](convertfrombacking%28__%29-4agf9.md): Converts a size from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertSizeToBacking:](converttobacking%28__%29-4ra9y.md): Converts a size from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertSizeFromLayer:](convertfromlayer%28__%29-3usqp.md): Convert the size from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertSizeToLayer:](converttolayer%28__%29-2vozx.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertPoint:fromView:](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convertPoint:toView:](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

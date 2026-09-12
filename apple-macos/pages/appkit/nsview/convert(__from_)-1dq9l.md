> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/convert(_:from:)-1dq9l](https://developer.apple.com/documentation/appkit/nsview/convert(_:from:)-1dq9l)

# convert(\_:from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts a point from the coordinate system of a given view to that of the view.

## Declaration

```swift
func convert(_ point: NSPoint, from view: NSView?) -> NSPoint
```

## Parameters

- `point`: A point specifying a location in the coordinate system of `view`.
- `view`: The view with `point` in its coordinate system. Both `view` and the view must belong to the same [NSWindow](../nswindow.md) object, and that window must not be `nil`. If `view` is `nil`, this method converts from window coordinates instead.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of the view.

## See Also

### Related Documentation

- [contentView](../nswindow/contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.

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
- [convert(\_:to:)](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.
- [convert(\_:from:)](convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.

# convertPoint:fromView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts a point from the coordinate system of a given view to that of the view.

## Declaration

```objectivec
- (NSPoint) convertPoint:(NSPoint) point fromView:(NSView *) view;
```

## Parameters

- `point`: A point specifying a location in the coordinate system of `view`.
- `view`: The view with `point` in its coordinate system. Both `view` and the view must belong to the same [NSWindow](../nswindow.md) object, and that window must not be `nil`. If `view` is `nil`, this method converts from window coordinates instead.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of the view.

## See Also

### Related Documentation

- [contentView](../nswindow/contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.

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
- [convertPoint:toView:](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.
- [convertSize:fromView:](convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.

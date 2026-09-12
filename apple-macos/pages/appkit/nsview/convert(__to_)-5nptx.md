> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/convert(_:to:)-5nptx](https://developer.apple.com/documentation/appkit/nsview/convert(_:to:)-5nptx)

# convert(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts a size from the view’s coordinate system to that of another view.

## Declaration

```swift
func convert(_ size: NSSize, to view: NSView?) -> NSSize
```

## Parameters

- `size`: The size (width and height) in the view’s coordinate system.
- `view`: The view that’s the target of the conversion operation. Both `view` and the view must belong to the same [NSWindow](../nswindow.md) object, and that window must not be `nil`. If `view` is `nil`, this method converts to window coordinates instead.

<a id="return-value"></a>

## Return Value

The converted size, as an [NSSize](https://developer.apple.com/documentation/foundation/nssize) structure.

<a id="Discussion"></a>

## Discussion

The returned `NSSize` values are always forced to have positive a width and height.

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
- [convert(\_:from:)](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convert(\_:to:)](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

# convertSize:toView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts a size from the view’s coordinate system to that of another view.

## Declaration

```objectivec
- (NSSize) convertSize:(NSSize) size toView:(NSView *) view;
```

## Parameters

- `size`: The size (width and height) in the view’s coordinate system.
- `view`: The view that’s the target of the conversion operation. Both `view` and the view must belong to the same [NSWindow](../nswindow.md) object, and that window must not be `nil`. If `view` is `nil`, this method converts to window coordinates instead.

<a id="return-value"></a>

## Return Value

The converted size, as an [NSSize](https://developer.apple.com/documentation/foundation/nssize) structure.

<a id="Discussion"></a>

## Discussion

The returned `NSSize` values are always forced to have positive a width and height.

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
- [convertPoint:fromView:](convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convertPoint:toView:](convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.

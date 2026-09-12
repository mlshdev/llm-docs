> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/backingalignedrect(_:options:)](https://developer.apple.com/documentation/appkit/nsview/backingalignedrect(_:options:))

# backingAlignedRect(\_:options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a backing store pixel-aligned rectangle in local view coordinates.

## Declaration

```swift
func backingAlignedRect(_ rect: NSRect, options: AlignmentOptions = []) -> NSRect
```

## Parameters

- `rect`: The rectangle in the view’s interior coordinate system.
- `options`: The alignment options. See [AlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) for possible values. (Note that although the alignment options specify integral values, the rectangle returned by this method is pixel-aligned.)

<a id="return-value"></a>

## Return Value

A rectangle in the view’s interior coordinate system that is aligned to the backing store pixels using the specified options.

<a id="Discussion"></a>

## Discussion

Uses the [NSIntegralRectWithOptions(\_:\_:)](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) function and the given input rectangle and options to produce a backing store pixel-aligned rectangle in the view’s interior coordinates.

## See Also

### Converting Coordinate Values

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
- [convert(\_:from:)](convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.

# backingAlignedRect:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a backing store pixel-aligned rectangle in local view coordinates.

## Declaration

```objectivec
- (NSRect) backingAlignedRect:(NSRect) rect options:(NSAlignmentOptions) options;
```

## Parameters

- `rect`: The rectangle in the view’s interior coordinate system.
- `options`: The alignment options. See [NSAlignmentOptions](https://developer.apple.com/documentation/foundation/alignmentoptions) for possible values. (Note that although the alignment options specify integral values, the rectangle returned by this method is pixel-aligned.)

<a id="return-value"></a>

## Return Value

A rectangle in the view’s interior coordinate system that is aligned to the backing store pixels using the specified options.

<a id="Discussion"></a>

## Discussion

Uses the [NSIntegralRectWithOptions](https://developer.apple.com/documentation/foundation/nsintegralrectwithoptions%28_:_:%29) function and the given input rectangle and options to produce a backing store pixel-aligned rectangle in the view’s interior coordinates.

## See Also

### Converting Coordinate Values

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
- [convertSize:fromView:](convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.

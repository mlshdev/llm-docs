> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/layoutmanager](https://developer.apple.com/documentation/quartzcore/calayer/layoutmanager)

# layoutManager (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

The object responsible for laying out the layer’s sublayers.

## Declaration

```swift
var layoutManager: (any CALayoutManager)? { get set }
```

<a id="Discussion"></a>

## Discussion

The object you assign to this property must nominally implement the CALayoutManager Informal Protocol informal protocol. If the layer’s delegate does not handle layout updates, the object assigned to this property is given a chance to update the layout of the layer’s sublayers.

In macOS, assign an instance of the [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) class to this property if your layer uses layer-based constraints to handle layout changes.

The default value of this property is `nil`.

## See Also

### Managing layer resizing and layout

- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# layoutManager (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

The object responsible for laying out the layer’s sublayers.

## Declaration

```objectivec
@property (strong, nullable) id<CALayoutManager> layoutManager;
```

<a id="Discussion"></a>

## Discussion

The object you assign to this property must nominally implement the CALayoutManager Informal Protocol informal protocol. If the layer’s delegate does not handle layout updates, the object assigned to this property is given a chance to update the layout of the layer’s sublayers.

In macOS, assign an instance of the [CAConstraintLayoutManager](../caconstraintlayoutmanager.md) class to this property if your layer uses layer-based constraints to handle layout changes.

The default value of this property is `nil`.

## See Also

### Managing layer resizing and layout

- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

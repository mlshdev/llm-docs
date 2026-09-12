> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/autoresizingmask](https://developer.apple.com/documentation/quartzcore/calayer/autoresizingmask)

# autoresizingMask (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A bitmask defining how the layer is resized when the bounds of its superlayer changes.

## Declaration

```swift
var autoresizingMask: CAAutoresizingMask { get set }
```

<a id="Discussion"></a>

## Discussion

If your app does not use a layout manager or constraints to handle layout changes, you can assign a value to this property to adjust the layer’s size in response to changes in the superlayer’s bounds. For a list of possible values, see [CAAutoresizingMask](../caautoresizingmask.md).

The default value of this property is [kCALayerNotSizable](../caautoresizingmask/kcalayernotsizable.md).

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# autoresizingMask (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A bitmask defining how the layer is resized when the bounds of its superlayer changes.

## Declaration

```objectivec
@property CAAutoresizingMask autoresizingMask;
```

<a id="Discussion"></a>

## Discussion

If your app does not use a layout manager or constraints to handle layout changes, you can assign a value to this property to adjust the layer’s size in response to changes in the superlayer’s bounds. For a list of possible values, see [CAAutoresizingMask](../caautoresizingmask.md).

The default value of this property is [kCALayerNotSizable](../caautoresizingmask/kcalayernotsizable.md).

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

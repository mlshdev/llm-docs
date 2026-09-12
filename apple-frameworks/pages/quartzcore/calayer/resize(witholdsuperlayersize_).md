> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/resize(witholdsuperlayersize:)](https://developer.apple.com/documentation/quartzcore/calayer/resize(witholdsuperlayersize:))

# resize(withOldSuperlayerSize:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Informs the receiver that the size of its superlayer changed.

## Declaration

```swift
func resize(withOldSuperlayerSize size: CGSize)
```

## Parameters

- `size`: The previous size of the superlayer.

<a id="Discussion"></a>

## Discussion

When the [autoresizingMask](autoresizingmask.md) property is used for resizing and the bounds of a layer change, that layer calls this method on each of its sublayers. Sublayers use this method to adjust their own frame rectangles to reflect the new superlayer bounds, which can be retrieved directly from the superlayer. The old size of the superlayer is passed to this method so that the sublayer has that information for any calculations it must make.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# resizeWithOldSuperlayerSize: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Informs the receiver that the size of its superlayer changed.

## Declaration

```objectivec
- (void) resizeWithOldSuperlayerSize:(CGSize) size;
```

## Parameters

- `size`: The previous size of the superlayer.

<a id="Discussion"></a>

## Discussion

When the [autoresizingMask](autoresizingmask.md) property is used for resizing and the bounds of a layer change, that layer calls this method on each of its sublayers. Sublayers use this method to adjust their own frame rectangles to reflect the new superlayer bounds, which can be retrieved directly from the superlayer. The old size of the superlayer is passed to this method so that the sublayer has that information for any calculations it must make.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

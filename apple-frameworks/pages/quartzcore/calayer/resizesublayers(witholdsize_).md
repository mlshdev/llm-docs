> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/resizesublayers(witholdsize:)](https://developer.apple.com/documentation/quartzcore/calayer/resizesublayers(witholdsize:))

# resizeSublayers(withOldSize:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Informs the receiver’s sublayers that the receiver’s size has changed.

## Declaration

```swift
func resizeSublayers(withOldSize size: CGSize)
```

## Parameters

- `size`: The previous size of the current layer.

<a id="Discussion"></a>

## Discussion

When the [autoresizingMask](autoresizingmask.md) property is used for resizing and the bounds of this layer change, the layer calls this method. The default implementation calls the [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md) method of each sublayer to let it know its superlayer’s bounds changed. You should not need to call or override this method directly.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# resizeSublayersWithOldSize: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Informs the receiver’s sublayers that the receiver’s size has changed.

## Declaration

```objectivec
- (void) resizeSublayersWithOldSize:(CGSize) size;
```

## Parameters

- `size`: The previous size of the current layer.

<a id="Discussion"></a>

## Discussion

When the [autoresizingMask](autoresizingmask.md) property is used for resizing and the bounds of this layer change, the layer calls this method. The default implementation calls the [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md) method of each sublayer to let it know its superlayer’s bounds changed. You should not need to call or override this method directly.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

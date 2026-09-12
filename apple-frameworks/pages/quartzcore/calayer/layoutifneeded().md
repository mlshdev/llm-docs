> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/layoutifneeded()](https://developer.apple.com/documentation/quartzcore/calayer/layoutifneeded())

# layoutIfNeeded() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Recalculate the receiver’s layout, if required.

## Declaration

```swift
func layoutIfNeeded()
```

<a id="Discussion"></a>

## Discussion

When this message is received, the layer’s super layers are traversed until a ancestor layer is found that does not require layout. Then layout is performed on the entire layer-tree beneath that ancestor.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# layoutIfNeeded (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Recalculate the receiver’s layout, if required.

## Declaration

```objectivec
- (void) layoutIfNeeded;
```

<a id="Discussion"></a>

## Discussion

When this message is received, the layer’s super layers are traversed until a ancestor layer is found that does not require layout. Then layout is performed on the entire layer-tree beneath that ancestor.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/setneedslayout()](https://developer.apple.com/documentation/quartzcore/calayer/setneedslayout())

# setNeedsLayout() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Invalidates the layer’s layout and marks it as needing an update.

## Declaration

```swift
func setNeedsLayout()
```

<a id="Discussion"></a>

## Discussion

You can call this method to indicate that the layout of a layer’s sublayers has changed and must be updated. The system typically calls this method automatically when the layer’s bounds change or when sublayers are added or removed. In macOS, if your layer’s [layoutManager](layoutmanager.md) property contains an object that implements the `invalidateLayout(of:)` method in Swift or the `invalidateLayoutOfLayer:` method in Objective-C, the system calls that method too.

During the next update cycle, the system calls the [layoutSublayers()](layoutsublayers%28%29.md) method of any layers requiring layout updates.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# setNeedsLayout (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Invalidates the layer’s layout and marks it as needing an update.

## Declaration

```objectivec
- (void) setNeedsLayout;
```

<a id="Discussion"></a>

## Discussion

You can call this method to indicate that the layout of a layer’s sublayers has changed and must be updated. The system typically calls this method automatically when the layer’s bounds change or when sublayers are added or removed. In macOS, if your layer’s [layoutManager](layoutmanager.md) property contains an object that implements the `invalidateLayout(of:)` method in Swift or the `invalidateLayoutOfLayer:` method in Objective-C, the system calls that method too.

During the next update cycle, the system calls the [layoutSublayers](layoutsublayers%28%29.md) method of any layers requiring layout updates.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/preferredframesize()](https://developer.apple.com/documentation/quartzcore/calayer/preferredframesize())

# preferredFrameSize() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the preferred size of the layer in the coordinate space of its superlayer.

## Declaration

```swift
func preferredFrameSize() -> CGSize
```

<a id="return-value"></a>

## Return Value

The layer’s preferred frame size.

<a id="Discussion"></a>

## Discussion

In macOS, the default implementation of this method calls the `preferredSize(of:)` method in Swift or the `preferredSizeOfLayer:` method in Objective-C of its layout manager—that is, the object in its [layoutManager](layoutmanager.md) property. If that object does not exist or does not implement that method, this method returns the size of the layer’s current [bounds](bounds.md) rectangle mapped into the coordinate space of its [superlayer](superlayer.md).

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout()](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.

# preferredFrameSize (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the preferred size of the layer in the coordinate space of its superlayer.

## Declaration

```objectivec
- (CGSize) preferredFrameSize;
```

<a id="return-value"></a>

## Return Value

The layer’s preferred frame size.

<a id="Discussion"></a>

## Discussion

In macOS, the default implementation of this method calls the `preferredSize(of:)` method in Swift or the `preferredSizeOfLayer:` method in Objective-C of its layout manager—that is, the object in its [layoutManager](layoutmanager.md) property. If that object does not exist or does not implement that method, this method returns the size of the layer’s current [bounds](bounds.md) rectangle mapped into the coordinate space of its [superlayer](superlayer.md).

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [needsLayout](needslayout%28%29.md): Returns a Boolean indicating whether the layer has been marked as needing a layout update.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.

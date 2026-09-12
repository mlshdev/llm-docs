> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/needslayout()](https://developer.apple.com/documentation/quartzcore/calayer/needslayout())

# needsLayout() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer has been marked as needing a layout update.

## Declaration

```swift
func needsLayout() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer has been marked as requiring a layout update.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers()](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded()](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resize(withOldSuperlayerSize:)](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayers(withOldSize:)](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize()](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

# needsLayout (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer has been marked as needing a layout update.

## Declaration

```objectivec
- (BOOL) needsLayout;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer has been marked as requiring a layout update.

## See Also

### Managing layer resizing and layout

- [layoutManager](layoutmanager.md): The object responsible for laying out the layer’s sublayers.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the layer’s layout and marks it as needing an update.
- [layoutSublayers](layoutsublayers%28%29.md): Tells the layer to update its layout.
- [layoutIfNeeded](layoutifneeded%28%29.md): Recalculate the receiver’s layout, if required.
- [autoresizingMask](autoresizingmask.md): A bitmask defining how the layer is resized when the bounds of its superlayer changes.
- [resizeWithOldSuperlayerSize:](resize%28witholdsuperlayersize_%29.md): Informs the receiver that the size of its superlayer changed.
- [resizeSublayersWithOldSize:](resizesublayers%28witholdsize_%29.md): Informs the receiver’s sublayers that the receiver’s size has changed.
- [preferredFrameSize](preferredframesize%28%29.md): Returns the preferred size of the layer in the coordinate space of its superlayer.

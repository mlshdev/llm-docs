> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayoutmanager/preferredsize(of:)](https://developer.apple.com/documentation/quartzcore/calayoutmanager/preferredsize(of:))

# preferredSize(of:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Override to customize layer size.

## Declaration

```swift
optional func preferredSize(of layer: CALayer) -> CGSize
```

## See Also

### Managing Layout

- [invalidateLayout(of:)](invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [layoutSublayers(of:)](layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.

# preferredSizeOfLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Override to customize layer size.

## Declaration

```objectivec
- (CGSize) preferredSizeOfLayer:(CALayer *) layer;
```

## See Also

### Managing Layout

- [invalidateLayoutOfLayer:](invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [layoutSublayersOfLayer:](layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.

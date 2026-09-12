> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayoutmanager/invalidatelayout(of:)](https://developer.apple.com/documentation/quartzcore/calayoutmanager/invalidatelayout(of:))

# invalidateLayout(of:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Invalidates the layout of a layer so it knows to refresh its content on the next frame.

## Declaration

```swift
optional func invalidateLayout(of layer: CALayer)
```

## See Also

### Managing Layout

- [layoutSublayers(of:)](layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.
- [preferredSize(of:)](preferredsize%28of_%29.md): Override to customize layer size.

# invalidateLayoutOfLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Invalidates the layout of a layer so it knows to refresh its content on the next frame.

## Declaration

```objectivec
- (void) invalidateLayoutOfLayer:(CALayer *) layer;
```

## See Also

### Managing Layout

- [layoutSublayersOfLayer:](layoutsublayers%28of_%29.md): Override to customize layout of sublayers whenever the layer needs redrawing.
- [preferredSizeOfLayer:](preferredsize%28of_%29.md): Override to customize layer size.

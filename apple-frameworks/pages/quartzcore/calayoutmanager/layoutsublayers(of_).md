> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayoutmanager/layoutsublayers(of:)](https://developer.apple.com/documentation/quartzcore/calayoutmanager/layoutsublayers(of:))

# layoutSublayers(of:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Override to customize layout of sublayers whenever the layer needs redrawing.

## Declaration

```swift
optional func layoutSublayers(of layer: CALayer)
```

## See Also

### Managing Layout

- [invalidateLayout(of:)](invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [preferredSize(of:)](preferredsize%28of_%29.md): Override to customize layer size.

# layoutSublayersOfLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Override to customize layout of sublayers whenever the layer needs redrawing.

## Declaration

```objectivec
- (void) layoutSublayersOfLayer:(CALayer *) layer;
```

## See Also

### Managing Layout

- [invalidateLayoutOfLayer:](invalidatelayout%28of_%29.md): Invalidates the layout of a layer so it knows to refresh its content on the next frame.
- [preferredSizeOfLayer:](preferredsize%28of_%29.md): Override to customize layer size.

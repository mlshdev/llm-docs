> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayview/setneedsdisplayinmaprect:](https://developer.apple.com/documentation/mapkit/mkoverlayview/setneedsdisplayinmaprect:)

# setNeedsDisplayInMapRect:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Invalidates the view in the given map rectangle at all zoom scales.

> Use an [MKOverlayRenderer](../mkoverlayrenderer.md) object instead.

## Declaration

```objectivec
- (void) setNeedsDisplayInMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The portion of the overlay that needs to be updated. This value is specified using a map rectangle and not view coordinates. You can convert from a view rectangle to a map rectangle using the [mapRectForRect:](maprectforrect_.md) method.

<a id="Discussion"></a>

## Discussion

Marking a rectangle as invalid causes that portion of the view to be redrawn during the next update cycle. This method invalidates the overlay regardless of the current zoom scale associated with the map.

## See Also

### Drawing the overlay

- [canDrawMapRect:zoomScale:](candrawmaprect_zoomscale_.md): Deprecated. Returns a Boolean value indicating whether the overlay view is ready to draw its content.
- [drawMapRect:zoomScale:inContext:](drawmaprect_zoomscale_incontext_.md): Deprecated. Draws the contents of the overlay view.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplayinmaprect_zoomscale_.md): Deprecated. Invalidates the view in the given map rectangle but only at the specified zoom scale.

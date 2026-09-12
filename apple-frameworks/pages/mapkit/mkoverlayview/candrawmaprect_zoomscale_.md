> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayview/candrawmaprect:zoomscale:](https://developer.apple.com/documentation/mapkit/mkoverlayview/candrawmaprect:zoomscale:)

# canDrawMapRect:zoomScale:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a Boolean value indicating whether the overlay view is ready to draw its content.

> Use an [MKOverlayRenderer](../mkoverlayrenderer.md) object instead.

## Declaration

```objectivec
- (BOOL) canDrawMapRect:(MKMapRect) mapRect zoomScale:(MKZoomScale) zoomScale;
```

## Parameters

- `mapRect`: The map rectangle that needs to be updated.
- `zoomScale`: The current scale factor applied to the map.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this view is ready to draw its contents or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Overlay views can override this method in situations where they may depend on the availability of other information to draw their contents. For example, an overlay view showing traffic information might want to delay drawing until it has all of the traffic data it needs. In such a case, it can return [false](https://developer.apple.com/documentation/swift/false) from this method to indicate that it is not ready.

If you return [false](https://developer.apple.com/documentation/swift/false) from this method, your application is responsible for calling the [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplayinmaprect_zoomscale_.md) method when the overlay view subsequently becomes ready to draw its contents.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing the overlay

- [drawMapRect:zoomScale:inContext:](drawmaprect_zoomscale_incontext_.md): Deprecated. Draws the contents of the overlay view.
- [setNeedsDisplayInMapRect:](setneedsdisplayinmaprect_.md): Deprecated. Invalidates the view in the given map rectangle at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplayinmaprect_zoomscale_.md): Deprecated. Invalidates the view in the given map rectangle but only at the specified zoom scale.

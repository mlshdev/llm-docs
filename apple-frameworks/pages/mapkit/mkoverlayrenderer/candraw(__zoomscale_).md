> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/candraw(_:zoomscale:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/candraw(_:zoomscale:))

# canDraw(\_:zoomScale:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a Boolean value that indicates whether the overlay view is ready to draw its content.

## Declaration

```swift
func canDraw(_ mapRect: MKMapRect, zoomScale: MKZoomScale) -> Bool
```

## Parameters

- `mapRect`: The map rectangle that the renderer needs to update.
- `zoomScale`: The current scale factor applied to the map.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this overlay renderer is ready to draw its contents on the map or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Overlay renderers can override this method in situations where they may depend on the availability of other information to draw their contents. For example, a renderer showing traffic information might want to delay drawing until it has all of the traffic data it needs. In such a case, it can return [false](https://developer.apple.com/documentation/swift/false) from this method to indicate that it’s not ready. An overlay renderer might also return [false](https://developer.apple.com/documentation/swift/false) if it doesn’t draw content in the specified rectangle.

If you return [false](https://developer.apple.com/documentation/swift/false) from this method, your application is responsible for calling the [setNeedsDisplay(\_:zoomScale:)](setneedsdisplay%28__zoomscale_%29.md) method when the overlay renderer subsequently becomes ready to draw its contents.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing the overlay

- [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplay(\_:zoomScale:)](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

# canDrawMapRect:zoomScale: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a Boolean value that indicates whether the overlay view is ready to draw its content.

## Declaration

```objectivec
- (BOOL) canDrawMapRect:(MKMapRect) mapRect zoomScale:(MKZoomScale) zoomScale;
```

## Parameters

- `mapRect`: The map rectangle that the renderer needs to update.
- `zoomScale`: The current scale factor applied to the map.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this overlay renderer is ready to draw its contents on the map or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Overlay renderers can override this method in situations where they may depend on the availability of other information to draw their contents. For example, a renderer showing traffic information might want to delay drawing until it has all of the traffic data it needs. In such a case, it can return [false](https://developer.apple.com/documentation/swift/false) from this method to indicate that it’s not ready. An overlay renderer might also return [false](https://developer.apple.com/documentation/swift/false) if it doesn’t draw content in the specified rectangle.

If you return [false](https://developer.apple.com/documentation/swift/false) from this method, your application is responsible for calling the [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplay%28__zoomscale_%29.md) method when the overlay renderer subsequently becomes ready to draw its contents.

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Drawing the overlay

- [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplayInMapRect:](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

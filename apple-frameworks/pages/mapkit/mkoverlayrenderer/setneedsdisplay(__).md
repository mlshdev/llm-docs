> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/setneedsdisplay(_:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/setneedsdisplay(_:))

# setNeedsDisplay(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Invalidates the specified portion of the overlay at all zoom scales.

## Declaration

```swift
func setNeedsDisplay(_ mapRect: MKMapRect)
```

## Parameters

- `mapRect`: The portion of the overlay to update. Specify this value using a map coordinates.

<a id="Discussion"></a>

## Discussion

Marking a rectangle as invalid causes that portion of the overlay to be redrawn during the next update cycle. This method invalidates the overlay regardless of the current zoom scale associated with the map.

## See Also

### Drawing the overlay

- [canDraw(\_:zoomScale:)](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplay(\_:zoomScale:)](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

# setNeedsDisplayInMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Invalidates the specified portion of the overlay at all zoom scales.

## Declaration

```objectivec
- (void) setNeedsDisplayInMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The portion of the overlay to update. Specify this value using a map coordinates.

<a id="Discussion"></a>

## Discussion

Marking a rectangle as invalid causes that portion of the overlay to be redrawn during the next update cycle. This method invalidates the overlay regardless of the current zoom scale associated with the map.

## See Also

### Drawing the overlay

- [canDrawMapRect:zoomScale:](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

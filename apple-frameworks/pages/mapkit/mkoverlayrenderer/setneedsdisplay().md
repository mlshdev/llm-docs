> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/setneedsdisplay()](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/setneedsdisplay())

# setNeedsDisplay() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Invalidates the entire contents of the overlay for all zoom scales.

## Declaration

```swift
func setNeedsDisplay()
```

<a id="Discussion"></a>

## Discussion

This method causes the entire contents of the overlay to be redrawn during the next update cycle. This method invalidates the overlay regardless of the current zoom scale associated with the map.

## See Also

### Drawing the overlay

- [canDraw(\_:zoomScale:)](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplay(\_:zoomScale:)](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

# setNeedsDisplay (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Invalidates the entire contents of the overlay for all zoom scales.

## Declaration

```objectivec
- (void) setNeedsDisplay;
```

<a id="Discussion"></a>

## Discussion

This method causes the entire contents of the overlay to be redrawn during the next update cycle. This method invalidates the overlay regardless of the current zoom scale associated with the map.

## See Also

### Drawing the overlay

- [canDrawMapRect:zoomScale:](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplayInMapRect:](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

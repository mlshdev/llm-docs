> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayview/initwithoverlay:](https://developer.apple.com/documentation/mapkit/mkoverlayview/initwithoverlay:)

# initWithOverlay:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns the overlay view and associates it with the specified overlay object.

> Use an [MKOverlayRenderer](../mkoverlayrenderer.md) object instead.

## Declaration

```objectivec
- (instancetype) initWithOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object to use when drawing the overlay on the map. This object provides the data needed to draw the overlay’s shape. This object is retained by the overlay view.

<a id="return-value"></a>

## Return Value

An initialized overlay object.

<a id="Discussion"></a>

## Discussion

Upon initialization, the frame of the overlay view is set to [CGRectZero](../../coregraphics/cgrectzero.md). The map view sets the size and position of the view at display time, and you should not change those values yourself.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

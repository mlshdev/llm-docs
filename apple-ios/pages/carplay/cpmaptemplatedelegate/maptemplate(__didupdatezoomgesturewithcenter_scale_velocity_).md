> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didupdatezoomgesturewithcenter:scale:velocity:)

# mapTemplate(\_:didUpdateZoomGestureWithCenter:scale:velocity:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person is zooming on the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didUpdateZoomGestureWithCenter center: CGPoint, scale: CGFloat, velocity: CGFloat)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center point of the zoom.
- `scale`: A `CGFloat` that indicates the scale factor relative to the zoom gesture in screen coordinates.
- `velocity`: The velocity of the zoom gesture in scale factor per second.

## See Also

### Changing the zoom level

- [mapTemplateDidBeginZoomGesture(\_:)](maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplate(\_:didEndZoomGestureWithVelocity:)](maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.

# mapTemplate:didUpdateZoomGestureWithCenter:scale:velocity: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person is zooming on the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didUpdateZoomGestureWithCenter:(CGPoint) center scale:(CGFloat) scale velocity:(CGFloat) velocity;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center point of the zoom.
- `scale`: A `CGFloat` that indicates the scale factor relative to the zoom gesture in screen coordinates.
- `velocity`: The velocity of the zoom gesture in scale factor per second.

## See Also

### Changing the zoom level

- [mapTemplateDidBeginZoomGesture:](maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplate:didEndZoomGestureWithVelocity:](maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.

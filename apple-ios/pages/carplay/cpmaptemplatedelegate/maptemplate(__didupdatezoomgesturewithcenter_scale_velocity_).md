> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didupdatezoomgesturewithcenter:scale:velocity:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didupdatezoomgesturewithcenter:scale:velocity:))

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

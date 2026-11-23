> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didendzoomgesturewithvelocity:)

# mapTemplate(\_:didEndZoomGestureWithVelocity:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped zooming the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didEndZoomGestureWithVelocity velocity: CGFloat)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `velocity`: The velocity of the zoom gesture in scale factor per second.

## See Also

### Changing the zoom level

- [mapTemplateDidBeginZoomGesture(\_:)](maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplate(\_:didUpdateZoomGestureWithCenter:scale:velocity:)](maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.

# mapTemplate:didEndZoomGestureWithVelocity: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped zooming the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didEndZoomGestureWithVelocity:(CGFloat) velocity;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `velocity`: The velocity of the zoom gesture in scale factor per second.

## See Also

### Changing the zoom level

- [mapTemplateDidBeginZoomGesture:](maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplate:didUpdateZoomGestureWithCenter:scale:velocity:](maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.

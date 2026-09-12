> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didendzoomgesturewithvelocity:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didendzoomgesturewithvelocity:))

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

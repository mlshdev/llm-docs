> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrotatewithcenter:rotation:velocity:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrotatewithcenter:rotation:velocity:))

# mapTemplate(\_:didRotateWithCenter:rotation:velocity:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person is rotating the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRotateWithCenter center: CGPoint, rotation: CGFloat, velocity: CGFloat)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the rotation gesture.
- `rotation`: A `CGFloat` that indicates the rotation of the gesture in radians.
- `velocity`: The velocity of the rotation gesture in radians per second.

# mapTemplate:didRotateWithCenter:rotation:velocity: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person is rotating the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRotateWithCenter:(CGPoint) center rotation:(CGFloat) rotation velocity:(CGFloat) velocity;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the rotation gesture.
- `rotation`: A `CGFloat` that indicates the rotation of the gesture in radians.
- `velocity`: The velocity of the rotation gesture in radians per second.

> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrotatewithcenter:rotation:velocity:)

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

## See Also

### Rotating the map

- [mapTemplateDidBeginRotationGesture(\_:)](maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplate(\_:rotationDidEndWithVelocity:)](maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.

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

## See Also

### Rotating the map

- [mapTemplateDidBeginRotationGesture:](maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplate:rotationDidEndWithVelocity:](maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.

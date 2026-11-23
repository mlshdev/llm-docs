> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:rotationdidendwithvelocity:)

# mapTemplate(\_:rotationDidEndWithVelocity:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped rotating the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, rotationDidEndWithVelocity velocity: CGFloat)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `velocity`: The velocity of the rotation gesture in radians per second.

## See Also

### Rotating the map

- [mapTemplateDidBeginRotationGesture(\_:)](maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplate(\_:didRotateWithCenter:rotation:velocity:)](maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.

# mapTemplate:rotationDidEndWithVelocity: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped rotating the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate rotationDidEndWithVelocity:(CGFloat) velocity;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `velocity`: The velocity of the rotation gesture in radians per second.

## See Also

### Rotating the map

- [mapTemplateDidBeginRotationGesture:](maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplate:didRotateWithCenter:rotation:velocity:](maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.

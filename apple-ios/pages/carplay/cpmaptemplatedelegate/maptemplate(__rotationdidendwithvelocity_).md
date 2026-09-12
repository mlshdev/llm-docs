> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:rotationdidendwithvelocity:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:rotationdidendwithvelocity:))

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

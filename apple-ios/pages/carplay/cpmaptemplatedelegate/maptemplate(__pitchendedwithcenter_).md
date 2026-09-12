> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchendedwithcenter:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchendedwithcenter:))

# mapTemplate(\_:pitchEndedWithCenter:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped pitching the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, pitchEndedWithCenter center: CGPoint)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

# mapTemplate:pitchEndedWithCenter: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped pitching the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate pitchEndedWithCenter:(CGPoint) center;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypecurrenttilt](https://developer.apple.com/documentation/homekit/hmcharacteristictypecurrenttilt)

# HMCharacteristicTypeCurrentTilt (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.1.1+

The current tilt angle of a slat for an accessory like a window or a fan.

## Declaration

```swift
let HMCharacteristicTypeCurrentTilt: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value represents the angle in degrees, with a value between -90 and 90.

For horizontal slats, a value of -90 indicates the slats are fully closed and rotated such that the user-facing edge is higher than the opposing edge. For vertical slats, this value indicates that the user-facing edge is to the left of the opposing edge. In either case, a value of 0 indicates that the edges are aligned, with the slats fully open.

## See Also

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentVerticalTilt](hmcharacteristictypecurrentverticaltilt.md): The current tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

# HMCharacteristicTypeCurrentTilt (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 14.0+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.1.1+

The current tilt angle of a slat for an accessory like a window or a fan.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeCurrentTilt;
```

<a id="Discussion"></a>

## Discussion

The corresponding value represents the angle in degrees, with a value between -90 and 90.

For horizontal slats, a value of -90 indicates the slats are fully closed and rotated such that the user-facing edge is higher than the opposing edge. For vertical slats, this value indicates that the user-facing edge is to the left of the opposing edge. In either case, a value of 0 indicates that the edges are aligned, with the slats fully open.

## See Also

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentVerticalTilt](hmcharacteristictypecurrentverticaltilt.md): The current tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

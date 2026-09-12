> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypecurrentverticaltilt](https://developer.apple.com/documentation/homekit/hmcharacteristictypecurrentverticaltilt)

# HMCharacteristicTypeCurrentVerticalTilt (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current tilt angle of a vertical slat for an accessory like a window or a fan.

## Declaration

```swift
let HMCharacteristicTypeCurrentVerticalTilt: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value represents the angle in degrees, with a value between -90 and 90.

A value of -90 indicates the slats are fully closed and rotated such that the user-facing edge is to the left of the opposing edge. A value of 0 indicates that the edges are aligned, with the slats fully open.

## See Also

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentTilt](hmcharacteristictypecurrenttilt.md): The current tilt angle of a slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

# HMCharacteristicTypeCurrentVerticalTilt (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current tilt angle of a vertical slat for an accessory like a window or a fan.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeCurrentVerticalTilt;
```

<a id="Discussion"></a>

## Discussion

The corresponding value represents the angle in degrees, with a value between -90 and 90.

A value of -90 indicates the slats are fully closed and rotated such that the user-facing edge is to the left of the opposing edge. A value of 0 indicates that the edges are aligned, with the slats fully open.

## See Also

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentTilt](hmcharacteristictypecurrenttilt.md): The current tilt angle of a slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

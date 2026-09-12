> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypeholdposition](https://developer.apple.com/documentation/homekit/hmcharacteristictypeholdposition)

# HMCharacteristicTypeHoldPosition (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A control for holding the position of an accessory like a door or window.

## Declaration

```swift
let HMCharacteristicTypeHoldPosition: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a write-only Boolean. Write a value of `true` to indicate that the current position should be maintained. The accessory ignores a written value of `false`. Write a value to the [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md) characteristic to release the hold.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

# HMCharacteristicTypeHoldPosition (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A control for holding the position of an accessory like a door or window.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeHoldPosition;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a write-only Boolean. Write a value of `true` to indicate that the current position should be maintained. The accessory ignores a written value of `false`. Write a value to the [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md) characteristic to release the hold.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

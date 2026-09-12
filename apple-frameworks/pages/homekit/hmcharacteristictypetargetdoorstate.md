> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypetargetdoorstate](https://developer.apple.com/documentation/homekit/hmcharacteristictypetargetdoorstate)

# HMCharacteristicTypeTargetDoorState (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The target door state.

## Declaration

```swift
let HMCharacteristicTypeTargetDoorState: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants in the [HMCharacteristicValueDoorState](hmcharacteristicvaluedoorstate.md) enumeration.

Doors take time to move between states, so the target door state may not match the current door state at a given moment in time.

## Topics

### Values

- [HMCharacteristicValueDoorState](hmcharacteristicvaluedoorstate.md): Possible values for the state of a door.
- [HMCharacteristicValueTargetDoorState](hmcharacteristicvaluetargetdoorstate.md): Values that indicate the state of a door.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

# HMCharacteristicTypeTargetDoorState (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The target door state.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeTargetDoorState;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants in the [HMCharacteristicValueDoorState](hmcharacteristicvaluedoorstate.md) enumeration.

Doors take time to move between states, so the target door state may not match the current door state at a given moment in time.

## Topics

### Values

- [HMCharacteristicValueDoorState](hmcharacteristicvaluedoorstate.md): Possible values for the state of a door.
- [HMCharacteristicValueTargetDoorState](hmcharacteristicvaluetargetdoorstate.md): Values that indicate the state of a door.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

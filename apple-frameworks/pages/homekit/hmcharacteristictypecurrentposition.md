> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypecurrentposition](https://developer.apple.com/documentation/homekit/hmcharacteristictypecurrentposition)

# HMCharacteristicTypeCurrentPosition (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current position of a door, window, awning, or window covering.

## Declaration

```swift
let HMCharacteristicTypeCurrentPosition: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer percentage. A value of `0` indicates a door or window is fully closed, or that awnings or shades permit the least possible light. A value of `100` indicates the opposite.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

# HMCharacteristicTypeCurrentPosition (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current position of a door, window, awning, or window covering.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeCurrentPosition;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer percentage. A value of `0` indicates a door or window is fully closed, or that awnings or shades permit the least possible light. A value of `100` indicates the opposite.

## See Also

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

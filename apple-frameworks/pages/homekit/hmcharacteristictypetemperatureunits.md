> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypetemperatureunits](https://developer.apple.com/documentation/homekit/hmcharacteristictypetemperatureunits)

# HMCharacteristicTypeTemperatureUnits (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The units of temperature currently active on the accessory.

## Declaration

```swift
let HMCharacteristicTypeTemperatureUnits: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants from the [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md) enumeration.

HomeKit always reports temperature values in degrees Celsius, but your app should display the temperature in units chosen by the user.

## Topics

### Values

- [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md): Possible values for the temperature units currently active on the accessory.

## See Also

### Temperature

- [HMCharacteristicTypeCurrentTemperature](hmcharacteristictypecurrenttemperature.md): The current temperature measured by the accessory.
- [HMCharacteristicTypeTargetTemperature](hmcharacteristictypetargettemperature.md): The target temperature for the accessory to achieve.
- [HMCharacteristicTypeTargetHeatingCooling](hmcharacteristictypetargetheatingcooling.md): The target heating or cooling mode for a thermostat.
- [HMCharacteristicTypeCurrentHeatingCooling](hmcharacteristictypecurrentheatingcooling.md): The current heating or cooling mode for a thermostat.
- [HMCharacteristicTypeTargetHeaterCoolerState](hmcharacteristictypetargetheatercoolerstate.md): The target state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCurrentHeaterCoolerState](hmcharacteristictypecurrentheatercoolerstate.md): The current state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCoolingThreshold](hmcharacteristictypecoolingthreshold.md): The temperature above which cooling will be active.
- [HMCharacteristicTypeHeatingThreshold](hmcharacteristictypeheatingthreshold.md): The temperature below which heating will be active.

# HMCharacteristicTypeTemperatureUnits (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The units of temperature currently active on the accessory.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeTemperatureUnits;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants from the [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md) enumeration.

HomeKit always reports temperature values in degrees Celsius, but your app should display the temperature in units chosen by the user.

## Topics

### Values

- [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md): Possible values for the temperature units currently active on the accessory.

## See Also

### Temperature

- [HMCharacteristicTypeCurrentTemperature](hmcharacteristictypecurrenttemperature.md): The current temperature measured by the accessory.
- [HMCharacteristicTypeTargetTemperature](hmcharacteristictypetargettemperature.md): The target temperature for the accessory to achieve.
- [HMCharacteristicTypeTargetHeatingCooling](hmcharacteristictypetargetheatingcooling.md): The target heating or cooling mode for a thermostat.
- [HMCharacteristicTypeCurrentHeatingCooling](hmcharacteristictypecurrentheatingcooling.md): The current heating or cooling mode for a thermostat.
- [HMCharacteristicTypeTargetHeaterCoolerState](hmcharacteristictypetargetheatercoolerstate.md): The target state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCurrentHeaterCoolerState](hmcharacteristictypecurrentheatercoolerstate.md): The current state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCoolingThreshold](hmcharacteristictypecoolingthreshold.md): The temperature above which cooling will be active.
- [HMCharacteristicTypeHeatingThreshold](hmcharacteristictypeheatingthreshold.md): The temperature below which heating will be active.

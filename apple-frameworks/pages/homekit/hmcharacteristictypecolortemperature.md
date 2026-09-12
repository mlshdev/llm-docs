> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypecolortemperature](https://developer.apple.com/documentation/homekit/hmcharacteristictypecolortemperature)

# HMCharacteristicTypeColorTemperature (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The color temperature of a light.

## Declaration

```swift
let HMCharacteristicTypeColorTemperature: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer representing the color temperature in micro-reciprocal degrees (mired), which is 1,000,000 divided by the color temperature in kelvins. For example, to emulate a traditional tungsten light with a color temperature of 3200 K, use a mired value of about 312.

## See Also

### Light

- [HMCharacteristicTypeCurrentLightLevel](hmcharacteristictypecurrentlightlevel.md): The current light level.
- [HMCharacteristicTypeHue](hmcharacteristictypehue.md): The hue of the color used by a light.
- [HMCharacteristicTypeBrightness](hmcharacteristictypebrightness.md): The brightness of a light.
- [HMCharacteristicTypeSaturation](hmcharacteristictypesaturation.md): The saturation of the color used by a light.

# HMCharacteristicTypeColorTemperature (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The color temperature of a light.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeColorTemperature;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer representing the color temperature in micro-reciprocal degrees (mired), which is 1,000,000 divided by the color temperature in kelvins. For example, to emulate a traditional tungsten light with a color temperature of 3200 K, use a mired value of about 312.

## See Also

### Light

- [HMCharacteristicTypeCurrentLightLevel](hmcharacteristictypecurrentlightlevel.md): The current light level.
- [HMCharacteristicTypeHue](hmcharacteristictypehue.md): The hue of the color used by a light.
- [HMCharacteristicTypeBrightness](hmcharacteristictypebrightness.md): The brightness of a light.
- [HMCharacteristicTypeSaturation](hmcharacteristictypesaturation.md): The saturation of the color used by a light.

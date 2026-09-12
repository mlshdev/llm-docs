> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblelight/setcolorbytemperature(_:)](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblelight/setcolorbytemperature(_:))

# setColorByTemperature(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the light’s color based on a black-body temperature.

## Declaration

```swift
func setColorByTemperature(_ temperature: Float)
```

## Parameters

- `temperature`: The black-body temperature, in Kelvins, whose luminous color the light should match.

<a id="Discussion"></a>

## Discussion

Real-world light sources often measure color of illumination based on a black-body temperature scale. For example, the colors and characterizations of typical home and office light fixtures correspond to the following temperatures:

| Label | Color | Temperature |
| --- | --- | --- |
| “Soft white” | Warm, yellowish white | 2700 K |
| “Bright white” | Pale yellowish white | 3000 K |
| “Daylight” | Bright, slightly greenish white | 5000 K |
| “Cool daylight” | Bright, slightly bluish white | 6500 K |

## See Also

### Managing Light Color and Intensity

- [color](color.md): The color of the light source.
- [lumens](lumens.md): The total visible intensity of the light source, in lumens.

# setColorByTemperature: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the light’s color based on a black-body temperature.

## Declaration

```objectivec
- (void) setColorByTemperature:(float) temperature;
```

## Parameters

- `temperature`: The black-body temperature, in Kelvins, whose luminous color the light should match.

<a id="Discussion"></a>

## Discussion

Real-world light sources often measure color of illumination based on a black-body temperature scale. For example, the colors and characterizations of typical home and office light fixtures correspond to the following temperatures:

| Label | Color | Temperature |
| --- | --- | --- |
| “Soft white” | Warm, yellowish white | 2700 K |
| “Bright white” | Pale yellowish white | 3000 K |
| “Daylight” | Bright, slightly greenish white | 5000 K |
| “Cool daylight” | Bright, slightly bluish white | 6500 K |

## See Also

### Managing Light Color and Intensity

- [color](color.md): The color of the light source.
- [lumens](lumens.md): The total visible intensity of the light source, in lumens.

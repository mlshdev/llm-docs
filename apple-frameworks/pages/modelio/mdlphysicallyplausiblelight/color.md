> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblelight/color](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblelight/color)

# color (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color of the light source.

## Declaration

```swift
var color: CGColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default color corresponds to a color temperature of 6500 K, as described by the [setColorByTemperature(\_:)](setcolorbytemperature%28__%29.md) method.

## See Also

### Managing Light Color and Intensity

- [lumens](lumens.md): The total visible intensity of the light source, in lumens.
- [setColorByTemperature(\_:)](setcolorbytemperature%28__%29.md): Sets the light’s color based on a black-body temperature.

# color (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color of the light source.

## Declaration

```objectivec
@property (nonatomic, nullable) CGColorRef color;
```

<a id="Discussion"></a>

## Discussion

The default color corresponds to a color temperature of 6500 K, as described by the [setColorByTemperature:](setcolorbytemperature%28__%29.md) method.

## See Also

### Managing Light Color and Intensity

- [lumens](lumens.md): The total visible intensity of the light source, in lumens.
- [setColorByTemperature:](setcolorbytemperature%28__%29.md): Sets the light’s color based on a black-body temperature.

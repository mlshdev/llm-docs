> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/exposure](https://developer.apple.com/documentation/modelio/mdlcamera/exposure)

# exposure (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Red, green, and blue factors that scale each color channel in the camera’s image.

## Declaration

```swift
var exposure: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

Simulating a real-world camera requires considering the way a pixel value captured by an imaging sensor is processed for display (or how a unit of film stock is developed and projected). Part of such consideration is the exposure level for each channel, applied to each color channel using the following formula:

`baseValue = (sensorValue + flash) * exposure`

In this formula, `sensorValue` is the color level recorded by a sensor. In rendering, this value corresponds to the color component output of the rest of the rendering process before physical camera simulation effects are added. The baseValue produced by this formula should then be used with the [exposureCompression](exposurecompression.md) property to produce a final output color level.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

# exposure (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Red, green, and blue factors that scale each color channel in the camera’s image.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float3 exposure;
```

<a id="Discussion"></a>

## Discussion

Simulating a real-world camera requires considering the way a pixel value captured by an imaging sensor is processed for display (or how a unit of film stock is developed and projected). Part of such consideration is the exposure level for each channel, applied to each color channel using the following formula:

`baseValue = (sensorValue + flash) * exposure`

In this formula, `sensorValue` is the color level recorded by a sensor. In rendering, this value corresponds to the color component output of the rest of the rendering process before physical camera simulation effects are added. The baseValue produced by this formula should then be used with the [exposureCompression](exposurecompression.md) property to produce a final output color level.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

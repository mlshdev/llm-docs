> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/flash](https://developer.apple.com/documentation/modelio/mdlcamera/flash)

# flash (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Red, green, and blue factors to be used in brightening darker areas of the camera’s image.

## Declaration

```swift
var flash: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

In real-world film processing, *flashing* is a small and even level of exposure added to the entire image, intended to shift the brightness and color of darker areas of the image. Because exposure is logarithmic, flash does not affect midtones or highlights. In color grading, this effect is also called *lift* and can be applied independently to the red, green, and blue channels of an image. A renderer can use negative component values to subtract color.

The default value is `{0,0,0}`, leaving an image unaltered.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

# flash (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Red, green, and blue factors to be used in brightening darker areas of the camera’s image.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float3 flash;
```

<a id="Discussion"></a>

## Discussion

In real-world film processing, *flashing* is a small and even level of exposure added to the entire image, intended to shift the brightness and color of darker areas of the image. Because exposure is logarithmic, flash does not affect midtones or highlights. In color grading, this effect is also called *lift* and can be applied independently to the red, green, and blue channels of an image. A renderer can use negative component values to subtract color.

The default value is `{0,0,0}`, leaving an image unaltered.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/sensorenlargement](https://developer.apple.com/documentation/modelio/mdlcamera/sensorenlargement)

# sensorEnlargement (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The horizontal and vertical scale factors that determine the active region of the sensor.

## Declaration

```swift
var sensorEnlargement: vector_float2 { get set }
```

<a id="Discussion"></a>

## Discussion

For example, an enlargement factor of `{2,2}` results in the center portion of the image being cropped and expanded to fill the image plane. The default factor is `1.0` in both directions.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

# sensorEnlargement (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The horizontal and vertical scale factors that determine the active region of the sensor.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float2 sensorEnlargement;
```

<a id="Discussion"></a>

## Discussion

For example, an enlargement factor of `{2,2}` results in the center portion of the image being cropped and expanded to fill the image plane. The default factor is `1.0` in both directions.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorAspect](sensoraspect.md): The ratio of width to height for the camera’s simulated imaging surface.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

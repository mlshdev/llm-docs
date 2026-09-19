> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlcamera/sensoraspect

# sensorAspect (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The ratio of width to height for the camera’s simulated imaging surface.

## Declaration

```swift
var sensorAspect: Float { get set }
```

<a id="Discussion"></a>

## Discussion

To determine the width of the imaging surface, use this property and the [sensorVerticalAperture](sensorverticalaperture.md) property. For example, with the default vertical aperture of 24mm and default aspect ratio of 1.5 (or 3:2), the horizontal aperture is 36mm.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

# sensorAspect (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The ratio of width to height for the camera’s simulated imaging surface.

## Declaration

```objectivec
@property (nonatomic, assign) float sensorAspect;
```

<a id="Discussion"></a>

## Discussion

To determine the width of the imaging surface, use this property and the [sensorVerticalAperture](sensorverticalaperture.md) property. For example, with the default vertical aperture of 24mm and default aspect ratio of 1.5 (or 3:2), the horizontal aperture is 36mm.

## See Also

### Modeling a Physical Imaging Surface

- [sensorVerticalAperture](sensorverticalaperture.md): The height, in millimeters, of the camera’s simulated imaging surface.
- [sensorEnlargement](sensorenlargement.md): The horizontal and vertical scale factors that determine the active region of the sensor.
- [sensorShift](sensorshift.md): The horizontal and vertical offsets, in millimeters, of the center of the camera image relative to the center of the simulated lens.
- [flash](flash.md): Red, green, and blue factors to be used in brightening darker areas of the camera’s image.
- [exposure](exposure.md): Red, green, and blue factors that scale each color channel in the camera’s image.
- [exposureCompression](exposurecompression.md): Two parameters that determine the brightness compression curve for colors in the camera’s image.

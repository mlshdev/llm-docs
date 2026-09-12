> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lensdistortiondata](https://developer.apple.com/documentation/realitykit/lensdistortiondata)

# LensDistortionData

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A description of estimated lens distortion that can be used to rectify images.

## Declaration

```swift
struct LensDistortionData
```

<a id="overview"></a>

## Overview

See also: `AVCameraCalibrationData`

Example of a per-pixel undistort function using this data:

```
func undistortPoint(lensDistortionData: LensDistortionData,
                    imageSize: SIMD2<Float>,
                    point: SIMD2<Float>) -> SIMD2<Float> {
   // The lookup table holds the relative radial magnification for n linearly spaced radii.
   // The first position corresponds to radius = 0
   // The last position corresponds to the largest radius found in the image.

   // Determine the maximum radius.
   let opticalCenter: SIMD2<Float> = lensDistortionData.center
   let deltaXMax: Float = max(opticalCenter.x, imageSize.x  - opticalCenter.x)
   let deltaYMax: Float = max(opticalCenter.y, imageSize.y - opticalCenter.y)
   let radiusMax: Float = sqrt(deltaXMax * deltaXMax + deltaYMax * deltaYMax)

   // Determine the vector from the optical center to the given point.
   let centerToPoint: SIMD2<Float> = point - opticalCenter

   // Determine the radius of the given point.
   let pointRadius: Float = length(centerToPoint)

   // Look up the relative radial magnification to apply in the provided lookup table
   var magnification: Float = 1.0
   let radialLut = lensDistortionData.radialLookupTable
   if pointRadius < radiusMax {
       // Linear interpolation based on piecewise linear function of normalized radius
       let value = pointRadius * Float(radialLut.count - 1) / radiusMax
       let index = Int(value)
       let fraction  = value - Float(index)

       let magLeft = radialLut[index]
       let magRight = radialLut[index + 1]

       magnification = ( 1.0 - fraction ) * magLeft + fraction * magRight
   } else {
       magnification = radialLut[radialLut.count - 1]
   }

   // Apply radial magnification
   let centerToRectifiedPoint: SIMD2<Float> = centerToPoint + magnification * centerToPoint

   // Construct output
   return opticalCenter + centerToRectifiedPoint
 }
```

## Topics

### Initializers

- [init(center:radialLookupTable:)](lensdistortiondata/init%28center_radiallookuptable_%29.md): Initializes a new immutable data structure describing lens distortion estimation.

### Instance Properties

- [center](lensdistortiondata/center.md): The center pixel of the radial distortion mapping.
- [radialLookupTable](lensdistortiondata/radiallookuptable.md): A linear interpolation lookup table from the `center` to the maximum distance corner of the image. This describes the magnification of radius at a given radius. This is the same structure as `lensDistortionLookupTable` in `AVCameraCalibrationData` and can be used in a similar manner, with the data already converted into a float array.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual adjustments

- [HoverEffectComponent](hovereffectcomponent.md): A component that applies a visual effect to a hierarchy of entities when a person looks at or selects an entity.
- [BillboardComponent](billboardcomponent.md): A component that orients an entity instance so that it continuously points toward the active camera.
- [EnvironmentBlendingComponent](environmentblendingcomponent.md): A component that controls how an entity blends visually with objects in the local environment.
- [ImagePresentationComponent](imagepresentationcomponent.md): A component that supports general image presentation.

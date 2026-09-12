> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertydngasshoticcprofile](https://developer.apple.com/documentation/imageio/kcgimagepropertydngasshoticcprofile)

# kCGImagePropertyDNGAsShotICCProfile (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.

## Declaration

```swift
let kCGImagePropertyDNGAsShotICCProfile: CFString
```

## See Also

### Color Calibration

- [kCGImagePropertyDNGBlackLevelRepeatDim](kcgimagepropertydngblacklevelrepeatdim.md): The repeat pattern size for the black level tag.
- [kCGImagePropertyDNGBlackLevel](kcgimagepropertydngblacklevel.md): The zero light encoding level, specified as a repeating pattern.
- [kCGImagePropertyDNGBlackLevelDeltaH](kcgimagepropertydngblackleveldeltah.md): The difference between the zero-light encoding level for each column and the baseline zero-light encoding level.
- [kCGImagePropertyDNGBlackLevelDeltaV](kcgimagepropertydngblackleveldeltav.md): The difference between the zero-light encodoing level for each row and the baseline zero-light encoding level.
- [kCGImagePropertyDNGWhiteLevel](kcgimagepropertydngwhitelevel.md): The saturated encoding level for the raw sample values.
- [kCGImagePropertyDNGCalibrationIlluminant1](kcgimagepropertydngcalibrationilluminant1.md): The illuminant for the first set of color calibration tags.
- [kCGImagePropertyDNGCalibrationIlluminant2](kcgimagepropertydngcalibrationilluminant2.md): The illuminant for an optional second set of color calibration tags.
- [kCGImagePropertyDNGColorMatrix1](kcgimagepropertydngcolormatrix1.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the first calibration illuminant.
- [kCGImagePropertyDNGColorMatrix2](kcgimagepropertydngcolormatrix2.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the second calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration1](kcgimagepropertydngcameracalibration1.md): A matrix that transforms reference camera native space values to camera-native space values under the first calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration2](kcgimagepropertydngcameracalibration2.md): A matrix that transforms reference camera native space values to camera-native space values under the second calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix1](kcgimagepropertydngreductionmatrix1.md): A reduction matrix that converts color camera-native space values to XYZ values, under the first calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix2](kcgimagepropertydngreductionmatrix2.md): A reduction matrix that converts color camera-native space values to XYZ values, under the second calibration illuminant.
- [kCGImagePropertyDNGAsShotPreProfileMatrix](kcgimagepropertydngasshotpreprofilematrix.md): A matrix to apply to the camera color-space coordinates before processing values through the ICC profile.
- [kCGImagePropertyDNGCurrentICCProfile](kcgimagepropertydngcurrenticcprofile.md): A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.

# kCGImagePropertyDNGAsShotICCProfile (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyDNGAsShotICCProfile;
```

## See Also

### Color Calibration

- [kCGImagePropertyDNGBlackLevelRepeatDim](kcgimagepropertydngblacklevelrepeatdim.md): The repeat pattern size for the black level tag.
- [kCGImagePropertyDNGBlackLevel](kcgimagepropertydngblacklevel.md): The zero light encoding level, specified as a repeating pattern.
- [kCGImagePropertyDNGBlackLevelDeltaH](kcgimagepropertydngblackleveldeltah.md): The difference between the zero-light encoding level for each column and the baseline zero-light encoding level.
- [kCGImagePropertyDNGBlackLevelDeltaV](kcgimagepropertydngblackleveldeltav.md): The difference between the zero-light encodoing level for each row and the baseline zero-light encoding level.
- [kCGImagePropertyDNGWhiteLevel](kcgimagepropertydngwhitelevel.md): The saturated encoding level for the raw sample values.
- [kCGImagePropertyDNGCalibrationIlluminant1](kcgimagepropertydngcalibrationilluminant1.md): The illuminant for the first set of color calibration tags.
- [kCGImagePropertyDNGCalibrationIlluminant2](kcgimagepropertydngcalibrationilluminant2.md): The illuminant for an optional second set of color calibration tags.
- [kCGImagePropertyDNGColorMatrix1](kcgimagepropertydngcolormatrix1.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the first calibration illuminant.
- [kCGImagePropertyDNGColorMatrix2](kcgimagepropertydngcolormatrix2.md): A transformation matrix that converts XYZ values to reference camera native color spaces, under the second calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration1](kcgimagepropertydngcameracalibration1.md): A matrix that transforms reference camera native space values to camera-native space values under the first calibration illuminant.
- [kCGImagePropertyDNGCameraCalibration2](kcgimagepropertydngcameracalibration2.md): A matrix that transforms reference camera native space values to camera-native space values under the second calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix1](kcgimagepropertydngreductionmatrix1.md): A reduction matrix that converts color camera-native space values to XYZ values, under the first calibration illuminant.
- [kCGImagePropertyDNGReductionMatrix2](kcgimagepropertydngreductionmatrix2.md): A reduction matrix that converts color camera-native space values to XYZ values, under the second calibration illuminant.
- [kCGImagePropertyDNGAsShotPreProfileMatrix](kcgimagepropertydngasshotpreprofilematrix.md): A matrix to apply to the camera color-space coordinates before processing values through the ICC profile.
- [kCGImagePropertyDNGCurrentICCProfile](kcgimagepropertydngcurrenticcprofile.md): A profile that specifies default color rendering from camera color-space coordinates into the ICC profile space.

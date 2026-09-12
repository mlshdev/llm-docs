> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_cleanaperture](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_cleanaperture)

# kVTCompressionPropertyKey_CleanAperture (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The clean aperture for encoded frames.

## Declaration

```swift
let kVTCompressionPropertyKey_CleanAperture: CFString
```

<a id="Discussion"></a>

## Discussion

If a video encoder enforces specific clean apertures, this property is read-only ([VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) will return [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The clean aperture will be set on the format description for output samples, and may affect source frame scaling. NULL is a valid value for this property, meaning that the clean aperture is the full width and height.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

# kVTCompressionPropertyKey_CleanAperture (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The clean aperture for encoded frames.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_CleanAperture;
```

<a id="Discussion"></a>

## Discussion

If a video encoder enforces specific clean apertures, this property is read-only ([VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) will return [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The clean aperture will be set on the format description for output samples, and may affect source frame scaling. NULL is a valid value for this property, meaning that the clean aperture is the full width and height.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_FieldDetail](kvtcompressionpropertykey_fielddetail.md): Field ordering for encoded interlaced frames.
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

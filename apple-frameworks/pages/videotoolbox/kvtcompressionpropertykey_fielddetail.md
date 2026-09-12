> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_fielddetail](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_fielddetail)

# kVTCompressionPropertyKey_FieldDetail (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Field ordering for encoded interlaced frames.

## Declaration

```swift
let kVTCompressionPropertyKey_FieldDetail: CFString
```

<a id="Discussion"></a>

## Discussion

If a video encoder enforces specific field ordering, this property will be read-only ([VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) returns [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The field detail is set on the format description for output samples, and may affect source frame scaling. `NULL` is a valid value for this property.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

# kVTCompressionPropertyKey_FieldDetail (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Field ordering for encoded interlaced frames.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_FieldDetail;
```

<a id="Discussion"></a>

## Discussion

If a video encoder enforces specific field ordering, this property will be read-only ([VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) returns [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The field detail is set on the format description for output samples, and may affect source frame scaling. `NULL` is a valid value for this property.

## See Also

### Clean Aperture and Pixel Aspect Ratio

- [kVTCompressionPropertyKey_AspectRatio16x9](kvtcompressionpropertykey_aspectratio16x9.md): A Boolean value indicating whether the DV video stream should have the 16x9 flag set.
- [kVTCompressionPropertyKey_CleanAperture](kvtcompressionpropertykey_cleanaperture.md): The clean aperture for encoded frames.
- [kVTCompressionPropertyKey_FieldCount](kvtcompressionpropertykey_fieldcount.md): The field count indicating whether the frames should be encoded progressive (1) or interlaced (2).
- [kVTCompressionPropertyKey_PixelAspectRatio](kvtcompressionpropertykey_pixelaspectratio.md): The pixel aspect ratio for encoded frames.
- [kVTCompressionPropertyKey_ProgressiveScan](kvtcompressionpropertykey_progressivescan.md): A Boolean value indicating whether the DV video stream should have the progressive flag set.

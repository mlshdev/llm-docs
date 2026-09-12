> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caedrmetadata/hdr10(displayinfo:contentinfo:opticaloutputscale:)](https://developer.apple.com/documentation/quartzcore/caedrmetadata/hdr10(displayinfo:contentinfo:opticaloutputscale:))

# hdr10(displayInfo:contentInfo:opticalOutputScale:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Creates EDR metadata for HDR10 content based on mastering display color information and content light levels.

## Declaration

```swift
class func hdr10(displayInfo displayData: Data?, contentInfo contentData: Data?, opticalOutputScale scale: Float) -> CAEDRMetadata
```

## Parameters

- `displayData`: A value of 24 bytes that contains a big-endian structure, as defined in D.2.28 (Mastering Display Colour Volume SEI message).
- `contentData`: A value of 4 bytes that contains a big-endian structure, as defined in D.2.35 (Content Light Level Information SEI message).
- `scale`: A scale factor relating (display-referred linear) EDR values to the optical output of the reference display.

<a id="Discussion"></a>

## Discussion

The MDCV and CLLI message formats are defined in ISO/IEC 23008-2:2017.

The values in the drawable’s texture are assumed to be proportional to the optical output (in cd/m^2) of the reference display. For example, if the optical output scale is 100, then a value of 1.0 is assumed to be 100 nits.

## See Also

### Retrieving HDR10 Metadata

- [hdr10(minLuminance:maxLuminance:opticalOutputScale:)](hdr10%28minluminance_maxluminance_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on the luminance characteristics of a mastering display.

# HDR10MetadataWithDisplayInfo:contentInfo:opticalOutputScale: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Creates EDR metadata for HDR10 content based on mastering display color information and content light levels.

## Declaration

```objectivec
+ (CAEDRMetadata *) HDR10MetadataWithDisplayInfo:(NSData *) displayData contentInfo:(NSData *) contentData opticalOutputScale:(float) scale;
```

## Parameters

- `displayData`: A value of 24 bytes that contains a big-endian structure, as defined in D.2.28 (Mastering Display Colour Volume SEI message).
- `contentData`: A value of 4 bytes that contains a big-endian structure, as defined in D.2.35 (Content Light Level Information SEI message).
- `scale`: A scale factor relating (display-referred linear) EDR values to the optical output of the reference display.

<a id="Discussion"></a>

## Discussion

The MDCV and CLLI message formats are defined in ISO/IEC 23008-2:2017.

The values in the drawable’s texture are assumed to be proportional to the optical output (in cd/m^2) of the reference display. For example, if the optical output scale is 100, then a value of 1.0 is assumed to be 100 nits.

## See Also

### Retrieving HDR10 Metadata

- [HDR10MetadataWithMinLuminance:maxLuminance:opticalOutputScale:](hdr10%28minluminance_maxluminance_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on the luminance characteristics of a mastering display.

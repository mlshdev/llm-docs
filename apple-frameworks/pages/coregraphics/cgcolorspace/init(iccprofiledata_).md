> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/init(iccprofiledata:)](https://developer.apple.com/documentation/coregraphics/cgcolorspace/init(iccprofiledata:))

# init(iccProfileData:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates an ICC-based color space using the ICC profile contained in the specified data.

> Use [init(iccData:)](init%28iccdata_%29.md) instead.

## Declaration

```swift
init?(iccProfileData data: CFData)
```

## Parameters

- `data`: The data containing the ICC profile to set for the new color space.

<a id="return-value"></a>

## Return Value

A new color space based on the specified profile.

## See Also

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [init(iccBasedNComponents:range:profile:alternate:)](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [init(indexedBaseSpace:last:colorTable:)](init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [init(labWhitePoint:blackPoint:range:)](init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [init(patternBaseSpace:)](init%28patternbasespace_%29.md): Creates a pattern color space.
- [init(name:)](init%28name_%29.md): Creates a specified type of Quartz color space.
- [init(platformColorSpaceRef:)](init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [init(iccData:)](init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [init(propertyListPlist:)](init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB()](../cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK()](../cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray()](../cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.

# CGColorSpaceCreateWithICCProfile (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS  (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Creates an ICC-based color space using the ICC profile contained in the specified data.

> Use [CGColorSpaceCreateWithICCData](init%28iccdata_%29.md) instead.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceCreateWithICCProfile(CFDataRef data);
```

## Parameters

- `data`: The data containing the ICC profile to set for the new color space.

<a id="return-value"></a>

## Return Value

A new color space based on the specified profile.

## See Also

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [CGColorSpaceCreateICCBased](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [CGColorSpaceCreateIndexed](init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [CGColorSpaceCreateLab](init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [CGColorSpaceCreatePattern](init%28patternbasespace_%29.md): Creates a pattern color space.
- [CGColorSpaceCreateWithName](init%28name_%29.md): Creates a specified type of Quartz color space.
- [CGColorSpaceCreateWithPlatformColorSpace](init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [CGColorSpaceCreateWithICCData](init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [CGColorSpaceCreateWithPropertyList](init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB](../cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK](../cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray](../cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.

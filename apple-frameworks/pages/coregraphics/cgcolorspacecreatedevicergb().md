> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspacecreatedevicergb()](https://developer.apple.com/documentation/coregraphics/cgcolorspacecreatedevicergb())

# CGColorSpaceCreateDeviceRGB() (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a device-dependent RGB color space.

## Declaration

```swift
func CGColorSpaceCreateDeviceRGB() -> CGColorSpace
```

<a id="return-value"></a>

## Return Value

A device-dependent RGB color space. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](cgcolorspacerelease.md). If unsuccessful, returns `NULL`.

<a id="Discussion"></a>

## Discussion

Colors in a device-dependent color space are not transformed or otherwise modified when displayed on an output device—that is, there is no attempt to maintain the visual appearance of a color. As a consequence, colors in a device color space often appear different when displayed on different output devices. For this reason, device color spaces are not recommended when color preservation is important.

## See Also

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](cgcolorspace/init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](cgcolorspace/init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [init(iccBasedNComponents:range:profile:alternate:)](cgcolorspace/init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [init(indexedBaseSpace:last:colorTable:)](cgcolorspace/init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [init(labWhitePoint:blackPoint:range:)](cgcolorspace/init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [init(patternBaseSpace:)](cgcolorspace/init%28patternbasespace_%29.md): Creates a pattern color space.
- [init(name:)](cgcolorspace/init%28name_%29.md): Creates a specified type of Quartz color space.
- [init(platformColorSpaceRef:)](cgcolorspace/init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [init(iccData:)](cgcolorspace/init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [init(propertyListPlist:)](cgcolorspace/init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceCMYK()](cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray()](cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [init(iccProfileData:)](cgcolorspace/init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

# CGColorSpaceCreateDeviceRGB (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a device-dependent RGB color space.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceCreateDeviceRGB();
```

<a id="return-value"></a>

## Return Value

A device-dependent RGB color space. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](cgcolorspacerelease.md). If unsuccessful, returns `NULL`.

<a id="Discussion"></a>

## Discussion

Colors in a device-dependent color space are not transformed or otherwise modified when displayed on an output device—that is, there is no attempt to maintain the visual appearance of a color. As a consequence, colors in a device color space often appear different when displayed on different output devices. For this reason, device color spaces are not recommended when color preservation is important.

## See Also

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](cgcolorspace/init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](cgcolorspace/init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [CGColorSpaceCreateICCBased](cgcolorspace/init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [CGColorSpaceCreateIndexed](cgcolorspace/init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [CGColorSpaceCreateLab](cgcolorspace/init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [CGColorSpaceCreatePattern](cgcolorspace/init%28patternbasespace_%29.md): Creates a pattern color space.
- [CGColorSpaceCreateWithName](cgcolorspace/init%28name_%29.md): Creates a specified type of Quartz color space.
- [CGColorSpaceCreateWithPlatformColorSpace](cgcolorspace/init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [CGColorSpaceCreateWithICCData](cgcolorspace/init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [CGColorSpaceCreateWithPropertyList](cgcolorspace/init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceCMYK](cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray](cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [CGColorSpaceCreateWithICCProfile](cgcolorspace/init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

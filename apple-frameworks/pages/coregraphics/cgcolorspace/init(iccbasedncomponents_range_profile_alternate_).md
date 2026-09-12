> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/init(iccbasedncomponents:range:profile:alternate:)](https://developer.apple.com/documentation/coregraphics/cgcolorspace/init(iccbasedncomponents:range:profile:alternate:))

# init(iccBasedNComponents:range:profile:alternate:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a device-independent color space that is defined according to the ICC color profile specification.

## Declaration

```swift
init?(iccBasedNComponents nComponents: Int, range: UnsafePointer<CGFloat>?, profile: CGDataProvider, alternate: CGColorSpace?)
```

## Parameters

- `nComponents`: The number of color components in the color space defined by the ICC profile data. This must match the number of components actually in the ICC profile and must equal 1, 3, or 4.
- `range`: An array of numbers that specify the minimum and maximum valid values of the corresponding color components. The size of the array is two times the number of components. If `c[k]` is the `k`the color component, the valid range is range`[2*k] ≤ c[k] ≤` range`[2*k+1]`.
- `profile`: A data provider that supplies the ICC profile.
- `alternate`: An alternate color space to use in case the ICC profile is not supported. The alternate color space must have `nComponents` color components. You must supply an alternate color space. If this parameter is `NULL`, then the function returns `NULL`.

<a id="return-value"></a>

## Return Value

A new ICC-based color space object, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

This function creates an ICC-based color space from an ICC color profile, as defined by the International Color Consortium. ICC profiles define the reproducible color gamut (the range of colors supported by a device) and other characteristics of a particular output device, providing a way to accurately transform the color space of one device to the color space of another. The ICC profile is usually provided by the manufacturer of the device. Additionally, some color monitors and printers contain electronically embedded ICC profile information, as do some bitmap formats such as TIFF. Colors in a device-independent color space should appear the same when displayed on different devices, to the extent that the capabilities of the device allow.

You may want to use this function for a color space that requires a detailed gamma, such as the piecewise transfer function used in sRGB or ITU-R BT.709, because this function can accurately represent these gamma curves.

## See Also

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
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
- [init(iccProfileData:)](init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

# CGColorSpaceCreateICCBased (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a device-independent color space that is defined according to the ICC color profile specification.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceCreateICCBased(size_t nComponents, const CGFloat *range, CGDataProviderRef profile, CGColorSpaceRef alternate);
```

## Parameters

- `nComponents`: The number of color components in the color space defined by the ICC profile data. This must match the number of components actually in the ICC profile and must equal 1, 3, or 4.
- `range`: An array of numbers that specify the minimum and maximum valid values of the corresponding color components. The size of the array is two times the number of components. If `c[k]` is the `k`the color component, the valid range is range`[2*k] ≤ c[k] ≤` range`[2*k+1]`.
- `profile`: A data provider that supplies the ICC profile.
- `alternate`: An alternate color space to use in case the ICC profile is not supported. The alternate color space must have `nComponents` color components. You must supply an alternate color space. If this parameter is `NULL`, then the function returns `NULL`.

<a id="return-value"></a>

## Return Value

A new ICC-based color space object, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

This function creates an ICC-based color space from an ICC color profile, as defined by the International Color Consortium. ICC profiles define the reproducible color gamut (the range of colors supported by a device) and other characteristics of a particular output device, providing a way to accurately transform the color space of one device to the color space of another. The ICC profile is usually provided by the manufacturer of the device. Additionally, some color monitors and printers contain electronically embedded ICC profile information, as do some bitmap formats such as TIFF. Colors in a device-independent color space should appear the same when displayed on different devices, to the extent that the capabilities of the device allow.

You may want to use this function for a color space that requires a detailed gamma, such as the piecewise transfer function used in sRGB or ITU-R BT.709, because this function can accurately represent these gamma curves.

## See Also

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
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
- [CGColorSpaceCreateWithICCProfile](init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

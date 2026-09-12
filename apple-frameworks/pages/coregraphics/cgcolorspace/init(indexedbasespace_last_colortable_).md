> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/init(indexedbasespace:last:colortable:)](https://developer.apple.com/documentation/coregraphics/cgcolorspace/init(indexedbasespace:last:colortable:))

# init(indexedBaseSpace:last:colorTable:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an indexed color space, consisting of colors specified by a color lookup table.

## Declaration

```swift
init?(indexedBaseSpace baseSpace: CGColorSpace, last lastIndex: Int, colorTable: UnsafePointer<UInt8>)
```

## Parameters

- `baseSpace`: The color space on which the color table is based.
- `lastIndex`: The maximum valid index value for the color table. The value must be less than or equal to 255.
- `colorTable`: An array of `m*(lastIndex+1)` bytes, where `m` is the number of color components in the base color space. Each byte is an unsigned integer in the range `0` to `255` that is scaled to the range of the corresponding color component in the base color space.

<a id="return-value"></a>

## Return Value

A new indexed color space object, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

An indexed color space contains a color table with up to 255 entries, and a base color space to which the color table entries are mapped. Each entry in the color table specifies one color in the base color space. A value in an indexed color space is treated as an index into the color table of the color space. The data in the table is in meshed format. (For example, for an RGB color space the values are R, G, B, R, G, B, and so on.)

## See Also

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [init(iccBasedNComponents:range:profile:alternate:)](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
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

# CGColorSpaceCreateIndexed (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an indexed color space, consisting of colors specified by a color lookup table.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceCreateIndexed(CGColorSpaceRef baseSpace, size_t lastIndex, const unsigned char *colorTable);
```

## Parameters

- `baseSpace`: The color space on which the color table is based.
- `lastIndex`: The maximum valid index value for the color table. The value must be less than or equal to 255.
- `colorTable`: An array of `m*(lastIndex+1)` bytes, where `m` is the number of color components in the base color space. Each byte is an unsigned integer in the range `0` to `255` that is scaled to the range of the corresponding color component in the base color space.

<a id="return-value"></a>

## Return Value

A new indexed color space object, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

An indexed color space contains a color table with up to 255 entries, and a base color space to which the color table entries are mapped. Each entry in the color table specifies one color in the base color space. A value in an indexed color space is treated as an index into the color table of the color space. The data in the table is in meshed format. (For example, for an RGB color space the values are R, G, B, R, G, B, and so on.)

## See Also

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [CGColorSpaceCreateICCBased](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
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

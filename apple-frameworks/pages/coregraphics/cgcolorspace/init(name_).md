> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspace/init(name:)](https://developer.apple.com/documentation/coregraphics/cgcolorspace/init(name:))

# init(name:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a specified type of Quartz color space.

## Declaration

```swift
init?(name: CFString)
```

## Parameters

- `name`: A color space name. See [Accessing System-Defined Color Spaces](../cgcolorspace.md#Accessing-System-Defined-Color-Spaces) for a list of the valid Quartz-defined names.

<a id="return-value"></a>

## Return Value

A new generic color space, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function to create a generic color space. For more information, see [Accessing System-Defined Color Spaces](../cgcolorspace.md#Accessing-System-Defined-Color-Spaces).

## See Also

### Related Documentation

- [name](name.md): Returns the name used to create the specified color space.

### Creating Color Spaces

- [init(calibratedGrayWhitePoint:blackPoint:gamma:)](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [init(calibratedRGBWhitePoint:blackPoint:gamma:matrix:)](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [init(iccBasedNComponents:range:profile:alternate:)](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [init(indexedBaseSpace:last:colorTable:)](init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [init(labWhitePoint:blackPoint:range:)](init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [init(patternBaseSpace:)](init%28patternbasespace_%29.md): Creates a pattern color space.
- [init(platformColorSpaceRef:)](init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [init(iccData:)](init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [init(propertyListPlist:)](init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB()](../cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK()](../cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray()](../cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [init(iccProfileData:)](init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

# CGColorSpaceCreateWithName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a specified type of Quartz color space.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceCreateWithName(CFStringRef name);
```

## Parameters

- `name`: A color space name. See [Accessing System-Defined Color Spaces](../cgcolorspace.md#Accessing-System-Defined-Color-Spaces) for a list of the valid Quartz-defined names.

<a id="return-value"></a>

## Return Value

A new generic color space, or `NULL` if unsuccessful. In Objective-C, you’re responsible for releasing this object by calling [CGColorSpaceRelease](../cgcolorspacerelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function to create a generic color space. For more information, see [Accessing System-Defined Color Spaces](../cgcolorspace.md#Accessing-System-Defined-Color-Spaces).

## See Also

### Related Documentation

- [CGColorSpaceCopyName](name.md): Returns the name used to create the specified color space.

### Creating Color Spaces

- [CGColorSpaceCreateCalibratedGray](init%28calibratedgraywhitepoint_blackpoint_gamma_%29.md): Creates a calibrated grayscale color space.
- [CGColorSpaceCreateCalibratedRGB](init%28calibratedrgbwhitepoint_blackpoint_gamma_matrix_%29.md): Creates a calibrated RGB color space.
- [CGColorSpaceCreateICCBased](init%28iccbasedncomponents_range_profile_alternate_%29.md): Creates a device-independent color space that is defined according to the ICC color profile specification.
- [CGColorSpaceCreateIndexed](init%28indexedbasespace_last_colortable_%29.md): Creates an indexed color space, consisting of colors specified by a color lookup table.
- [CGColorSpaceCreateLab](init%28labwhitepoint_blackpoint_range_%29.md): Creates a device-independent color space that is relative to human color perception, according to the CIE L\*a\*b\* standard.
- [CGColorSpaceCreatePattern](init%28patternbasespace_%29.md): Creates a pattern color space.
- [CGColorSpaceCreateWithPlatformColorSpace](init%28platformcolorspaceref_%29.md): Deprecated. Creates a platform-specific color space.
- [CGColorSpaceCreateWithICCData](init%28iccdata_%29.md): Creates an ICC-based color space using the ICC profile contained in the specified data.
- [CGColorSpaceCreateWithPropertyList](init%28propertylistplist_%29.md): Creates a color space from a property list.
- [CGColorSpaceCreateDeviceRGB](../cgcolorspacecreatedevicergb%28%29.md): Creates a device-dependent RGB color space.
- [CGColorSpaceCreateDeviceCMYK](../cgcolorspacecreatedevicecmyk%28%29.md): Creates a device-dependent CMYK color space.
- [CGColorSpaceCreateDeviceGray](../cgcolorspacecreatedevicegray%28%29.md): Creates a device-dependent grayscale color space.
- [CGColorSpaceCreateWithICCProfile](init%28iccprofiledata_%29.md): Deprecated. Creates an ICC-based color space using the ICC profile contained in the specified data.

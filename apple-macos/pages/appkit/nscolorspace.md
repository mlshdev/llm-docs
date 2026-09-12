> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace](https://developer.apple.com/documentation/appkit/nscolorspace)

# NSColorSpace (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that represents a custom color space.

## Declaration

```swift
class NSColorSpace
```

<a id="overview"></a>

## Overview

You can make custom color spaces from ColorSync profiles or from ICC profiles. [NSColorSpace](nscolorspace.md) also has factory methods that return objects representing the system color spaces.

You can use the [init(colorSpace:components:count:)](nscolor/init%28colorspace_components_count_%29.md) method of the [NSColor](nscolor.md) class to create color objects using custom [NSColorSpace](nscolorspace.md) objects. You can also send the [usingColorSpace(\_:)](nscolor/usingcolorspace%28__%29.md) message to an [NSColor](nscolor.md) object to convert it between two color spaces, either of which may be a custom color space.

## Topics

### Getting a Named Color Space

- [deviceRGB](nscolorspace/devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGB](nscolorspace/genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYK](nscolorspace/devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYK](nscolorspace/genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGray](nscolorspace/devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGray](nscolorspace/genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGB](nscolorspace/srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGB](nscolorspace/extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3](nscolorspace/displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22Gray](nscolorspace/genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22Gray](nscolorspace/extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998](nscolorspace/adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.

### Getting the Color Spaces Available On the System

- [availableColorSpaces(with:)](nscolorspace/availablecolorspaces%28with_%29.md): Returns the list of color spaces available on the system that are displayed in the color panel, in the order they are displayed in the color panel.

### Initializing a Custom Color Space Object

- [init(cgColorSpace:)](nscolorspace/init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [init(colorSyncProfile:)](nscolorspace/init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.
- [init(iccProfileData:)](nscolorspace/init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.

### Accessing Color Space Data and Attributes

- [cgColorSpace](nscolorspace/cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](nscolorspace/colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](nscolorspace/model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](nscolorspace/colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](nscolorspace/iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](nscolorspace/localizedname.md): The localized name of the color space.
- [numberOfColorComponents](nscolorspace/numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

### Initializers

- [init(CGColorSpace:)](nscolorspace/init%28cgcolorspace_%29-90qpy.md)
- [init(ICCProfileData:)](nscolorspace/init%28iccprofiledata_%29-jhas.md)
- [init(coder:)](nscolorspace/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Colors

- [NSColor](nscolor.md): An object that stores color data and sometimes opacity (alpha value).
- [NSColorList](nscolorlist.md): An ordered list of color objects, identified by keys.

# NSColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that represents a custom color space.

## Declaration

```objectivec
@interface NSColorSpace : NSObject
```

<a id="overview"></a>

## Overview

You can make custom color spaces from ColorSync profiles or from ICC profiles. [NSColorSpace](nscolorspace.md) also has factory methods that return objects representing the system color spaces.

You can use the [colorWithColorSpace:components:count:](nscolor/init%28colorspace_components_count_%29.md) method of the [NSColor](nscolor.md) class to create color objects using custom [NSColorSpace](nscolorspace.md) objects. You can also send the [colorUsingColorSpace:](nscolor/usingcolorspace%28__%29.md) message to an [NSColor](nscolor.md) object to convert it between two color spaces, either of which may be a custom color space.

## Topics

### Getting a Named Color Space

- [deviceRGBColorSpace](nscolorspace/devicergb.md): A color space object that represents a calibrated or device-dependent RGB color space.
- [genericRGBColorSpace](nscolorspace/genericrgb.md): A color space object that represents a device-independent RGB color space.
- [deviceCMYKColorSpace](nscolorspace/devicecmyk.md): A color space object that represents a calibrated or device-dependent CMYK color space.
- [genericCMYKColorSpace](nscolorspace/genericcmyk.md): A color space object that represents a device-independent CMYK color space.
- [deviceGrayColorSpace](nscolorspace/devicegray.md): A color space object that represents a calibrated or device-dependent gray color space.
- [genericGrayColorSpace](nscolorspace/genericgray.md): A color space object that represents a device-independent gray color space.
- [sRGBColorSpace](nscolorspace/srgb.md): A color space object that represents an sRGB color space.
- [extendedSRGBColorSpace](nscolorspace/extendedsrgb.md): A color space object that represents an extended sRGB color space.
- [displayP3ColorSpace](nscolorspace/displayp3.md): A color space object that represents a P3 Display color space.
- [genericGamma22GrayColorSpace](nscolorspace/genericgamma22gray.md): A color space object that represents a gray color space with a gamma value of 2.2.
- [extendedGenericGamma22GrayColorSpace](nscolorspace/extendedgenericgamma22gray.md): A color space object that represents an extended gray color space with a gamma value of 2.2.
- [adobeRGB1998ColorSpace](nscolorspace/adobergb1998.md): A color space object that represents an Adobe RGB (1998) color space.

### Getting the Color Spaces Available On the System

- [availableColorSpacesWithModel:](nscolorspace/availablecolorspaces%28with_%29.md): Returns the list of color spaces available on the system that are displayed in the color panel, in the order they are displayed in the color panel.

### Initializing a Custom Color Space Object

- [initWithCGColorSpace:](nscolorspace/init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [initWithColorSyncProfile:](nscolorspace/init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.
- [initWithICCProfileData:](nscolorspace/init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.

### Accessing Color Space Data and Attributes

- [CGColorSpace](nscolorspace/cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](nscolorspace/colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](nscolorspace/model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](nscolorspace/colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](nscolorspace/iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](nscolorspace/localizedname.md): The localized name of the color space.
- [numberOfColorComponents](nscolorspace/numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Colors

- [NSColor](nscolor.md): An object that stores color data and sometimes opacity (alpha value).
- [NSColorList](nscolorlist.md): An ordered list of color objects, identified by keys.

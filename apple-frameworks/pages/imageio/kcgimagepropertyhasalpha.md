> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyhasalpha](https://developer.apple.com/documentation/imageio/kcgimagepropertyhasalpha)

# kCGImagePropertyHasAlpha (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the image has an alpha channel.

## Declaration

```swift
let kCGImagePropertyHasAlpha: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBoolean](../corefoundation/cfboolean.md). The value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) when the image contains an alpha channel.

## See Also

### Color Information

- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

# kCGImagePropertyHasAlpha (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the image has an alpha channel.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyHasAlpha;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFBooleanRef](../corefoundation/cfboolean.md). The value is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) when the image contains an alpha channel.

## See Also

### Color Information

- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

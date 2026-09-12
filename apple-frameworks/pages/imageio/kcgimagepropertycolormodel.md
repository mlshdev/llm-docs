> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertycolormodel](https://developer.apple.com/documentation/imageio/kcgimagepropertycolormodel)

# kCGImagePropertyColorModel (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color model of the image, such as RGB, CMYK, grayscale, or Lab.

## Declaration

```swift
let kCGImagePropertyColorModel: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is of type [CFString](../corefoundation/cfstring.md). Typically, the value corresponds to the [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md), [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md), [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md), or [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md) constant.

A color model describes how color values are represented mathematically. A color space is a color model combined with a definition of how to interpret values within the model.

## See Also

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

# kCGImagePropertyColorModel (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color model of the image, such as RGB, CMYK, grayscale, or Lab.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyColorModel;
```

<a id="Discussion"></a>

## Discussion

The value of this key is of type [CFStringRef](../corefoundation/cfstring.md). Typically, the value corresponds to the [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md), [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md), [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md), or [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md) constant.

A color model describes how color values are represented mathematically. A color space is a color model combined with a definition of how to interpret values within the model.

## See Also

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

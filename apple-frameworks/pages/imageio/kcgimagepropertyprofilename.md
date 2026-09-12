> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyprofilename](https://developer.apple.com/documentation/imageio/kcgimagepropertyprofilename)

# kCGImagePropertyProfileName (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.

## Declaration

```swift
let kCGImagePropertyProfileName: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFString](../corefoundation/cfstring.md).

## See Also

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

# kCGImagePropertyProfileName (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyProfileName;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFStringRef](../corefoundation/cfstring.md).

## See Also

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

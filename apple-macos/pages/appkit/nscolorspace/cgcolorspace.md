> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/cgcolorspace](https://developer.apple.com/documentation/appkit/nscolorspace/cgcolorspace)

# cgColorSpace (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Graphics color-space object that represents a color space equivalent to the color space’s.

## Declaration

```swift
var cgColorSpace: CGColorSpace? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a reference to an Core Graphics color-space object ([CGColorSpace](https://developer.apple.com/documentation/coregraphics/cgcolorspace)) or `NULL` if the type of color space represented by the receiver cannot be represented by a `CGColorSpace` object.

## See Also

### Accessing Color Space Data and Attributes

- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# CGColorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Graphics color-space object that represents a color space equivalent to the color space’s.

## Declaration

```objectivec
@property (readonly, nullable) CGColorSpaceRef CGColorSpace;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a reference to an Core Graphics color-space object ([CGColorSpaceRef](https://developer.apple.com/documentation/coregraphics/cgcolorspace)) or `NULL` if the type of color space represented by the receiver cannot be represented by a `CGColorSpace` object.

## See Also

### Accessing Color Space Data and Attributes

- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

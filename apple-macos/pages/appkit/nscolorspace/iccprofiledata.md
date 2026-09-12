> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/iccprofiledata](https://developer.apple.com/documentation/appkit/nscolorspace/iccprofiledata)

# iccProfileData (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The ICC profile data from which the color space was created.

## Declaration

```swift
var iccProfileData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The ICC profile from which the receiver was created. This method attempts to compute the profile data from a CMProfileRef object and returns `nil` if it is unable to.

For information on ICC profiles, see the latest ICC specification at the [International Color Consortium website](http://www.color.org/icc_specs2.html).

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# ICCProfileData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The ICC profile data from which the color space was created.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSData * ICCProfileData;
```

<a id="Discussion"></a>

## Discussion

The ICC profile from which the receiver was created. This method attempts to compute the profile data from a CMProfileRef object and returns `nil` if it is unable to.

For information on ICC profiles, see the latest ICC specification at the [International Color Consortium website](http://www.color.org/icc_specs2.html).

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

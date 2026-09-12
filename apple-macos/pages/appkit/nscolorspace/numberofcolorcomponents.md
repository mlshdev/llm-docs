> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/numberofcolorcomponents](https://developer.apple.com/documentation/appkit/nscolorspace/numberofcolorcomponents)

# numberOfColorComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components, excluding alpha, the color space supports.

## Declaration

```swift
var numberOfColorComponents: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value is `0` if the color space isn’t based on `float` components.

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.

# numberOfColorComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components, excluding alpha, the color space supports.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfColorComponents;
```

<a id="Discussion"></a>

## Discussion

This value is `0` if the color space isn’t based on `float` components.

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/colorspacemodel](https://developer.apple.com/documentation/appkit/nscolorspace/colorspacemodel)

# colorSpaceModel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The model on which the color space is based.

## Declaration

```swift
var colorSpaceModel: NSColorSpace.Model { get }
```

<a id="Discussion"></a>

## Discussion

See `Color Space Models` for a list of valid NSColorSpaceModel constants.

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# colorSpaceModel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The model on which the color space is based.

## Declaration

```objectivec
@property (readonly) NSColorSpaceModel colorSpaceModel;
```

<a id="Discussion"></a>

## Discussion

See `Color Space Models` for a list of valid NSColorSpaceModel constants.

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

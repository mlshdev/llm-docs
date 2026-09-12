> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/localizedname](https://developer.apple.com/documentation/appkit/nscolorspace/localizedname)

# localizedName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The localized name of the color space.

## Declaration

```swift
var localizedName: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property holds the name of the color space as a localized string or `nil` if no localized name exists.

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# localizedName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The localized name of the color space.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedName;
```

<a id="Discussion"></a>

## Discussion

This property holds the name of the color space as a localized string or `nil` if no localized name exists.

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

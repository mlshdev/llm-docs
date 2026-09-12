> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/colorsyncprofile](https://developer.apple.com/documentation/appkit/nscolorspace/colorsyncprofile)

# colorSyncProfile (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The ColorSync profile from which the color space was created.

## Declaration

```swift
var colorSyncProfile: UnsafeMutableRawPointer? { get }
```

<a id="Discussion"></a>

## Discussion

The ColorSync profile on which the receiver is based. You need to cast this value to an object of opaque type CMProfileRef. Returns `NULL` if the receiver was created from a ICC-profile data instead. See [ColorSync Manager](../../applicationservices/colorsync_manager.md) for further information on CMProfileRef.

## See Also

### Accessing Color Space Data and Attributes

- [cgColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpace.Model](model.md): Constants that describe the abstract model on which color space objects are based.
- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

# colorSyncProfile (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The ColorSync profile from which the color space was created.

## Declaration

```objectivec
@property (readonly, nullable) void * colorSyncProfile;
```

<a id="Discussion"></a>

## Discussion

The ColorSync profile on which the receiver is based. You need to cast this value to an object of opaque type CMProfileRef. Returns `NULL` if the receiver was created from a ICC-profile data instead. See [ColorSync Manager](../../applicationservices/colorsync_manager.md) for further information on CMProfileRef.

## See Also

### Accessing Color Space Data and Attributes

- [CGColorSpace](cgcolorspace.md): The Core Graphics color-space object that represents a color space equivalent to the color space’s.
- [colorSpaceModel](colorspacemodel.md): The model on which the color space is based.
- [NSColorSpaceModel](model.md): Constants that describe the abstract model on which color space objects are based.
- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.
- [localizedName](localizedname.md): The localized name of the color space.
- [numberOfColorComponents](numberofcolorcomponents.md): The number of components, excluding alpha, the color space supports.

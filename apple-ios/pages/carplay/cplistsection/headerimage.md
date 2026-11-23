> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/headerimage

# headerImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The image to display in the header area of the section.

## Declaration

```swift
@NSCopying var headerImage: UIImage? { get set }
```

<a id="discussion"></a>

## Discussion

This property contains the image you specified at initialization time. If you assign a new image to this property, create your [UIImage](https://developer.apple.com/documentation/uikit/uiimage) type with an asset catalog resource whenever possible. From the asset catalog resources, CarPlay chooses the appropriate image resource automatically. For example, CarPlay chooses the light and dark variant of your image to match the vehicle settings.

The [CPMaximumListSectionImageSize](../cpmaximumlistsectionimagesize.md) constant contains the maximum supported size for images. To get the maximum image dimensions in pixels, multiple the maximum size values by the scale factor in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Getting the section’s header content

- [header](header.md): The main text to display in the header area of the section.
- [headerSubtitle](headersubtitle.md): The secondary text to display in the header area of the section.
- [headerButton](headerbutton.md): The button to display in the header area of the section.

# headerImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The image to display in the header area of the section.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * headerImage;
```

<a id="discussion"></a>

## Discussion

This property contains the image you specified at initialization time. If you assign a new image to this property, create your [UIImage](https://developer.apple.com/documentation/uikit/uiimage) type with an asset catalog resource whenever possible. From the asset catalog resources, CarPlay chooses the appropriate image resource automatically. For example, CarPlay chooses the light and dark variant of your image to match the vehicle settings.

The [CPMaximumListSectionImageSize](../cpmaximumlistsectionimagesize.md) constant contains the maximum supported size for images. To get the maximum image dimensions in pixels, multiple the maximum size values by the scale factor in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Getting the section’s header content

- [header](header.md): The main text to display in the header area of the section.
- [headerSubtitle](headersubtitle.md): The secondary text to display in the header area of the section.
- [headerButton](headerbutton.md): The button to display in the header area of the section.

> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaximumlistsectionimagesize

# CPMaximumListSectionImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size of images you include in section headers.

## Declaration

```swift
let CPMaximumListSectionImageSize: CGSize
```

<a id="discussion"></a>

## Discussion

This value is in points. To get the image dimensions in pixels, multiple the size values by the scale factor in the [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating a section

- [init(items:)](cplistsection/init%28items_%29-6ksy3.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-6xewg.md)
- [init(items:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:)](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.
- [init(items:)](cplistsection/init%28items_%29-32d0q.md)
- [init(items:header:sectionIndexTitle:)](cplistsection/init%28items_header_sectionindextitle_%29-743we.md)
- [init(coder:)](cplistsection/init%28coder_%29.md)

# CPMaximumListSectionImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size of images you include in section headers.

## Declaration

```objectivec
extern const CGSize CPMaximumListSectionImageSize;
```

<a id="discussion"></a>

## Discussion

This value is in points. To get the image dimensions in pixels, multiple the size values by the scale factor in the [carTraitCollection](cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating a section

- [initWithItems:header:headerSubtitle:headerImage:headerButton:sectionIndexTitle:](cplistsection/init%28items_header_headersubtitle_headerimage_headerbutton_sectionindextitle_%29.md): Creates a section with list items, a header, a section index title, and section header details.

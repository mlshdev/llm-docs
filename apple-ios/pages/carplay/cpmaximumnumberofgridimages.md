> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaximumnumberofgridimages](https://developer.apple.com/documentation/carplay/cpmaximumnumberofgridimages)

# CPMaximumNumberOfGridImages (Swift)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum number of images that an image row can contain.

## Declaration

```swift
let CPMaximumNumberOfGridImages: Int
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the total number of images that CarPlay allows in an image row. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

## See Also

### Managing Content

- [text](cplistimagerowitem/text.md): The list item’s primary text.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [update(\_:)](cplistimagerowitem/update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.

# CPMaximumNumberOfGridImages (Objective-C)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum number of images that an image row can contain.

## Declaration

```objectivec
extern const NSUInteger CPMaximumNumberOfGridImages;
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the total number of images that CarPlay allows in an image row. The list item may display fewer images, depending on the width of the vehicle’s primary screen.

## See Also

### Managing Content

- [text](cplistimagerowitem/text.md): The list item’s primary text.
- [gridImages](cplistimagerowitem/gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [updateImages:](cplistimagerowitem/update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [maximumImageSize](cplistimagerowitem/maximumimagesize.md): Deprecated. The maximum size of an image that an image row can display.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem/maximumimagesize](https://developer.apple.com/documentation/carplay/cplistimagerowitem/maximumimagesize)

# maximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

The maximum size of an image that an image row can display.

> Use +\[CPListImageRowItemElement maximumImageSize\] on an appropriate element

## Declaration

```swift
class var maximumImageSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the maximum size that CarPlay allows for a single image in an image row.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [gridImages](gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [update(\_:)](update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

# maximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 26.0) · iPadOS 14.0+ (deprecated in 26.0) · Mac Catalyst 14.0+ (deprecated in 26.0)

The maximum size of an image that an image row can display.

> Use +\[CPListImageRowItemElement maximumImageSize\] on an appropriate element

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumImageSize;
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the maximum size that CarPlay allows for a single image in an image row.

## See Also

### Managing Content

- [text](text.md): The list item’s primary text.
- [gridImages](gridimages.md): Deprecated. The images that appear in the list item’s image row.
- [updateImages:](update%28__%29.md): Deprecated. Adds, removes, reorders, or updates the images in the list item’s image row.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

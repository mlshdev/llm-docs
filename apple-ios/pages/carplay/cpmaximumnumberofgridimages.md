> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaximumnumberofgridimages

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

### Managing the row’s content

- [text](cplistimagerowitem/text.md): The row’s primary text.
- [elements](cplistimagerowitem/elements.md): The elements to display in the row.
- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](cplistimagerowitem/userinfo.md): App-specific data you associate with the item.

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

### Managing the row’s content

- [text](cplistimagerowitem/text.md): The row’s primary text.
- [elements](cplistimagerowitem/elements.md): The elements to display in the row.
- [allowsMultipleLines](cplistimagerowitem/allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](cplistimagerowitem/userinfo.md): App-specific data you associate with the item.

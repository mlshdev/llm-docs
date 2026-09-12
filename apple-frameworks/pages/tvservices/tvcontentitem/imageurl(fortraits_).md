> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/imageurl(fortraits:)](https://developer.apple.com/documentation/tvservices/tvcontentitem/imageurl(fortraits:))

# imageURL(forTraits:) (Swift)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+ (deprecated in 13.0)

Retrieve the URL for the image that best matches the specified traits.

## Declaration

```swift
func imageURL(forTraits traits: TVContentItemImageTrait) -> URL?
```

## Parameters

- `traits`: The traits for the image you want. For example, you might ask specifically for the variant of the image that supports a dark interface.

<a id="return-value"></a>

## Return Value

The URL for the image asset, or `nil` if an image with the specified traits was not found.

<a id="Discussion"></a>

## Discussion

The image URL can be an absolute path on the local device or an HTTP path. The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURL](imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [setImageURL(\_:forTraits:)](setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

# imageURLForTraits: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+ (deprecated in 13.0)

Retrieve the URL for the image that best matches the specified traits.

## Declaration

```objectivec
- (NSURL *) imageURLForTraits:(TVContentItemImageTrait) traits;
```

## Parameters

- `traits`: The traits for the image you want. For example, you might ask specifically for the variant of the image that supports a dark interface.

<a id="return-value"></a>

## Return Value

The URL for the image asset, or `nil` if an image with the specified traits was not found.

<a id="Discussion"></a>

## Discussion

The image URL can be an absolute path on the local device or an HTTP path. The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURL](imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [setImageURL:forTraits:](setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

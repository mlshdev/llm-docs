> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/imageurl](https://developer.apple.com/documentation/tvservices/tvcontentitem/imageurl)

# imageURL (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 11.0)

A URL giving the location of the image to be displayed for this content item.

> Use setImageURL:forTraits: to set image URLs into TVContentItem.

## Declaration

```swift
var imageURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The image URL can be an absolute path on the local device or an HTTP path. The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURL(forTraits:)](imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL(\_:forTraits:)](setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

# imageURL (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 11.0)

A URL giving the location of the image to be displayed for this content item.

> Use setImageURL:forTraits: to set image URLs into TVContentItem.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * imageURL;
```

<a id="Discussion"></a>

## Discussion

The image URL can be an absolute path on the local device or an HTTP path. The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURLForTraits:](imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL:forTraits:](setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

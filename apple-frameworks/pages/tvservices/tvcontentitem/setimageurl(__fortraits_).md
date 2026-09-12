> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/setimageurl(_:fortraits:)](https://developer.apple.com/documentation/tvservices/tvcontentitem/setimageurl(_:fortraits:))

# setImageURL(\_:forTraits:) (Swift)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+ (deprecated in 13.0)

## Declaration

```swift
func setImageURL(_ aURL: URL?, forTraits traits: TVContentItemImageTrait)
```

## Parameters

- `aURL`: The URL corresponding to the image location. This parameter can be an absolute path on the local device or an HTTP path. Specify `nil` to remove the image associated with the given traits.
- `traits`: The traits to associate with the image. For example, you might specify that the image applies only to dark interfaces.

<a id="Discussion"></a>

## Discussion

The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURL](imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURL(forTraits:)](imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

# setImageURL:forTraits: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+ (deprecated in 13.0)

## Declaration

```objectivec
- (void) setImageURL:(NSURL *) aURL forTraits:(TVContentItemImageTrait) traits;
```

## Parameters

- `aURL`: The URL corresponding to the image location. This parameter can be an absolute path on the local device or an HTTP path. Specify `nil` to remove the image associated with the given traits.
- `traits`: The traits to associate with the image. For example, you might specify that the image applies only to dark interfaces.

<a id="Discussion"></a>

## Discussion

The preferred file format for this image is a layered image file that provides the proper 3d effects. For more information, see [App Programming Guide for tvOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppleTV_PG/index.html#//apple_ref/doc/uid/TP40015241).

## See Also

### Accessing Image Resources

- [imageURL](imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURLForTraits:](imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [TVContentItemImageTrait](../tvcontentitemimagetrait.md): Traits describing the type of image you want.

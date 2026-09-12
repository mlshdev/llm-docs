> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/setimageurl(_:for:)](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/setimageurl(_:for:))

# setImageURL(\_:for:) (Swift)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Associates an image with the current item.

## Declaration

```swift
func setImageURL(_ imageURL: URL?, for traits: TVTopShelfItem.ImageTraits)
```

## Parameters

- `imageURL`: The URL of the image. Specify `nil` to remove the image with the specified traits from the item.
- `traits`: The traits that describe the image.

<a id="Discussion"></a>

## Discussion

Use this method to assign images to a top shelf item. For most items, the system displays only an image. For carousel items, the system initially displays an image, but switches to the preview video when the navigation focus stops on the item.

The system always chooses the image whose traits match the target device.

## See Also

### Providing an Image for the Item

- [imageURL(for:)](imageurl%28for_%29.md): Returns an image associated with the current item.
- [TVTopShelfItem.ImageTraits](imagetraits.md): Constants describing the image format.

# setImageURL:forTraits: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Associates an image with the current item.

## Declaration

```objectivec
- (void) setImageURL:(NSURL *) imageURL forTraits:(TVTopShelfItemImageTraits) traits;
```

## Parameters

- `imageURL`: The URL of the image. Specify `nil` to remove the image with the specified traits from the item.
- `traits`: The traits that describe the image.

<a id="Discussion"></a>

## Discussion

Use this method to assign images to a top shelf item. For most items, the system displays only an image. For carousel items, the system initially displays an image, but switches to the preview video when the navigation focus stops on the item.

The system always chooses the image whose traits match the target device.

## See Also

### Providing an Image for the Item

- [imageURLForTraits:](imageurl%28for_%29.md): Returns an image associated with the current item.
- [TVTopShelfItemImageTraits](imagetraits.md): Constants describing the image format.

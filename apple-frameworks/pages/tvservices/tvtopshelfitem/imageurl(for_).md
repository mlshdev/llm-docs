> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/imageurl(for:)](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/imageurl(for:))

# imageURL(for:) (Swift)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Returns an image associated with the current item.

## Declaration

```swift
func imageURL(for traits: TVTopShelfItem.ImageTraits) -> URL?
```

## Parameters

- `traits`: The traits that describe the image.

<a id="return-value"></a>

## Return Value

The image associated with the specified traits; otherwise, `nil` if you did not previously assign an image with the specified traits.

## See Also

### Providing an Image for the Item

- [setImageURL(\_:for:)](setimageurl%28__for_%29.md): Associates an image with the current item.
- [TVTopShelfItem.ImageTraits](imagetraits.md): Constants describing the image format.

# imageURLForTraits: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Returns an image associated with the current item.

## Declaration

```objectivec
- (NSURL *) imageURLForTraits:(TVTopShelfItemImageTraits) traits;
```

## Parameters

- `traits`: The traits that describe the image.

<a id="return-value"></a>

## Return Value

The image associated with the specified traits; otherwise, `nil` if you did not previously assign an image with the specified traits.

## See Also

### Providing an Image for the Item

- [setImageURL:forTraits:](setimageurl%28__for_%29.md): Associates an image with the current item.
- [TVTopShelfItemImageTraits](imagetraits.md): Constants describing the image format.

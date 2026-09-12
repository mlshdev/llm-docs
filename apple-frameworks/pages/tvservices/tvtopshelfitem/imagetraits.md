> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/imagetraits](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/imagetraits)

# TVTopShelfItem.ImageTraits (Swift)

**Framework:** TV Services  
**Kind:** Structure  
**Availability:** tvOS 13.0+

Constants describing the image format.

## Declaration

```swift
struct ImageTraits
```

## Topics

### Image Traits

- [screenScale1x](imagetraits/screenscale1x.md): An image to display on devices running in a 1x resolution mode.
- [screenScale2x](imagetraits/screenscale2x.md): A high-resolution image to display on devices running in a 2x resolution mode.

### Initializers

- [init(rawValue:)](imagetraits/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Providing an Image for the Item

- [imageURL(for:)](imageurl%28for_%29.md): Returns an image associated with the current item.
- [setImageURL(\_:for:)](setimageurl%28__for_%29.md): Associates an image with the current item.

# TVTopShelfItemImageTraits (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 13.0+

Constants describing the image format.

## Declaration

```objectivec
enum TVTopShelfItemImageTraits : NSUInteger;
```

## Topics

### Image Traits

- [TVTopShelfItemImageTraitScreenScale1x](imagetraits/screenscale1x.md): An image to display on devices running in a 1x resolution mode.
- [TVTopShelfItemImageTraitScreenScale2x](imagetraits/screenscale2x.md): A high-resolution image to display on devices running in a 2x resolution mode.

## See Also

### Providing an Image for the Item

- [imageURLForTraits:](imageurl%28for_%29.md): Returns an image associated with the current item.
- [setImageURL:forTraits:](setimageurl%28__for_%29.md): Associates an image with the current item.

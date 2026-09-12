> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitemimagetrait](https://developer.apple.com/documentation/tvservices/tvcontentitemimagetrait)

# TVContentItemImageTrait (Swift)

**Framework:** TV Services  
**Kind:** Structure  
**Availability:** tvOS 11.0+

Traits describing the type of image you want.

## Declaration

```swift
struct TVContentItemImageTrait
```

## Topics

### Traits

- [screenScale1x](tvcontentitemimagetrait/screenscale1x.md): An image meant for a regular display.
- [screenScale2x](tvcontentitemimagetrait/screenscale2x.md): An image meant for a Retina display.
- [userInterfaceStyleDark](tvcontentitemimagetrait/userinterfacestyledark.md): An image meant for a dark user interface.
- [userInterfaceStyleLight](tvcontentitemimagetrait/userinterfacestylelight.md): An image meant for a light user interface.

### Initializers

- [init(rawValue:)](tvcontentitemimagetrait/init%28rawvalue_%29.md)

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

### Accessing Image Resources

- [imageURL](tvcontentitem/imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURL(forTraits:)](tvcontentitem/imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL(\_:forTraits:)](tvcontentitem/setimageurl%28__fortraits_%29.md): Deprecated.

# TVContentItemImageTrait (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 11.0+

Traits describing the type of image you want.

## Declaration

```objectivec
enum TVContentItemImageTrait : NSUInteger;
```

## Topics

### Traits

- [TVContentItemImageTraitScreenScale1x](tvcontentitemimagetrait/screenscale1x.md): An image meant for a regular display.
- [TVContentItemImageTraitScreenScale2x](tvcontentitemimagetrait/screenscale2x.md): An image meant for a Retina display.
- [TVContentItemImageTraitUserInterfaceStyleDark](tvcontentitemimagetrait/userinterfacestyledark.md): An image meant for a dark user interface.
- [TVContentItemImageTraitUserInterfaceStyleLight](tvcontentitemimagetrait/userinterfacestylelight.md): An image meant for a light user interface.

## See Also

### Accessing Image Resources

- [imageURL](tvcontentitem/imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURLForTraits:](tvcontentitem/imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL:forTraits:](tvcontentitem/setimageurl%28__fortraits_%29.md): Deprecated.

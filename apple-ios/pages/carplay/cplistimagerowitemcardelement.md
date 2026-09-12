> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitemcardelement](https://developer.apple.com/documentation/carplay/cplistimagerowitemcardelement)

# CPListImageRowItemCardElement (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
@MainActor class CPListImageRowItemCardElement
```

## Topics

### Initializers

- [init(coder:)](cplistimagerowitemcardelement/init%28coder_%29.md)
- [init(image:showsImageFullHeight:title:subtitle:tintColor:)](cplistimagerowitemcardelement/init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Initialize a card element with an image.
- [init(thumbnail:title:subtitle:tintColor:)](cplistimagerowitemcardelement/init%28thumbnail_title_subtitle_tintcolor_%29.md): Initialize an element with a thumbnail, title, subtitle, and tint color.

### Instance Properties

- [showsImageFullHeight](cplistimagerowitemcardelement/showsimagefullheight.md): A Boolean value indicating whether the element should be fill with the image.
- [subtitle](cplistimagerowitemcardelement/subtitle.md): The subtitle associated with this element.
- [thumbnail](cplistimagerowitemcardelement/thumbnail.md): The thumbnail associated with this element.
- [tintColor](cplistimagerowitemcardelement/tintcolor.md): A UIColor used to tint the element. When @c showsImageFullHeight is true, the tint color is applied behind the labels at the bottom of the card. Otherwise, this color is part of the gradient color at the bottom of the card.
- [title](cplistimagerowitemcardelement/title.md): The title associated with this element.

### Type Properties

- [maximumFullHeightImageSize](cplistimagerowitemcardelement/maximumfullheightimagesize.md): The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is true. Images provided will be resized to this size.
- [maximumImageSize](cplistimagerowitemcardelement/maximumimagesize.md): The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is false. Images provided will be resized to this size.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

### Conforms To

- [CPPlayableItem](cpplayableitem.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPListImageRowItemCardElement (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
@interface CPListImageRowItemCardElement : CPListImageRowItemElement
```

## Topics

### Instance Properties

- [showsImageFullHeight](cplistimagerowitemcardelement/showsimagefullheight.md): A Boolean value indicating whether the element should be fill with the image.
- [subtitle](cplistimagerowitemcardelement/subtitle.md): The subtitle associated with this element.
- [thumbnail](cplistimagerowitemcardelement/thumbnail.md): The thumbnail associated with this element.
- [tintColor](cplistimagerowitemcardelement/tintcolor.md): A UIColor used to tint the element. When @c showsImageFullHeight is true, the tint color is applied behind the labels at the bottom of the card. Otherwise, this color is part of the gradient color at the bottom of the card.
- [title](cplistimagerowitemcardelement/title.md): The title associated with this element.

### Instance Methods

- [initWithImage:showsImageFullHeight:title:subtitle:tintColor:](cplistimagerowitemcardelement/init%28image_showsimagefullheight_title_subtitle_tintcolor_%29.md): Initialize a card element with an image.
- [initWithThumbnail:title:subtitle:tintColor:](cplistimagerowitemcardelement/init%28thumbnail_title_subtitle_tintcolor_%29.md): Initialize an element with a thumbnail, title, subtitle, and tint color.

### Type Properties

- [maximumFullHeightImageSize](cplistimagerowitemcardelement/maximumfullheightimagesize.md): The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is true. Images provided will be resized to this size.
- [maximumImageSize](cplistimagerowitemcardelement/maximumimagesize.md): The expected image size for the image in your @c CPListImageRowItemCardElement when @c showsImageFullHeight is false. Images provided will be resized to this size.

## Relationships

### Inherits From

- [CPListImageRowItemElement](cplistimagerowitemelement.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

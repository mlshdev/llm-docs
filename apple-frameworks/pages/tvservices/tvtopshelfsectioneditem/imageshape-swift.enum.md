> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfsectioneditem/imageshape-swift.enum](https://developer.apple.com/documentation/tvservices/tvtopshelfsectioneditem/imageshape-swift.enum)

# TVTopShelfSectionedItem.ImageShape (Swift)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 13.0+

Constants indicating the aspect ratio of an image.

## Declaration

```swift
enum ImageShape
```

## Topics

### Image Shapes

- [TVTopShelfSectionedItem.ImageShape.square](imageshape-swift.enum/square.md): An image with a 1:1 aspect ratio.
- [TVTopShelfSectionedItem.ImageShape.poster](imageshape-swift.enum/poster.md): A poster-shaped image with a 2:3 aspect ratio.
- [TVTopShelfSectionedItem.ImageShape.hdtv](imageshape-swift.enum/hdtv.md): An image with a 16:9 aspect ratio.

### Initializers

- [init(rawValue:)](imageshape-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Image Size Information

- [imageSize(for:)](../tvtopshelfsectionedcontent/imagesize%28for_%29.md): Returns the dimensions to use for images of the specified shape.

# TVTopShelfSectionedItemImageShape (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 13.0+

Constants indicating the aspect ratio of an image.

## Declaration

```objectivec
enum TVTopShelfSectionedItemImageShape : NSInteger;
```

## Topics

### Image Shapes

- [TVTopShelfSectionedItemImageShapeSquare](imageshape-swift.enum/square.md): An image with a 1:1 aspect ratio.
- [TVTopShelfSectionedItemImageShapePoster](imageshape-swift.enum/poster.md): A poster-shaped image with a 2:3 aspect ratio.
- [TVTopShelfSectionedItemImageShapeHDTV](imageshape-swift.enum/hdtv.md): An image with a 16:9 aspect ratio.

## See Also

### Getting the Image Size Information

- [imageSizeForImageShape:](../tvtopshelfsectionedcontent/imagesize%28for_%29.md): Returns the dimensions to use for images of the specified shape.

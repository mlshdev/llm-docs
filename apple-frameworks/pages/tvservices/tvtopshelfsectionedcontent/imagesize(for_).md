> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfsectionedcontent/imagesize(for:)](https://developer.apple.com/documentation/tvservices/tvtopshelfsectionedcontent/imagesize(for:))

# imageSize(for:) (Swift)

**Framework:** TV Services  
**Kind:** Type Method  
**Availability:** tvOS 13.0+

Returns the dimensions to use for images of the specified shape.

## Declaration

```swift
class func imageSize(for shape: TVTopShelfSectionedItem.ImageShape) -> CGSize
```

## Parameters

- `shape`: The image shape whose dimensions you want.

<a id="return-value"></a>

## Return Value

The recommended size of the image, in points.

## See Also

### Getting the Image Size Information

- [TVTopShelfSectionedItem.ImageShape](../tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

# imageSizeForImageShape: (Objective-C)

**Framework:** TV Services  
**Kind:** Type Method  
**Availability:** tvOS 13.0+

Returns the dimensions to use for images of the specified shape.

## Declaration

```objectivec
+ (CGSize) imageSizeForImageShape:(TVTopShelfSectionedItemImageShape) shape;
```

## Parameters

- `shape`: The image shape whose dimensions you want.

<a id="return-value"></a>

## Return Value

The recommended size of the image, in points.

## See Also

### Getting the Image Size Information

- [TVTopShelfSectionedItemImageShape](../tvtopshelfsectioneditem/imageshape-swift.enum.md): Constants indicating the aspect ratio of an image.

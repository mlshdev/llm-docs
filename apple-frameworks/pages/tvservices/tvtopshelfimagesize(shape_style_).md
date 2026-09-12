> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfimagesize(shape:style:)](https://developer.apple.com/documentation/tvservices/tvtopshelfimagesize(shape:style:))

# TVTopShelfImageSize(shape:style:) (Swift)

**Framework:** TV Services  
**Kind:** Function  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns the ideal size for an image, according to its particular shape and style.

> TVTopShelfImageSizeForShape has been replaced by \[TVTopShelfSectionedContent imageSizeForImageShape:\] and \[TVTopShelfInsetContent imageSize\]

## Declaration

```swift
func TVTopShelfImageSize(shape: TVContentItemImageShape, style: TVTopShelfContentStyle) -> CGSize
```

## Parameters

- `shape`: The shape of the content item.
- `style`: The style of the TV Top Shelf user interface.

<a id="Discussion"></a>

## Discussion

Call this function to determine the ideal image size to use to avoid image scaling. Typically, if your app has access to multiple images for a given piece of content, you use this function to choose which image most closely matches the ideal size for the version of the operating system that your app is running on. An image provided in that size does not require any image scaling. If you request the size of a shape that is not allowed in the given style, the function returns [CGSizeZero](../coregraphics/cgsizezero.md).

## See Also

### Content

- [TVContentItem](tvcontentitem.md): Deprecated. An object that describes either a piece of content or a container for other content items.
- [TVContentIdentifier](tvcontentidentifier.md): Deprecated. An object that uniquely identifies media content in either a single piece or a collection.

# TVTopShelfImageSizeForShape (Objective-C)

**Framework:** TV Services  
**Kind:** Function  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns the ideal size for an image, according to its particular shape and style.

> TVTopShelfImageSizeForShape has been replaced by \[TVTopShelfSectionedContent imageSizeForImageShape:\] and \[TVTopShelfInsetContent imageSize\]

## Declaration

```objectivec
extern CGSize TVTopShelfImageSizeForShape(TVContentItemImageShape shape, TVTopShelfContentStyle style);
```

## Parameters

- `shape`: The shape of the content item.
- `style`: The style of the TV Top Shelf user interface.

<a id="Discussion"></a>

## Discussion

Call this function to determine the ideal image size to use to avoid image scaling. Typically, if your app has access to multiple images for a given piece of content, you use this function to choose which image most closely matches the ideal size for the version of the operating system that your app is running on. An image provided in that size does not require any image scaling. If you request the size of a shape that is not allowed in the given style, the function returns [CGSizeZero](../coregraphics/cgsizezero.md).

## See Also

### Content

- [TVContentItem](tvcontentitem.md): Deprecated. An object that describes either a piece of content or a container for other content items.
- [TVContentIdentifier](tvcontentidentifier.md): Deprecated. An object that uniquely identifies media content in either a single piece or a collection.

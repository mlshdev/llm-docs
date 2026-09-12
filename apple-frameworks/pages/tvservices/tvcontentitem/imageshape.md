> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/imageshape](https://developer.apple.com/documentation/tvservices/tvcontentitem/imageshape)

# imageShape (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The intended aspect ratio or shape of the content image.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var imageShape: TVContentItemImageShape { get set }
```

<a id="Discussion"></a>

## Discussion

When the TV Content object is being used to represent Top Shelf items, then the allowed values for this property depend on the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) property of the object that implements the TV TopShelf extension. For more information, see [TVTopShelfProvider](../tvtopshelfprovider.md).

If the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) value is [TVTopShelfContentStyle.inset](../tvtopshelfcontentstyle/inset.md), the valid values of this property are:

- [TVContentItemImageShape.extraWide](../tvcontentitemimageshape/extrawide.md)

If the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) value is [TVTopShelfContentStyle.sectioned](../tvtopshelfcontentstyle/sectioned.md), the valid values are:

- [TVContentItemImageShape.poster](../tvcontentitemimageshape/poster.md)
- [TVContentItemImageShape.square](../tvcontentitemimageshape/square.md)
- [TVContentItemImageShape.HDTV](../tvcontentitemimageshape/hdtv.md)

If the value of this property is not valid for the current Top Shelf style, the system reserves the right to scale the image in any way.

## See Also

### Inspecting the Content Properties

- [creationDate](creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

# imageShape (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The intended aspect ratio or shape of the content image.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic) TVContentItemImageShape imageShape;
```

<a id="Discussion"></a>

## Discussion

When the TV Content object is being used to represent Top Shelf items, then the allowed values for this property depend on the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) property of the object that implements the TV TopShelf extension. For more information, see [TVTopShelfProvider](../tvtopshelfprovider.md).

If the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) value is [TVTopShelfContentStyleInset](../tvtopshelfcontentstyle/inset.md), the valid values of this property are:

- [TVContentItemImageShapeExtraWide](../tvcontentitemimageshape/extrawide.md)

If the [topShelfStyle](../tvtopshelfprovider/topshelfstyle.md) value is [TVTopShelfContentStyleSectioned](../tvtopshelfcontentstyle/sectioned.md), the valid values are:

- [TVContentItemImageShapePoster](../tvcontentitemimageshape/poster.md)
- [TVContentItemImageShapeSquare](../tvcontentitemimageshape/square.md)
- [TVContentItemImageShapeHDTV](../tvcontentitemimageshape/hdtv.md)

If the value of this property is not valid for the current Top Shelf style, the system reserves the right to scale the image in any way.

## See Also

### Inspecting the Content Properties

- [creationDate](creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

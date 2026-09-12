> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitemimageshape](https://developer.apple.com/documentation/tvservices/tvcontentitemimageshape)

# TVContentItemImageShape (Swift)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+

An enumerated type that identifies the shape in which the content item should be displayed.

## Declaration

```swift
enum TVContentItemImageShape
```

## Topics

### Constants

- [TVContentItemImageShape.none](tvcontentitemimageshape/none.md): The content has no particular shape.
- [TVContentItemImageShape.poster](tvcontentitemimageshape/poster.md): The content has a width:height ratio of `2:3`.
- [TVContentItemImageShape.square](tvcontentitemimageshape/square.md): The content has a width:height ratio of `1:1`.
- [TVContentItemImageShape.SDTV](tvcontentitemimageshape/sdtv.md): The content is standard-definition television content with a width:height ratio of `4:3`.
- [TVContentItemImageShape.HDTV](tvcontentitemimageshape/hdtv.md): The content is high-definition television content with a width:height ratio of `16:9`.
- [TVContentItemImageShape.wide](tvcontentitemimageshape/wide.md): The content has a width:height ratio of `8:3`.
- [TVContentItemImageShape.extraWide](tvcontentitemimageshape/extrawide.md): The content has a width:height ratio of `80:27`.

### Initializers

- [init(rawValue:)](tvcontentitemimageshape/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the Content Properties

- [creationDate](tvcontentitem/creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](tvcontentitem/duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](tvcontentitem/expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](tvcontentitem/imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.

# TVContentItemImageShape (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+

An enumerated type that identifies the shape in which the content item should be displayed.

## Declaration

```objectivec
enum TVContentItemImageShape : NSInteger;
```

## Topics

### Constants

- [TVContentItemImageShapeNone](tvcontentitemimageshape/none.md): The content has no particular shape.
- [TVContentItemImageShapePoster](tvcontentitemimageshape/poster.md): The content has a width:height ratio of `2:3`.
- [TVContentItemImageShapeSquare](tvcontentitemimageshape/square.md): The content has a width:height ratio of `1:1`.
- [TVContentItemImageShapeSDTV](tvcontentitemimageshape/sdtv.md): The content is standard-definition television content with a width:height ratio of `4:3`.
- [TVContentItemImageShapeHDTV](tvcontentitemimageshape/hdtv.md): The content is high-definition television content with a width:height ratio of `16:9`.
- [TVContentItemImageShapeWide](tvcontentitemimageshape/wide.md): The content has a width:height ratio of `8:3`.
- [TVContentItemImageShapeExtraWide](tvcontentitemimageshape/extrawide.md): The content has a width:height ratio of `80:27`.

## See Also

### Inspecting the Content Properties

- [creationDate](tvcontentitem/creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](tvcontentitem/duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](tvcontentitem/expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](tvcontentitem/imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.

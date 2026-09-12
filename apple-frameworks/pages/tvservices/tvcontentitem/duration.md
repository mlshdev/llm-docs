> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/duration](https://developer.apple.com/documentation/tvservices/tvcontentitem/duration)

# duration (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The amount of time required to play the media to completion.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
@NSCopying var duration: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The duration number is interpreted as a double number of seconds.

## See Also

### Inspecting the Content Properties

- [creationDate](creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

# duration (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The amount of time required to play the media to completion.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * duration;
```

<a id="Discussion"></a>

## Discussion

The duration number is interpreted as a double number of seconds.

## See Also

### Inspecting the Content Properties

- [creationDate](creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

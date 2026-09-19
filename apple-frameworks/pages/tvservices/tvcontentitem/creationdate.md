> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvservices/tvcontentitem/creationdate

# creationDate (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
var creationDate: Date? { get set }
```

## See Also

### Inspecting the Content Properties

- [duration](duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

# creationDate (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * creationDate;
```

## See Also

### Inspecting the Content Properties

- [duration](duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](../tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

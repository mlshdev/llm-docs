> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/summary](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/summary)

# summary (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A descriptive summary of a movie or show.

## Declaration

```swift
var summary: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays the summary only in the [TVTopShelfCarouselContent.Style.details](../tvtopshelfcarouselcontent/style-swift.enum/details.md) style.

## See Also

### Specifying the Item Details

- [contextTitle](contexttitle.md): A localized string describing why the item is shown in the top shelf.
- [genre](genre.md): The genre assigned to the movie or show.
- [duration](duration.md): The length of the movie or show, in seconds.
- [creationDate](creationdate.md): The original release date of the content.

# summary (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A descriptive summary of a movie or show.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * summary;
```

<a id="Discussion"></a>

## Discussion

The system displays the summary only in the [TVTopShelfCarouselContentStyleDetails](../tvtopshelfcarouselcontent/style-swift.enum/details.md) style.

## See Also

### Specifying the Item Details

- [contextTitle](contexttitle.md): A localized string describing why the item is shown in the top shelf.
- [genre](genre.md): The genre assigned to the movie or show.
- [duration](duration.md): The length of the movie or show, in seconds.
- [creationDate](creationdate.md): The original release date of the content.

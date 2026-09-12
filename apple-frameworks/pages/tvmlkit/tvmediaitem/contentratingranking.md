> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvmediaitem/contentratingranking](https://developer.apple.com/documentation/tvmlkit/tvmediaitem/contentratingranking)

# contentRatingRanking (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The rating for a video item.

> Please use SwiftUI or UIKit

## Declaration

```swift
var contentRatingRanking: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

The rating is a value from `0-1000`. This value corresponds to a specific rating used by different countries. For example, a rating value can represent a PG-13 rating in the United States and an MA15+ in Australia.

## See Also

### Rating Media Content

- [containsExplicitContent](containsexplicitcontent.md): Deprecated. A Boolean value indicating whether the item contains adult-oriented content.
- [contentRatingDomain](contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItem.ContentRatingDomain](contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.

# contentRatingRanking (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

The rating for a video item.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * contentRatingRanking;
```

<a id="Discussion"></a>

## Discussion

The rating is a value from `0-1000`. This value corresponds to a specific rating used by different countries. For example, a rating value can represent a PG-13 rating in the United States and an MA15+ in Australia.

## See Also

### Rating Media Content

- [containsExplicitContent](containsexplicitcontent.md): Deprecated. A Boolean value indicating whether the item contains adult-oriented content.
- [contentRatingDomain](contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItemContentRatingDomain](contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.

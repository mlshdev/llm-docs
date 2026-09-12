> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvmediaitem/containsexplicitcontent](https://developer.apple.com/documentation/tvmlkit/tvmediaitem/containsexplicitcontent)

# containsExplicitContent (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A Boolean value indicating whether the item contains adult-oriented content.

> Please use SwiftUI or UIKit

## Declaration

```swift
var containsExplicitContent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [type](type.md) is `video`.

## See Also

### Rating Media Content

- [contentRatingDomain](contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItem.ContentRatingDomain](contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.
- [contentRatingRanking](contentratingranking.md): Deprecated. The rating for a video item.

# containsExplicitContent (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

A Boolean value indicating whether the item contains adult-oriented content.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsExplicitContent;
```

<a id="Discussion"></a>

## Discussion

This property is ignored when the [type](type.md) is `video`.

## See Also

### Rating Media Content

- [contentRatingDomain](contentratingdomain-swift.property.md): Deprecated. The media domain that the rating applies to.
- [TVMediaItemContentRatingDomain](contentratingdomain-swift.struct.md): Deprecated. A value identifying the media’s content rating domain.
- [contentRatingRanking](contentratingranking.md): Deprecated. The rating for a video item.

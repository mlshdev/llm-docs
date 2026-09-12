> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/mediaitem/1627366-contentratingranking](https://developer.apple.com/documentation/tvmljs/mediaitem/1627366-contentratingranking)

# contentRatingRanking

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The rating for a video item.

## Declaration

```
attribute int contentRatingRanking;
```

<a id="discussion"></a>

## Discussion

The rating is a value from `0`-`1000`. This value corresponds to a specific rating used by different countries. For example, a rating value can represent a PG-13 rating in the United States and an MA15+ in Australia.

## See Also

### Rating Media Content

- [contentRatingDomain](1627422-contentratingdomain.md): The domain that the rating applies to.
- [isExplicit](1627358-isexplicit.md): A Boolean value indicating whether the item has explicit lyrics.

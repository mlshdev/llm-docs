> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/mediaitem/1627422-contentratingdomain

# contentRatingDomain

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The domain that the rating applies to.

## Declaration

```
attribute String contentRatingDomain;
```

<a id="discussion"></a>

## Discussion

There are three valid values for this property: `movie`, `music`, and `tvshow`.

## See Also

### Rating Media Content

- [contentRatingRanking](1627366-contentratingranking.md): The rating for a video item.
- [isExplicit](1627358-isexplicit.md): A Boolean value indicating whether the item has explicit lyrics.

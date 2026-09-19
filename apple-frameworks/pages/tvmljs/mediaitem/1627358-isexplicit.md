> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/mediaitem/1627358-isexplicit

# isExplicit

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A Boolean value indicating whether the item has explicit lyrics.

## Declaration

```
attribute Boolean isExplicit;
```

<a id="discussion"></a>

## Discussion

This property is ignored if the `MediaItem` object type is `video`.

## See Also

### Rating Media Content

- [contentRatingDomain](1627422-contentratingdomain.md): The domain that the rating applies to.
- [contentRatingRanking](1627366-contentratingranking.md): The rating for a video item.

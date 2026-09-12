> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediasortorder](https://developer.apple.com/documentation/sirikitcloudmedia/mediasortorder)

# MediaSortOrder

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

A prioritization for search results.

## Declaration

```
string MediaSortOrder
```

## Possible Values

- `newest`: The media item with the most recent release date is first.
- `oldest`: The media item with the oldest release date is first.
- `best`: The best media item is first.
- `worst`: The worst media item is first.
- `popular`: The media item people are listening to most frequently is first.
- `unpopular`: The media item people are listening to least frequently is first.
- `trending`: The media item with the biggest recent surge in popularity is first.
- `recommended`: The media item the system determines to best match the user’s taste is first.
- `unknown`: An unspecified sort order.

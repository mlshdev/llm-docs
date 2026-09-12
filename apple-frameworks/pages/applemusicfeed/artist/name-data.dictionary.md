> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/artist/name-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/artist/name-data.dictionary)

# Artist.Name

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to localized names for the artist.

## Declaration

```
object Artist.Name
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `name` — `string`: A localized uncensored name for the artist.

## See Also

### Related objects

- [Artist.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.

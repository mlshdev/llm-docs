> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/artist/namepronunciation-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/artist/namepronunciation-data.dictionary)

# Artist.NamePronunciation

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to translations for the specific pronunciation-name translation type.

## Declaration

```
object Artist.NamePronunciation
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `name` — `string`: A localized pronunciation of the artist name.

## See Also

### Related objects

- [Artist.Name](name-data.dictionary.md): A mapping of locale to localized names for the artist.

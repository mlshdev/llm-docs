> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song/prices-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/song/prices-data.dictionary)

# Song.Prices

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to pricing information.

## Declaration

```
object Song.Prices
```

## Properties

- `prices` — `[Song.Prices.Price]`: A list of localized pricing information for the content.
- `storefront` — `string`:

<a id="Data-example"></a>

## Data example

The feed export is in Parquet format. This data example is in JSON format for illustrative purposes.

```
{
"prices": {
    "fr": [
        {
            "currencyCode": "EUR",
            "price": "1.29",
            "priceType": "buy"
            "quality": "standard-definition"
        },
        {
            "currencyCode": "EUR",
            "price": "2.29",
            "priceType": "buy"
            "quality": "high-definition"
        }
    ]
}
}
```

## Topics

### Related objects

- [Song.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [Song.ArtistRole](artistrole.md): Information about an artist’s role.
- [Song.Genre](genre.md): A genre name and its structure.
- [Song.Name](name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.RelatedAlbum](relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](relatedartist.md): Information about a related artist.
- [Song.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the song.
- [Song.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Song.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.

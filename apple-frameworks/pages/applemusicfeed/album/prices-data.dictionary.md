> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/prices-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/album/prices-data.dictionary)

# Album.Prices

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to pricing information.

## Declaration

```
object Album.Prices
```

## Properties

- `prices` — `[Album.Prices.Price]`: A list of localized pricing information for the content.
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

- [Album.Prices.Price](prices-data.dictionary/price.md): Information about a pricing offer.

## See Also

### Related objects

- [Album.ArtistRole](artistrole.md): Information about an artist’s role.
- [Album.Artworks](artworks-data.dictionary.md): A mapping of locale to localized album cover art.
- [Album.Genre](genre.md): A genre name and its structure.
- [Album.Name](name-data.dictionary.md): A mapping of locale to localized names for the album.
- [Album.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Album.RecordLabel](recordlabel.md): Information about a record label.
- [Album.RelatedArtist](relatedartist.md): Information about a related artist.
- [Album.RelatedSong](relatedsong.md): Information about a related song.
- [Album.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the album.
- [Album.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Album.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.

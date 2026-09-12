> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/books/attributes-data.dictionary](https://developer.apple.com/documentation/devicemanagement/books/attributes-data.dictionary)

# Books.Attributes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

The attributes for a books resource.

## Declaration

```
object Books.Attributes
```

## Properties

- `artistName` — `string` (required): The name of the artist for this content.
- `artwork` — `Artwork` (required): The artwork for this content.
- `genreNames` — `[string]` (required): A list of genre names associated with this content.
- `isbn` — `string`: The ISBN of this book.
- `name` — `string` (required): The (potentially) censored name of the content.
- `offers` — `[Books.Attributes.Offers]` (required): A map of offer and asset information for the associated content.
- `seriesInfo` — `Books.Attributes.SeriesInfo`: Info about the series this book is a part of.
- `taxExclusivePrices` — `[Books.Attributes.TaxExclusivePrices]`: **(Personalized)** Tax-exclusive prices for this salable.
- `taxRate` — `number`: **(Personalized)** Tax rate for this salable for the current account.
- `url` — `string` (required): A canonical URL to the content that may be used for sharing or linking to the content externally.
- `userRating` — `Books.Attributes.UserRating` (required): User rating information for the content.

## Topics

### Related Objects

- [Books.Attributes.Offers](attributes-data.dictionary/offers-data.dictionary.md)
- [Books.Attributes.SeriesInfo](attributes-data.dictionary/seriesinfo-data.dictionary.md)
- [Books.Attributes.TaxExclusivePrices](attributes-data.dictionary/taxexclusiveprices-data.dictionary.md)
- [Books.Attributes.UserRating](attributes-data.dictionary/userrating-data.dictionary.md)

## See Also

### Related Objects

- [Books.Relationships](relationships-data.dictionary.md)

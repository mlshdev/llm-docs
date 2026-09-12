> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/ratings](https://developer.apple.com/documentation/applemusicapi/ratings)

# Ratings

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object that represents a rating for a resource.

## Declaration

```
object Ratings
```

## Properties

- `id` — `string` (required): The identifier for the rating.
- `type` — `string` (required): This value is always `ratings`.
  **Allowed values:** `ratings`
- `href` — `string` (required): The relative location for the playlist resource.
- `attributes` — `Ratings.Attributes`: The attributes for the rating.
- `relationships` — `Ratings.Relationships`: The relationships from ratings to other resources.

## Topics

### Related Objects

- [Ratings.Attributes](ratings/attributes-data.dictionary.md): The attributes for a rating resource.
- [Ratings.Relationships](ratings/relationships-data.dictionary.md): The relationships for a rating resource.

## See Also

### Handling the Response

- [RatingsResponse](ratingsresponse.md): The response to a request for a rating.
- [RatingRequest](ratingrequest.md): A request containing the data for a rating.

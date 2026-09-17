> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicapi/ratingsresponse

# RatingsResponse

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The response to a request for a rating.

## Declaration

```
object RatingsResponse
```

## Properties

- `data` — `[Ratings]` (required): The [Ratings](ratings.md) included in the response for the request.

## See Also

### Handling the Response

- [Ratings](ratings.md): An object that represents a rating for a resource.
- [RatingRequest](ratingrequest.md): A request containing the data for a rating.

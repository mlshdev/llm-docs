> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/ratingrequest](https://developer.apple.com/documentation/applemusicapi/ratingrequest)

# RatingRequest

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A request containing the data for a rating.

## Declaration

```
object RatingRequest
```

## Properties

- `attributes` — `RatingRequest.Attributes` (required): The dictionary that includes the value for the resource’s rating.
- `type` — `string` (required): The type of the payload.
  **Allowed values:** `ratings`

## Topics

### Related Objects

- [RatingRequest.Attributes](ratingrequest/attributes-data.dictionary.md): The attributes for a rating request object.

## See Also

### Handling the Response

- [Ratings](ratings.md): An object that represents a rating for a resource.
- [RatingsResponse](ratingsresponse.md): The response to a request for a rating.

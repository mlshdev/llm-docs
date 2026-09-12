> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/get-attribution-_language_](https://developer.apple.com/documentation/weatherkitrestapi/get-attribution-_language_)

# GET /attribution/{language}

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Web Service Endpoint  
**Availability:** Weather API 1.0.0+

Receive attribution information.

## URL

```http
GET https://weatherkit.apple.com/attribution/{language}
```

## Path Parameters

- `language` — `string` (required): The language tag to use for localizing responses.

## Response Codes

- `200` OK — `Attribution`: The request is successful. The attribution information is in the response.

## See Also

### Performing attribution

- [Attribution](attribution.md): A list of image asset URLs for attribution.

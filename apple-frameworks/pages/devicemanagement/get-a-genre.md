> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/get-a-genre](https://developer.apple.com/documentation/devicemanagement/get-a-genre)

# Get a Genre

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.2+

Fetch metadata for a genre from the catalog by using its identifier.

## URL

```http
GET https://api.ent.apple.com/v1/catalog/{storefront}/genres/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the genre.
- `storefront` — `string` (required): An iTunes Store territory, specified by an ISO 3166 alpha-2 country code. The possible values are the `id` attributes of `Storefrontobjects`.

## Query Parameters

- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## Response Codes

- `200` OK — `GenresResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```

```

**Response**

```json

```

## Topics

### Responses

- [GenresResponse](genresresponse.md)
- [UnauthorizedResponse](unauthorizedresponse.md): A response that indicates an incorrect authorization header.
- [ErrorsResponse](errorsresponse.md): The collection of errors that occurred while processing the request.

## See Also

### Fetching genres

- [Get Multiple Genres](get-multiple-genres.md): Fetch metadata for genres from the catalog by using their identifiers.

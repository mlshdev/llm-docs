> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/get-the-best-supported-language-based-on-the-acceptlanguage](https://developer.apple.com/documentation/applemusicapi/get-the-best-supported-language-based-on-the-acceptlanguage)

# Get the best supported language for a storefront

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Music 1.0+

Fetch the best supported language for a storefront from a list.

## URL

```http
GET https://api.music.apple.com/v1/language/{storefront}/tag
```

## Path Parameters

- `storefront` — `string` (required): An iTunes Store territory, specified by an ISO 3166 alpha-2 country code. The possible values are the `id` attributes of `Storefront` objects.

## Query Parameters

- `acceptLanguage` — `[string]` (required): A list of languages to accept.
- `l` — `string`: The localization to use, specified by a language tag. The possible values are in the `supportedLanguageTags` array belonging to the `Storefront` object specified by `storefront`. Otherwise, the default is `defaultLanguageTag` in `Storefront`.

## Response Codes

- `200` OK — `LangageTagResponse`: The request was successful.
- `401` Unauthorized — `UnauthorizedResponse`: A response indicating an incorrect `Authorization` header.
- `500` Internal Server Error — `ErrorsResponse`: A response indicating an error occurred on the server.

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```
https://api.music.apple.com/v1/language/us/tag?acceptLanguage=en-US
```

**Response**

```json
{
    “results”: {
        “tag”: “en-US”
    }
}
```

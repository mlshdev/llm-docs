> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/errorresponseitem

# ErrorResponseItem

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The error response details in the response body.

## Declaration

```
object ErrorResponseItem
```

## Properties

- `field` — `string`: The details regarding an error.
- `message` — `string`: A nonlocalized (U.S. English only) user-friendly string that describes the error.
- `messageCode` — `string`: A system-assigned error code.

<a id="Discussion"></a>

## Discussion

```json
{
   "errors": [
     {
       "messageCode": "404",
       "message": "Not Found: The API can’t locate the resource.",
       "field": "null"
     },
   ...
   ]
}

```

## See Also

### Error Responses

- [ApiErrorResponse](apierrorresponse.md): A parent object of the error response body.
- [ErrorResponseBody](errorresponsebody.md): A parent object of the error response.
- [IntegerResponse](integerresponse.md): A common integer type response.
- [VoidResponse](voidresponse.md): A default generic null response.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/integerresponse](https://developer.apple.com/documentation/apple_ads/integerresponse)

# IntegerResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

A common integer type response.

## Declaration

```
object IntegerResponse
```

## Properties

- `data` — `int32`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Error Responses

- [ApiErrorResponse](apierrorresponse.md): A parent object of the error response body.
- [ErrorResponseBody](errorresponsebody.md): A parent object of the error response.
- [ErrorResponseItem](errorresponseitem.md): The error response details in the response body.
- [VoidResponse](voidresponse.md): A default generic null response.

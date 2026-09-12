> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintentresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintentresponse)

# PlayMediaIntentResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A structure that contains a response code indicating how your service handles a play media intent.

## Declaration

```
object PlayMediaIntentResponse
```

## Properties

- `class` — `string` (required): The specific type of response.
  **Allowed values:** `PlayMediaIntentResponse`
- `code` — `PlayMediaIntentResponseCode` (required): A response code that indicates whether your service can play the media item.

## Relationships

### Inherits From

- [IntentResponse](intentresponse.md)

## See Also

### Handling a Play Media Intent

- [PlayMediaIntentHandlingHandleInvocationResponse](playmediaintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved play media intent.
- [PlayMediaIntentResponseCode](playmediaintentresponsecode.md): Codes your service can return when handling a play media intent.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playmediaintenthandlinghandleinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/playmediaintenthandlinghandleinvocationresponse)

# PlayMediaIntentHandlingHandleInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to handle a fully resolved play media intent.

## Declaration

```
object PlayMediaIntentHandlingHandleInvocationResponse
```

## Properties

- `result` — `PlayMediaIntentHandlingHandleInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `PlayMediaIntentHandling.handle`

## Topics

### Specifying a Result

- [PlayMediaIntentHandlingHandleInvocationResponse.Result](playmediaintenthandlinghandleinvocationresponse/result-data.dictionary.md): The result of handling an intent to play a media item.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Handling a Play Media Intent

- [PlayMediaIntentResponse](playmediaintentresponse.md): A structure that contains a response code indicating how your service handles a play media intent.
- [PlayMediaIntentResponseCode](playmediaintentresponsecode.md): Codes your service can return when handling a play media intent.

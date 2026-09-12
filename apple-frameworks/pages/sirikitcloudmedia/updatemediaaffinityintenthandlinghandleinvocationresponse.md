> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintenthandlinghandleinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintenthandlinghandleinvocationresponse)

# UpdateMediaAffinityIntentHandlingHandleInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to handle a fully resolved update media affinity intent.

## Declaration

```
object UpdateMediaAffinityIntentHandlingHandleInvocationResponse
```

## Properties

- `result` — `UpdateMediaAffinityIntentHandlingHandleInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `UpdateMediaAffinityIntentHandling.handle`

## Topics

### Specifying the Result

- [UpdateMediaAffinityIntentHandlingHandleInvocationResponse.Result](updatemediaaffinityintenthandlinghandleinvocationresponse/result-data.dictionary.md): The result of handling an intent to update media affinity.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Handling an Update Media Affinity Intent

- [UpdateMediaAffinityIntentResponse](updatemediaaffinityintentresponse.md): A structure that contains a response code indicating how your service handles an update media affinity intent.
- [UpdateMediaAffinityIntentResponseCode](updatemediaaffinityintentresponsecode.md): Codes your service can return when handling an update media affinity intent.

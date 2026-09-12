> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintenthandlinghandleinvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintenthandlinghandleinvocationresponse)

# AddMediaIntentHandlingHandleInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Your service’s response to a request to handle a fully resolved add media intent.

## Declaration

```
object AddMediaIntentHandlingHandleInvocationResponse
```

## Properties

- `result` — `AddMediaIntentHandlingHandleInvocationResponse.Result` (required): The outcome of handling the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `AddMediaIntentHandling.handle`

## Topics

### Specifying the Result

- [AddMediaIntentHandlingHandleInvocationResponse.Result](addmediaintenthandlinghandleinvocationresponse/result-data.dictionary.md): The result of handling an intent to add media items to a specified library or playlist.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Confirming and Handling an Add Media Intent

- [AddMediaIntentResponse](addmediaintentresponse.md): A structure that contains a response code indicating your service’s progress in handling an add media intent.
- [AddMediaIntentResponseCode](addmediaintentresponsecode.md): Codes your service can return when confirming or handling an add media intent.
- [AddMediaIntentHandlingConfirmInvocationResponse](addmediaintenthandlingconfirminvocationresponse.md): The service’s response to a request to confirm an add media intent.

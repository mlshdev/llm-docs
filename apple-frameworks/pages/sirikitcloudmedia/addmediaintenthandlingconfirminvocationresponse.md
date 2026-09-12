> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintenthandlingconfirminvocationresponse](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintenthandlingconfirminvocationresponse)

# AddMediaIntentHandlingConfirmInvocationResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

The service’s response to a request to confirm an add media intent.

## Declaration

```
object AddMediaIntentHandlingConfirmInvocationResponse
```

## Properties

- `result` — `AddMediaIntentHandlingConfirmInvocationResponse.Result` (required): The results of processing the intent.
- `method` — `string` (required): The action your service takes to process this intent.
  **Allowed values:** `AddMediaIntentHandling.confirm`

## Topics

### Specifying the Result

- [AddMediaIntentHandlingConfirmInvocationResponse.Result](addmediaintenthandlingconfirminvocationresponse/result-data.dictionary.md): The result of receiving the user’s confirmation that they want to add the media items to the destination.

## Relationships

### Inherits From

- [InvocationResponse](invocationresponse.md)

## See Also

### Confirming and Handling an Add Media Intent

- [AddMediaIntentResponse](addmediaintentresponse.md): A structure that contains a response code indicating your service’s progress in handling an add media intent.
- [AddMediaIntentResponseCode](addmediaintentresponsecode.md): Codes your service can return when confirming or handling an add media intent.
- [AddMediaIntentHandlingHandleInvocationResponse](addmediaintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved add media intent.

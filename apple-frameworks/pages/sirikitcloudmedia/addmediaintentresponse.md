> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/addmediaintentresponse](https://developer.apple.com/documentation/sirikitcloudmedia/addmediaintentresponse)

# AddMediaIntentResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A structure that contains a response code indicating your service’s progress in handling an add media intent.

## Declaration

```
object AddMediaIntentResponse
```

## Properties

- `class` — `string` (required): The specific type of response.
  **Allowed values:** `AddMediaIntentResponse`
- `code` — `AddMediaIntentResponseCode` (required): A response code that indicates whether your service can add the media items to the library or playlist.

## Relationships

### Inherits From

- [IntentResponse](intentresponse.md)

## See Also

### Confirming and Handling an Add Media Intent

- [AddMediaIntentResponseCode](addmediaintentresponsecode.md): Codes your service can return when confirming or handling an add media intent.
- [AddMediaIntentHandlingConfirmInvocationResponse](addmediaintenthandlingconfirminvocationresponse.md): The service’s response to a request to confirm an add media intent.
- [AddMediaIntentHandlingHandleInvocationResponse](addmediaintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved add media intent.

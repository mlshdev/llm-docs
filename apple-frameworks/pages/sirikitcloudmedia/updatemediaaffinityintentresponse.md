> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinityintentresponse](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinityintentresponse)

# UpdateMediaAffinityIntentResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A structure that contains a response code indicating how your service handles an update media affinity intent.

## Declaration

```
object UpdateMediaAffinityIntentResponse
```

## Properties

- `class` — `string` (required): The specific type of response.
  **Allowed values:** `UpdateMediaAffinityIntentResponse`
- `code` — `UpdateMediaAffinityIntentResponseCode` (required): A response code that indicates whether your service can play the media item.

## Relationships

### Inherits From

- [IntentResponse](intentresponse.md)

## See Also

### Handling an Update Media Affinity Intent

- [UpdateMediaAffinityIntentHandlingHandleInvocationResponse](updatemediaaffinityintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved update media affinity intent.
- [UpdateMediaAffinityIntentResponseCode](updatemediaaffinityintentresponsecode.md): Codes your service can return when handling an update media affinity intent.

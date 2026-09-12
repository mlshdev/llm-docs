> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updatemediaaffinity](https://developer.apple.com/documentation/sirikitcloudmedia/updatemediaaffinity)

# Process an Update Media Affinity Intent

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Web Service Endpoint  
**Availability:** SiriKit Cloud Media 1.0.2+

Record the user’s preference for a specific media item or a broader category of media.

## URL

```http
POST https://cloudextension-testservice.local/api/intent/updateMediaAffinity
```

## Header Parameters

- `Accept-Language` — `string` (required): The client’s current user interface language. Respond with localized content for this language, if available.
- `Request-Timeout` — `uint32` (required): An approximate deadline, in seconds, for processing this real-time user request. The [Session](session.md) object provides the exact deadline for handling an intent.
  **Minimum:** `1`
- `User-Agent` — `string` (required): The extension protocol running on the client. This is an RFC 7231-compliant string that contains the product name *AppleCloudExtension* and the SiriKit Extension library version running on the client.
  **Maximum length:** `250`  
  **Allowed values:** `/AppleCloudExtension/([0-9]+\.[0-9]+\.[0-9]+) *.*/`
- `x-applecloudextension-retry-count` — `uint32`: The number of previous requests from the client. The client omits this header on the first attempt.
  **Minimum:** `1`
- `x-applecloudextension-session-id` — `string` (required): A constant session identifier to include in each request and response. Respond to each request with the session ID the client sends in that request.
  **Minimum length:** `1`  
  **Maximum length:** `128`

## HTTP Body

Content type: `application/json`

Type: `[UpdateMediaAffinityIntentHandlingInvocation]`

An array of requests to process intents.

## Response Codes

- `200` OK — `[UpdateMediaAffinityIntentHandlingInvocationResponse]`: The request succeeds.

## Topics

### Processing an Update Media Affinity Intent

- [UpdateMediaAffinityIntent](updatemediaaffinityintent.md): An object that describes a user’s stated preference regarding media items.
- [UpdateMediaAffinityIntentHandlingInvocation](updatemediaaffinityintenthandlinginvocation.md): A request to process an update media affinity intent.
- [UpdateMediaAffinityIntentHandlingInvocationResponse](updatemediaaffinityintenthandlinginvocationresponse.md): The service’s response to a request to process an update media affinity intent.

### Identifying the Intended Media Items

- [UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse](updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse.md): Your service’s response to a request to resolve media items in an update media affinity intent.
- [UpdateMediaAffinityMediaItemResolutionResult](updatemediaaffinitymediaitemresolutionresult.md): A media item that matches an update media affinity intent, or information about why your service can’t provide a media item.
- [UpdateMediaAffinityMediaItemUnsupportedReason](updatemediaaffinitymediaitemunsupportedreason.md): Reasons the media service can’t update information about the media item.

### Discerning Like or Dislike

- [MediaAffinityType](mediaaffinitytype.md): A preference or dislike for a media item.
- [UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse](updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse.md): Your service’s response to a request that expresses a preference or dislike for a media item.
- [MediaAffinityTypeResolutionResult](mediaaffinitytyperesolutionresult.md): A media affinity that matches an update media affinity intent, or information about why your service can’t determine the media affinity.

### Handling an Update Media Affinity Intent

- [UpdateMediaAffinityIntentHandlingHandleInvocationResponse](updatemediaaffinityintenthandlinghandleinvocationresponse.md): Your service’s response to a request to handle a fully resolved update media affinity intent.
- [UpdateMediaAffinityIntentResponse](updatemediaaffinityintentresponse.md): A structure that contains a response code indicating how your service handles an update media affinity intent.
- [UpdateMediaAffinityIntentResponseCode](updatemediaaffinityintentresponsecode.md): Codes your service can return when handling an update media affinity intent.

## See Also

### Playback Events

- [QueueActivityReportEvent](queueactivityreportevent.md): An event that occurs during content playback.
- [Report Playback Progress and Activity](updateactivity.md): Monitor progress through the playback queue.
- [UpdateActivityRequest](updateactivityrequest.md): A report of the client’s current playback state and recent user interaction, and an opportunity for your service to modify the client’s playback queue.
- [UpdateActivityResponse](updateactivityresponse.md): Updates to the client’s queue and user activity in response to a report of playback progress.

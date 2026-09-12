> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/updateactivity](https://developer.apple.com/documentation/sirikitcloudmedia/updateactivity)

# Report Playback Progress and Activity

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Web Service Endpoint  
**Availability:** SiriKit Cloud Media 1.0.2+

Monitor progress through the playback queue.

## URL

```http
POST https://cloudextension-testservice.local/api/queues/updateActivity
```

## Header Parameters

- `Accept-Language` — `string` (required): The client’s current user interface language. Respond with localized content for this language, if available.
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

Type: `UpdateActivityRequest`

The most recent state of the client’s playback queue.

## Response Codes

- `200` OK — `UpdateActivityResponse`: The request succeeds, and the response includes an updated [UserActivity](useractivity.md) or [Queue](queue.md).
- `204` No Content: The request succeeds, and the client can continue to use its current [UserActivity](useractivity.md) and playback queue.
- `401` Unauthorized: The request requires authorization. The client may attempt to reauthorize and then retry.
- `404` Not Found: The provided [QueueIdentifier](queueidentifier.md) doesn’t match any current queue, or is permanently expired. The client may still use its current [UserActivity](useractivity.md) to request a new queue.
- `410` Gone: The request’s [UserActivity](useractivity.md) is permanently expired and invalid for requesting a queue.

## See Also

### Playback Events

- [QueueActivityReportEvent](queueactivityreportevent.md): An event that occurs during content playback.
- [UpdateActivityRequest](updateactivityrequest.md): A report of the client’s current playback state and recent user interaction, and an opportunity for your service to modify the client’s playback queue.
- [UpdateActivityResponse](updateactivityresponse.md): Updates to the client’s queue and user activity in response to a report of playback progress.
- [Process an Update Media Affinity Intent](updatemediaaffinity.md): Record the user’s preference for a specific media item or a broader category of media.
